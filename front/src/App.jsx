// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Todo from './components/Todo.jsx'
import Register from './components/Register.jsx'

function App() {
 

  return (
    <>
    <Register></Register>


      <Login></Login>
      <Todo></Todo>
      {/* <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
