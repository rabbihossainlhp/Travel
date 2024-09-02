import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Notfund from "./pages/Notfund"
import SignIn from "./pages/SignIn"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Notfund/>}/> 
        <Route path="/signin" element={<SignIn/>}/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
