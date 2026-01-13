import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
          Hello!
      </h1>
      <p>
          This is my website, I took it all down because I want to remake it from scratch. The old version can still be pulled from my Github if you're trying to stalk me I guess.
      </p>
      <hr />
      <p>
          Feel free to have this picture of my cat for visiting :)
      </p>
      <img id="cat" src="./cat.jpg" alt="Sorry your web browser failed to load the cat... :(" />
    </div>
  )
}

export default App
