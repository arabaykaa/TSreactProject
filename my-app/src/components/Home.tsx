import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import MainP from "./Main/MainP/MainP";
import ToDo from "./Main/ToDo/ToDo";
import Header from "./Header/Header";
import LogIn from "./Forms/LogIn/LogIn";
import Registration from "./Forms/Registration/Registration";

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/MainP" element={<MainP />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
