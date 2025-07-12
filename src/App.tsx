import Content from "./layouts/Content"
import Header from "./layouts/Header"
import SideBar from "./layouts/SideBar"

function App() {

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      <Header/>
      <div className="flex items-center h-full">
        <SideBar/>
        <Content/>
      </div>
    </div>
  )
}

export default App
