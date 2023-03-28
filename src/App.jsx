import Header from "./Header/Header"
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Movies from "./Pages/Movies"
import Favorite from "./Pages/Favorite"

function App() {

  return (
    <div className="App any-text bg-gray-800 w-screen h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  )
}

export default App
