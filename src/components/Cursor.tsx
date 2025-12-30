import { useEffect, useRef } from 'react'

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  
  // Use refs to store coordinates so we don't trigger re-renders
  const mouse = useRef({ x: 0, y: 0 })
  const cursor = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // 1. Update mouse coordinates on move
    const onMouseMove = (e: any) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    // 2. The Animation Loop (The "Chasing" Logic)
    const animate = () => {
      if (dotRef.current) {
        // "Lerp" formula: Current + (Target - Current) * Speed
        // Change 0.1 to something else to adjust speed:
        // 0.05 = Very slow/floaty
        // 0.2 = Faster/snappier
        const speed = 0.1;
        
        cursor.current.x += (mouse.current.x - cursor.current.x) * speed;
        cursor.current.y += (mouse.current.y - cursor.current.y) * speed;

        dotRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', onMouseMove)
    
    // Start the animation loop
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div 
      ref={dotRef}
      // Added 'transition-colors' if you ever change color, but removed transform transition 
      // because JS handles the movement now.
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      // Centering the dot so the middle is exactly on the pointer
      style={{ marginTop: '-8px', marginLeft: '-8px' }} 
    />
  )
}

export default Cursor