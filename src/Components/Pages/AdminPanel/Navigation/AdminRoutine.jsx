import { Link, useNavigate } from "react-router-dom";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const AdminRoutine = () => {
  const [adminRoutines, setAdminRoutines] = useState({ routine: [] });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const routinesPerPage = 5;

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
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json", 
        Authorization: "Bearer " + user.token,
      };
// get routine data ---------------

setIsLoading(true);
      axios
        .get(baseUrl("routine-listApi"), {
          headers: headers,
        })
        .then((res) => {
          setAdminRoutines(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setAdminRoutines(error);
        });
    }
  }, [navigate]);

  // console.log(adminRoutines.routine);

  // delete section
  const handleDelete = (routineId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    setIsLoading(true);
    axios
      .delete(baseUrl(`routine-delete/${routineId}`), {
        headers: headers,
      })
      .then(() => {
        setAdminRoutines((prevRoutines) =>
        prevRoutines.filter((routine) => routine.routine_id !== routineId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Routine deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting Routine",
          text: error.message,
          showConfirmButton: true,
        });
        navigate("/adminRoutines");
      });
  };
  // pagination section -----------
  const indexOfLastRoutine = currentPage * routinesPerPage;
  const indexOfFirstRoutine = indexOfLastRoutine - routinesPerPage;
  const currentRoutines = adminRoutines.routine.slice(
    indexOfFirstRoutine,
    indexOfLastRoutine
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    return (
      <>
      {isLoading ? (
        <Loader />
      ) : (
      <Box sx={{ display: "flex" }}>
        <AdminPanel /> 
        <div className="w-full"> 
        <SearchPanel/>
            {/* AdminroutineInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              All routines
            </h1>
            <hr className="border border-black mb-8" />

        <div className="">
            {/* add routine list section  */}
            <div className="overflow-x-auto rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2">
              {/* search and add field  */}
              <div className="flex justify-between items-center mx-3 mt-5">
                {/* search input  */}
                <div className="form-control ms-3 my-3">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered"
                    />
                    <button className="btn btn-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* add button  */}
                <div>
                  <Link to="/adminRoutineAdd">
                    <button className="addButton">
                      Add
                    </button>
                  </Link>
                </div>
              </div>

              {/* tabel section  */}
              <table className="table ">
                {/* head */}
                <thead>
                <tr className=" font-bold">
                    <th>Title </th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {currentRoutines.map((routine) => (
    <tr key={routine.id} >
      <td >
        
        {routine.title}
      </td>
      <td>{routine.class}</td>
      <td>{routine.section}</td>
      <td >
        <div className="flex gap-2">
          {/* Edit button  */}
          <Link
            to={`/adminRoutineEdit/${routine.id}`}
          >
            <button className="editButton">
              Edit
            </button>
          </Link>
          {/* Delete button   */}
          <button
            onClick={() => handleDelete(routine.id)}
            className="declineButton1"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))}
                </tbody>
              </table>
              {/* pagination section ------------- */}
              <div className="pagination my-10 flex justify-center">
                {Array.from(
                  {
                    length: Math.ceil(
                      adminRoutines.routine.length / routinesPerPage
                    ),
                  },
                  (_, index) => (
                    <button
                      key={index}
                      className={`btn btn-sm ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Box>
       )}
    </>
    );
};

export default AdminRoutine;