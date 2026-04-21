'use client'

import { OrbitControls, RoundedBox, Sparkles, useCursor } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

type DigitProps = {
  color: string
  position: [number, number, number]
  seed: number
}

function DigitFour({ color, position, seed }: DigitProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  useFrame((state) => {
    if (!groupRef.current) {
      return
    }

    const elapsed = state.clock.elapsedTime + seed
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.35 + Math.sin(elapsed * 0.7) * 0.08,
      0.08,
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.55 + Math.cos(elapsed * 0.45) * 0.12,
      0.08,
    )
    groupRef.current.position.y = position[1] + Math.sin(elapsed * 1.2) * 0.18
  })

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <RoundedBox args={[0.72, 4.2, 0.72]} position={[1.05, 0, 0]} radius={0.12} smoothness={5}>
        <meshPhysicalMaterial color={color} metalness={0.95} roughness={0.18} clearcoat={1} clearcoatRoughness={0.08} emissive={color} emissiveIntensity={hovered ? 0.8 : 0.35} />
      </RoundedBox>
      <RoundedBox args={[2.5, 0.72, 0.72]} position={[0, 0.05, 0]} radius={0.12} smoothness={5}>
        <meshPhysicalMaterial color={color} metalness={0.95} roughness={0.18} clearcoat={1} clearcoatRoughness={0.08} emissive={color} emissiveIntensity={hovered ? 0.8 : 0.35} />
      </RoundedBox>
      <RoundedBox args={[0.72, 3.5, 0.72]} position={[-0.05, 0.92, 0]} rotation={[0, 0, -0.72]} radius={0.12} smoothness={5}>
        <meshPhysicalMaterial color={color} metalness={0.95} roughness={0.18} clearcoat={1} clearcoatRoughness={0.08} emissive={color} emissiveIntensity={hovered ? 0.8 : 0.35} />
      </RoundedBox>
    </group>
  )
}

function DigitZero({ color, position, seed }: DigitProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  useFrame((state) => {
    if (!meshRef.current) {
      return
    }

    const elapsed = state.clock.elapsedTime + seed
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      state.pointer.y * 0.45 + Math.sin(elapsed * 0.7) * 0.1,
      0.08,
    )
    meshRef.current.rotation.y += 0.01
    meshRef.current.position.y = position[1] + Math.sin(elapsed) * 0.22
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <torusGeometry args={[1.2, 0.42, 32, 100]} />
      <meshPhysicalMaterial color={color} metalness={1} roughness={0.15} clearcoat={1} clearcoatRoughness={0.1} emissive={color} emissiveIntensity={hovered ? 0.9 : 0.45} />
    </mesh>
  )
}

function GroundGlow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.35, 0]} receiveShadow>
      <circleGeometry args={[8, 64]} />
      <meshStandardMaterial color="#050816" emissive="#ff6a3d" emissiveIntensity={0.08} />
    </mesh>
  )
}

function SceneContent() {
  const accent = '#ff4d36'

  return (
    <>
      <color attach="background" args={['#050816']} />
      <fog attach="fog" args={['#050816', 10, 22]} />
      <ambientLight intensity={0.9} />
      <spotLight
        position={[0, 8, 8]}
        angle={0.45}
        penumbra={1}
        intensity={65}
        color={accent}
        castShadow
      />
      <pointLight position={[-6, 4, 6]} intensity={20} color="#7dd3fc" />
      <pointLight position={[6, -1, 4]} intensity={16} color="#f8fafc" />
      <Sparkles count={90} scale={[16, 8, 8]} size={2.8} speed={0.35} color={accent} />

      <group position={[0, 0.2, 0]}>
        <DigitFour color={accent} position={[-3.35, 0, 0]} seed={0.35} />
        <DigitZero color="#dbe7ff" position={[0, 0.1, 0]} seed={1.1} />
        <DigitFour color={accent} position={[3.35, 0, 0]} seed={1.85} />
      </group>

      <GroundGlow />

      <OrbitControls
        enablePan={false}
        minDistance={7}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={0.75}
        minPolarAngle={Math.PI / 2.9}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  )
}

export function NotFoundScene({
  sceneKey,
  className = 'h-full w-full',
}: {
  sceneKey: number
  className?: string
}) {
  return (
    <Canvas
      key={sceneKey}
      className={className}
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.4, 9], fov: 38 }}
    >
      <SceneContent />
    </Canvas>
  )
}