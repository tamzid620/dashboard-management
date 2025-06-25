import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import Box from "@mui/material/Box";
import DashBoardBody from "../Dashboard/Dashbody/DashBoardBody";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");

   if (!token) {
     Swal.fire({
       position: "center",
       icon: "warning",
       title: "You have to Login first",
       showConfirmButton: false,
       timer: 1500,
     });
     navigate("/adminlogin");
   } else{
    ""
   }
},[navigate])

  return (
    <>
      <Box sx={{ display: "flex" ,backgroundColor:"#d1d5db" }}>
        <AdminPanel /> 
        <div className="2xl:max-w-full xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm: max-w-sm "> 
        <SearchPanel />
        <DashBoardBody />
        </div>
      </Box>
    </>
  );
};

export default AdminDashboard;
