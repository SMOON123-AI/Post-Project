import { Route, Routes } from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import Feed from "./pages/Feed"

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="*" element={<CreatePost/> }/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </div>
  )
}

export default App