import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMouseMove)
    }

    // limpiar eventos
    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
    }
  }, [enabled])

  // Change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  // Tener en cuenta useEffect()
  // [] => solo se monta una vez cuando se monta el componente
  // [enabled] => se ejecuta cada vez que el estado cambie de enabled y cuando se monta el componente
  // undefined => se ejecuta cada vez que se renderiza el componente

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#000',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      {/* <h2>Mouse Follower</h2> */}
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Disabled Follower' : 'Enabled Follower'}</button>
    </main>
  )
}

export default App
