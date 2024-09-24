import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../components/Signin";


const RoutePath = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Signin />} />

          
        </Routes>
    );
}

export default RoutePath;