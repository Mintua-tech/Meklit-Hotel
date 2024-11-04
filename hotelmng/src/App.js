import logo from './logo.svg';
import './app.styles.scss';
import Navbar from './components/Navbar';
import {BrowserRouter , Router, Route , Link , Routes} from 'react-router-dom';
//import Home from "./screens/Home/Home";
import Rooms from "./screens/Rooms/Rooms";
import Room from "./screens/Room/Room";
import Header from "./components/Header/Header";
import Booking from "./screens/Booking/Booking";
import Success from "./screens/Success/Success";
import Homescreen from './screens/Homescreen';
import Home from './components/Home';
import './css/style.css';
import './css/responsive-style.css';


function App() {
  return (
    <div className="App">
     
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/home" exact Component={Homescreen}/>
     <Route path="/rooms" element={<Rooms />} />
     <Route path="/rooms/all/:id" element={<Room />} />
     <Route path="/bookings/:id" element={<Booking />} />
     <Route path="/success" element={<Success />} />
     </Routes>
     
     </BrowserRouter>
     <Home/>
    </div>
  );
}

export default App;
