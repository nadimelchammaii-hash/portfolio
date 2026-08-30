<template>
  <div ref="container" aria-hidden="true" class="hero-visual" />
</template>

<script lang="ts" setup>
  import * as THREE from 'three'
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const container = ref<HTMLDivElement>()

  // Anything created in onMounted that holds a GPU resource is collected
  // here so onBeforeUnmount can dispose it. WebGL contexts and GPU buffers
  // are not garbage-collected by Vue tearing down the component — skipping
  // this step leaks memory every time the component mounts/unmounts.
  const disposables: { dispose: () => void }[] = []
  let renderer: THREE.WebGLRenderer | undefined
  let animationFrameId = 0
  let handleResize: (() => void) | undefined

  onMounted(() => {
    const el = container.value
    if (!el) return

    const width = el.clientWidth
    const height = el.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.append(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    // Cobalt accent matches the theme's `primaryContainer` color. Hardcoded
    // as a hex number because Three.js materials need a plain color value,
    // not a live CSS variable — this won't re-tint on a light/dark toggle,
    // which is fine here since the design uses this exact accent in both.
    const wireMaterial = new THREE.MeshPhongMaterial({
      color: 0x25_63_eb,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x25_63_eb,
      emissive: 0x25_63_eb,
      emissiveIntensity: 0.5,
    })
    disposables.push(wireMaterial, coreMaterial)

    const shellGeometry = new THREE.IcosahedronGeometry(1.5, 2)
    const coreGeometry = new THREE.IcosahedronGeometry(0.5, 1)
    const nodeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
    disposables.push(shellGeometry, coreGeometry, nodeGeometry)

    group.add(new THREE.Mesh(shellGeometry, wireMaterial))
    group.add(new THREE.Mesh(coreGeometry, coreMaterial))

    for (let i = 0; i < 20; i++) {
      const node = new THREE.Mesh(nodeGeometry, coreMaterial)
      const angle = Math.random() * Math.PI * 2
      const radius = 2 + Math.random()
      node.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 3, Math.sin(angle) * radius)
      group.add(node)
    }

    const light = new THREE.PointLight(0xff_ff_ff, 1, 100)
    light.position.set(5, 5, 5)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0x40_40_40))

    // Visitors who've asked their OS for reduced motion get a single still
    // frame instead of a continuous rotation — the Stitch export always
    // animated, which is a real accessibility gap for vestibular disorders.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function renderFrame () {
      group.rotation.y += 0.005
      group.rotation.x += 0.002
      renderer!.render(scene, camera)
    }

    if (prefersReducedMotion) {
      renderer.render(scene, camera)
    } else {
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate)
        renderFrame()
      }
      animate()
    }

    handleResize = () => {
      if (!renderer) return
      const w = el.clientWidth
      const h = el.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    if (handleResize) window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrameId)
    for (const item of disposables) item.dispose()
    renderer?.dispose()
    renderer?.domElement.remove()
  })
</script>

<style scoped>
.hero-visual {
  /* Right half of the section, not full-bleed: the sphere renders centered
     within its own container, and the hero text is left-aligned — a
     full-width backdrop put the sphere directly behind the paragraph text. */
  position: absolute;
  inset: 0;
  left: 45%;
  z-index: 0;
  opacity: 0.55;
  pointer-events: none;
}
</style>
