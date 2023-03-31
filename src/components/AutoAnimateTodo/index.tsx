import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const AutoAnimateTodo = () => {
  const [parent, enable] = useAutoAnimate({ duration: 500 })
  const [items, setItems] = useState(defaultItems)
  const [isEnabled, setIsEnabled] = useState(true)

  const toggleEnabled = () => {
    enable(!isEnabled)
    setIsEnabled(!isEnabled)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const name = event.target.elements.name.value
    if (name) {
      setItems((prev) => [{ name }, ...prev])
      event.target.elements.name.value = ''
    }
  }

  return (
    <div className="my-5 space-y-4 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3"
      >
        <label htmlFor="enabled" className="flex">
          Animations Enabled
        </label>
        <input
          onChange={toggleEnabled}
          type="checkbox"
          id="enabled"
          checked={isEnabled}
        />
        <div>
          <input
            autoComplete="off"
            id="name"
            className="border-2 border-blue-500 rounded-lg mr-2 p-1 text-black"
            placeholder="Add new event"
          />
          <button className="bg-blue-500 text-white rounded-lg px-2 py-1">
            Submit
          </button>
        </div>
      </form>
      <h1 className="flex justify-center w-full">Upcoming Events</h1>
      <div ref={parent} className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <GridItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

function GridItem({ item }: { item: { name: string } }) {
  return (
    <div className="border-2 space-y-4 border-gray-200 rounded-lg p-2">
      <div className="font-bold">{item.name}</div>
    </div>
  )
}

const defaultItems = [
  { name: 'Christmas' },
  { name: 'New Years Eve' },
  { name: 'Halloween' },
]
