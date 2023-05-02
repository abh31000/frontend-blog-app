import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";

const Router: React.FC = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/post' element={<Post/>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router