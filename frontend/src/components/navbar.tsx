import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
export const Navbar = () => {
  return (
    <>
      <nav className=" max-w-7xl mx-auto flex justify-between items-center py-4 px-4  top-0 fixed right-0 left-0 backdrop-blur-sm ">
        <Link to="/">
          <span className="text-3xl font-bold tracking-tight  ">
            Ulearn
          </span>
        </Link>
        <div className="flex flex-row gap-4 justify-end items-center  ">
            <div className=" hover:bg-purple-200 w-32 px-1 py-3 rounded-md  flex justify-center transition-all duration-300">
                <span className="text-sm font-bold cursor-pointer">Teach on Ulearn</span>
            </div>

          <div className="hover:bg-purple-200 w-10 flex justify-center py-1 rounded-md transition-all duration-300">
           <Link to="/"><img src={cart} alt="cart" className="cursor-pointer " /> </Link> 
          </div>

          <div >
            <button className="w-20 h-10  hover:bg-purple-200 text-purple-600 rounded-md py-2 px-2 text-m outline-1 outline font-bold  transition-all duration-300"><Link to="/user/signin">SignIn</Link></button>
          </div>
          <div>
            <button className="w-24 h-10 bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-white rounded-md py-2  text-md font-bold"><Link to="/user/signup">Sign Up</Link></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;