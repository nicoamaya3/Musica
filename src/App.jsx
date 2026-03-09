import { Home } from "./assets/pages/Home"
import { Header } from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"



export const App = () => {
  return (
    <>
    
    <Header/>
    <Home/>
    
    <BrowserRouter>
    <Routes>
      <Route/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
