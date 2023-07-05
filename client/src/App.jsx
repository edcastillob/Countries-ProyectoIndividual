import "./App.css";
import { Countries } from "./components/countries/Countries";
import { Routes, Route, useLocation } from "react-router-dom";
import { Detail } from "./components/countryDetail/Detail";
import { FormActivities } from "./components/form/FormActivities";
import { Navbar } from "./components/navBar/Navbar";
import { Home } from "./components/home/Home";
import { Activities } from "./components/activities/Activities";
import { LandingPage } from "./components/landing/LandingPage";
import { About } from "./components/About/About";


export function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : <Navbar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/countries" element={<Countries />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/activities" element={<FormActivities />} />
        <Route exact path="/activity" element={<Activities />} />
      </Routes>
    </>
  );
}
