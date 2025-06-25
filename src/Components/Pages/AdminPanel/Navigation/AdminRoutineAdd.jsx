import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const AdminRoutineAdd = () => {
  const [adminRoutine, setAdminRoutine] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    } else {
      // Example: Assuming adminEmployees are stored in localStorage as "adminEmployees"
      const Admintoken = JSON.parse(localStorage.getItem(token));
      if (Admintoken) {
        setAdminRoutine(Admintoken);
        setIsLoading(true);
      } else {
        ("");
      }
    }
  }, [navigate]);

  // handle submit button ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ display: "flex" }}>
          <AdminPanel />
          <div className="w-full">
            <SearchPanel />
            {/* AdminStudentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              add Routine
            </h1>
            <hr className="border border-black mb-8" />

<div className=" rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2">
<div className="my-5 ms-3">
<select className="select select-info w-full max-w-xs">
  <option disabled selected>Select Class</option>
  <option>CLass 1</option>
  <option>CLass 2</option>
  <option>CLass 3</option>
  <option>CLass 4</option>
  <option>CLass 5</option>
  <option>CLass 6</option>
  <option>CLass 7</option>
  <option>CLass 8</option>
  <option>CLass 9</option>
  <option>CLass 10</option>
</select>
</div>
            {/* Table section  */}
            <div className="overflow-x-auto ">
              <table className="table table-zebra  mx-2 ">
                {/* head */}
                <thead className="text-black  bg-gray-300">
                  <tr>
                    <th>Days</th>
                    <th>1st <sub>hr</sub></th>
                    <th>2nd <sub>hr</sub></th>
                    <th>3rd <sub>hr</sub></th>
                    <th>4th <sub>hr</sub></th>
                    <th>5th <sub>hr</sub></th>
                    <th>6th <sub>hr</sub></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sunday */}
                  <tr>
                    <th>Sunday</th>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                  </tr>
                  {/* Mopnday */}
                  <tr>
                    <th>Monday</th>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                  </tr>
                  {/* Tuesday */}
                  <tr>
                    <th>Tuesday</th>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                  </tr>
                  {/* Wednesday */}
                  <tr>
                    <th>Wednesday</th>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                  </tr>
                  {/* Thrusday */}
                  <tr>
                    <th>Thrusday</th>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                    <td><textarea  className="w-28" type="text" name="" id="" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
              {/* submit button  */}
              <div className="flex justify-center my-5">
              <button className="w-20 border border-black rounded uppercase py-2
                              bg-gradient-to-t from-blue-900 to-blue-500 
                              hover:from-blue-500 hover:to-blue-900 hover:shadow-sm hover:shadow-black
                              text-white font-semibold" type="submit">
                Save
              </button>
              </div>
</div>
          </div>
        </Box>
      )}
    </>
  );
};

export default AdminRoutineAdd;
