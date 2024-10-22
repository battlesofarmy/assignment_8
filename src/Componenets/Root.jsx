import { Outlet } from "react-router-dom";
import Navbar from "./Parts/Navbar";


export default function Root() {
  return (
    <>    <Navbar></Navbar>
         <Outlet /> 
    </>
  )
}
