import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Detail from './components/Detail'
import NotFound from './components/NotFound'
import MyNavbar from './components/MyNavbar'
import Appointment from './components/Appointment'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MyNavbar />
        <div>WELCOME TO MY WEBSITE</div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/profile'
            element={
              <>
                <h1>ANOTHER PROFILE PAGE!</h1>
                <Profile />
              </>
            }
          />
          <Route path='/detail' element={<Detail />} />
          <Route path='/agenda/:appointmentId' element={<Appointment />} />
          {/* a dynamic route, with the :, is perfect for loading the same component on slightly different routes */}
          {/* the most common usecase is for loading a detail page, a profile page, a product page */}
          <Route path='*' element={<NotFound />} />
          {/* very generic route for handling unmatched paths */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
