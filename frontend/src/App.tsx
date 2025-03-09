import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Navbar from "./components/navbar";


export default function App() {
  return (
    <>
      <div className=" h-screen font-[DM_Sans] ">
     
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/user/signin" element={<SignIn />} />
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>

      
    </>
  );
}
