import React from 'react'

export const Home = () => {
  const [count , setCount] = useState(0)
  let ref = useRef (null)
  console.log(red.current) 
  const handleCount = () => {
    setCount(count + 1)

  }
  console.log ('render')
  
  return (
    <div>Home</div>
  )
}
