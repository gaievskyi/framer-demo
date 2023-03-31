import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const AutoAnimateList = () => {
  const [items, setItems] = useState<number[]>([])
  const [parent, enableAnimations] = useAutoAnimate()
  const add = () => setItems([...items, items.length])

  return (
    <>
      <ul ref={parent}>
        {items.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        <button onClick={add}>Add number</button>
        <button onClick={() => enableAnimations(false)}>Disable</button>
      </div>
    </>
  )
}
