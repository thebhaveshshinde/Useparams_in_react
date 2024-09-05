import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Welcome from "./Components/Welcome.jsx"
import Username from "./Components/Username.jsx"


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route  path='/' element={<Welcome/>} />
        <Route path='/users/:usersname' element={<Username />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
