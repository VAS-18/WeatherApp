import { useState } from 'react'
import { WeatherBox } from './Components/WeatherBox'
import Vid from './Components/Vid'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="">
    <WeatherBox/>
   </div>

  )
}

export default App
