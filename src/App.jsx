import { useState } from 'react'
import { WeatherBox } from './Components/WeatherBox'




function App() {
  const [count, setCount] = useState(0)

  return (
    
   <div>
    <WeatherBox/>
    
   </div>

  )
}

export default App
