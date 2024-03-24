import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Synthese from './pages/Synthese'
import Transaction from './pages/Transaction'
import ContactUs from './pages/ContactUs'
import Page404 from './pages/Page404'
// import Homepage from "./components/Homepage"

function App() {
   return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='profil' element={<Profile/>}/>
          <Route path='synthese' element={<Synthese/>}/>
          <Route path='transaction' element={<Transaction/>}/>
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   {/* <Homepage/> */}
  </>)
}

export default App
