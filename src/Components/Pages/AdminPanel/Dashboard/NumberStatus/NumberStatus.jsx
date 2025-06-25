import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import {
  FaRegEye,
  FaShoppingCart,
  FaShoppingBag,
  FaUserFriends,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "../../../../../utilies/config";

const NumberStatus = () => {
  const [studentData, setStudentData] = useState([]);
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
      navigate("/login");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };

      axios
        .get(baseUrl("admin-graph-first"), {
          headers: headers,
        })
        .then((res) => {
          const userData = res.data;
          if (userData && userData.status === "401") {
            // setStudentData(res.data);
            Swal.fire({
              position: "center",
              icon: "warning",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/adminlogin");
          } else {
            setStudentData(res.data.student);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]);

  return (
    <div
      className="
        grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10 mx-5"
    >
      {/* ----------------------Number Status ------------------------- */}
      {/* cart-One  */}
      <div className=" rounded-xl  shadow-md shadow-black  bg-blue-900 text-white py-6 px-6">
        <div className="flex mb-3 h-11 w-11 items-center justify-center rounded-full text-blue-900 bg-white">
          <FaRegEye />
        </div>

        <h4 className="text-2xl font-semibold text-white">$3.456K</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-300 font-bold">Total views</span>
          <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
            0.43% <BsArrowUp />
          </span>
        </div>
      </div>
      {/* cart-two  */}
      <div className=" rounded-xl  shadow-md shadow-black  bg-blue-900 text-white py-6 px-6">
        <div className="flex mb-3 h-11 w-11 items-center justify-center rounded-full text-blue-900 bg-white">
          <FaShoppingCart />
        </div>

        <h4 className="text-2xl font-semibold text-white">$45,2k</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-300 font-bold">Total Profit</span>
          <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
            4.35% <BsArrowUp />
          </span>
        </div>
      </div>
      {/* cart-three  */}
      <div className=" rounded-xl  shadow-md shadow-black  bg-blue-900 text-white py-6 px-6">
        <div className="flex mb-3 h-11 w-11 items-center justify-center rounded-full text-blue-900 bg-white">
          <FaShoppingBag />
        </div>

        <h4 className="text-2xl font-semibold text-white">2,450</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-300 font-bold">Total Product</span>
          <span className=" flex items-center gap-1 text-md font-semibold text-green-500">
            2.59% <BsArrowUp />
          </span>
        </div>
      </div>
      {/* cart-four  */}
      <div className=" rounded-xl  shadow-md shadow-black  bg-blue-900 text-white py-6 px-6">
        <div className="flex mb-3 h-11 w-11 items-center justify-center rounded-full text-blue-900 bg-white">
          <FaUserFriends />
        </div>

        <h4 className="text-2xl font-semibold text-white">{studentData}</h4>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-md text-gray-300 font-bold">
            Total Students
          </span>
          <span className=" flex items-center gap-1 text-md font-semibold text-red-500">
            0.95% <BsArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NumberStatus;
