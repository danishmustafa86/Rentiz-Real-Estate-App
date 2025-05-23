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
import Posts from "../pages/posts/Posts";
import GithubData from "../pages/githubdata/githubdata";
import Counter from "../pages/counter/Counter";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Objects from "../pages/objects/Objects";

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
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/objects" element={<Objects />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>


    );
};

export default Routing;