import Nav from "./Nav"

function App() {


  return (
    <div className="App bg-gray-800 w-screen h-screen">
      <header className="flex align-middle h-10">
          <h1 className="text-3xl text-green-400 font-bold text-left ml-3 mt-3">
            MOVIE FINDER
          </h1>
          <Nav />

      </header>
      
    </div>
  )
}

export default App
