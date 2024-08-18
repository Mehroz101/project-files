import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "./styles/HomePage.css"
import "./styles/Basic.css"
import Login from "./pages/Login";
import MainApp from "./pages/MainApp";
import Profile from "./pages/Profile";
import Reservation from "./pages/Reservation";
import ListyourSpace from "./components/ListyourSpace";
import ParkingOwnerDashboard from "./parkingOwner/pages/ParkingOwnerDashboard";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/searchResult" element={<MainApp/>}/>
      <Route path="/profile" element={<Profile/>}/> 
      <Route path="/reservation" element={<Reservation/>}/> 
      <Route path="/listyourspace" element={<ListyourSpace/>}/> 
      <Route path="/dashboard" element={<ParkingOwnerDashboard/>}/> 
    </Routes>
  </>;
}

export default App;
