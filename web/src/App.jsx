import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import Experience from './Experience'
import UI from './UI'

function Loader() {
  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
      <p className="text-cyan-500 font-mono text-xs tracking-widest animate-pulse">INITIALIZING 3D EXPERIENCE</p>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Artificial delay to ensure fonts and styles are parsed
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full">
      {loading && <Loader />}

      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        dpr={[1, 2]}
        shadows
        gl={{ alpha: false, antialias: true, stencil: false, depth: true }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>

      <UI />
    </div>
  )
}
