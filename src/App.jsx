import { BrowserRouter, Routes,Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from './assets/components/home/HomePage'
import NotFounde from "./assets/components/ui/NotFound"

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage />}/>
      <Route path="*" element={<NotFounde/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App