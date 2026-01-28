import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true
    })
  }, [])

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Base stand */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 3, 32]} />
        <meshStandardMaterial color="#8b4513" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Target board backing */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial color="#f5f5dc" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Target rings - red */}
      <mesh position={[0, 0, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.15, 16, 32]} />
        <meshStandardMaterial color="#dc143c" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Target rings - white */}
      <mesh position={[0, 0, 0.07]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.15, 16, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Target center - red */}
      <mesh position={[0, 0, 0.08]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
        <meshStandardMaterial color="#dc143c" metalness={0.2} roughness={0.6} />
      </mesh>
    </group>
  )
}

export default Target