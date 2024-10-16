import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import JhsPage from "./components/pages/JhsPage";
import ShsPage from "./components/pages/ShsPage";
import UniversityPage from "./components/pages/UniversityPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import QuestionsPage from "./components/pages/QuestionsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<QuestionsPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/jhs" element={<JhsPage />}></Route>
          <Route path="/shs" element={<ShsPage />}></Route>
          <Route path="/university" element={<UniversityPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
