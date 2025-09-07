
import { Routes , Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import DestinationLayout from './Pages/Destination/DestinationLayout';
import Mars from './Pages/Destination/Mars';
import Moon from './Pages/Destination/Moon';
import Europa from './Pages/Destination/Europa';
import Titan from './Pages/Destination/Titan';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';


function App() {

  return (
    
     <div className='relative'>
       <Navbar />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/crew' element={<Crew />} />
         <Route path='/technology' element={<Technology />} />
         <Route path='/destination' element={<DestinationLayout />}>
            <Route path='mars' element={<Mars />} />
            <Route path='moon' element={<Moon />} />
            <Route path='europa' element={<Europa />} />
            <Route path='titan' element={<Titan />} />
            <Route index element={<Navigate to='moon' replace />} />
         </Route>
       </Routes>
     </div>

  )
}

export default App
