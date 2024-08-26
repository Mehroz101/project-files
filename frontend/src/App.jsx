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
import ReservationRequest from "./parkingOwner/components/ReservationRequest";
import ManageSpace from "./parkingOwner/components/ManageSpace";
import DashboardContainer from "./parkingOwner/components/DashboardContainer";
import CreateRequest from "./parkingOwner/components/CreateRequest";
import CreateSpace from "./parkingOwner/components/CreateSpace";
import AccountInformation from "./components/AccountInformation";
import ReservationHistory from "./components/ReservationHistory";
import Earning from "./parkingOwner/components/Earning";
import MessagesContainer from "./components/MessagesContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/searchResult" element={<MainApp />} />

      <Route path="/profile" element={<Profile />} >

        <Route index element={<AccountInformation />} />
        <Route path="booking" element={<ReservationHistory />} />
        <Route path="listyourspace" element={<ListyourSpace />} />
        <Route path="message" element={<MessagesContainer />} />

      </Route>
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/listyourspace" element={<ListyourSpace />} />
      {/* Dashboard Route */}
      <Route path="/dashboard" element={<ParkingOwnerDashboard />}>
        <Route index element={<DashboardContainer />} /> {/* Default Dashboard Container */}
        {/* Nested routes under ReservationRequest */}
        <Route path="reservation-request" element={<ReservationRequest />} />
        <Route path="reservation-request/create-request" element={<CreateRequest />} />

        {/* Other routes */}
        <Route path="earning" element={<Earning />} />
        <Route path="manage-space" element={<ManageSpace />} />
        <Route path="manage-space/create-space" element={<CreateSpace />} />
      </Route>
    </Routes>
  );
}

export default App;
