import NavBar from "../NavBar/NavBar";
import {Outlet} from "react-router-dom"

export default function Root() {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet/>
    </div>
  )
}
