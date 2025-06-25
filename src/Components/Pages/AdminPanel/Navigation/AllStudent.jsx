import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const AllStudent = () => {
  const [allStudents, setAllStudents] = useState([]);
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
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
      setIsLoading(true);
      axios
        .get(baseUrl("student-list"), {
          headers: headers,
        })
        .then((res) => {
          setAllStudents(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setAllStudents(error);
        });
    }
  }, [navigate]);
  // console.log(allStudents.student);

  // delete section
  const handleDelete = (studentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    setIsLoading(true);
    axios
      .delete(baseUrl(`student-delete/${studentId}`), {
        headers: headers,
      })
      .then(() => {
        setAllStudents((prevStudents) =>
          prevStudents.filter((student) => student.student_id !== studentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
        navigate("/pendingStudent");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting student",
          text: error.message,
          showConfirmButton: true,
        });
        navigate("/pendingStudent");
      });
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
            {/* All Student section  */}
            <div className="mt-20 mx-[10px]">
              {/* AdminStudentInfo section  */}
              <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center">
                All Student
              </h1>

              {/* table section  */}
              <div className="overflow-x-auto rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2">
                <hr className="border border-black mb-8" />
                {/* search and add field  */}
                <div className="flex justify-between items-center">
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
                    <Link to="/adminStudentAdd">
                      <button
                        className="btn-xs border border-black rounded uppercase 
                              bg-gradient-to-r from-green-900 to-green-500 
                              hover:from-green-500 hover:to-green-900 hover:shadow-sm hover:shadow-black
                              text-white font-semibold"
                      >
                        Add
                      </button>
                    </Link>
                  </div>
                </div>
                <table className="table table-lg table-pin-rows table-pin-cols border">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Roll</th>
                      <th>Registration</th>
                      <th>Class</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStudents.student &&
                      allStudents.student.map((student, index) => (
                        <tr key={student.id}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={student.image} alt="" />
                            </div>
                          </td>
                          <td>{student.name}</td>
                          <td>{student.rollNo}</td>
                          <td>{student.regNo}</td>
                          <td>{student.class}</td>
                          <td className="flex gap-2">
                            {/* Edit button  */}
                            <Link to={`/allStudentEdit/${student.id}`}>
                              <button
                                className="editButton"
                              >
                                Edit
                              </button>
                            </Link>
                            {/* Details button  */}
                            <Link to={`/adminPayment/${student.id}`}>
                              <button
                                className="detailstButton"
                              >
                                Details
                              </button>
                            </Link>
                            {/* Delete button   */}
                            <button
                              onClick={() => handleDelete(student.id)}
                              className="declineButton"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {/* pagination here  */}
              <div className="flex justify-center">
                <div className="join my-10">
                  <button className="join-item btn">1</button>
                  <button className="join-item btn">2</button>
                  <button className="join-item btn btn-disabled">...</button>
                  <button className="join-item btn">99</button>
                  <button className="join-item btn">100</button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      )}
    </>
  );
};

export default AllStudent;
