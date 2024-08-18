import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import Tickets from "./pages/Tickets/Tickets";
import TicketDetail from "./pages/Tickets/TicketDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminCampaign from "./pages/Admin/AdminCampaign";
import AdminTickets from "./pages/Admin/AdminTickets";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="campaign" element={<AdminCampaign />} />
            <Route path="tickets" element={<AdminTickets />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/ticket:id" element={<TicketDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
