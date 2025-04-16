import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Buying from "../pages/buying/Buying";
import ContactUs from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import Renting from "../pages/renting/Renting";
import Selling from "../pages/selling/Selling";
import SignUp from "../pages/signup/Signup";
import GithubData from "../pages/githubdata/githubdata";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Routing(){
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/renting" element={<Renting />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/githubdata" element={<GithubData />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>


    );
};

export default Routing;