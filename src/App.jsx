import { Dancehall } from "./assets/pages/Dancehall"
import { Hiphop } from "./assets/pages/Hiphop"
import { Home } from "./assets/pages/Home"
import { Reggae } from "./assets/pages/Reggae"
import { Header } from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"



export const App = () => {
  return (
    <>
    
    <Header/>
    

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Reggae" element={<Reggae/>} />
      <Route path="/Dancehall" element={<Dancehall/>} />
      <Route path="/HipHop" element={<Hiphop/>} />
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
