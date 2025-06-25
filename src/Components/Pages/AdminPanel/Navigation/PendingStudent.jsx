import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import Box from "@mui/material/Box";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const PendingStudent = () => {
  const [pendStudents, setPendStudents] = useState([]);
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
        .get(baseUrl("pending-student-list"), {
          headers: headers,
        })
        .then((res) => {
          setPendStudents(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]);

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
        setPendStudents((prevStudents) =>
          prevStudents.filter((student) => student.student_id !== studentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
        setIsLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting student",
          text: error.message,
          showConfirmButton: true,
        });
        // navigate("/pendingStudent");
      });
  };
  // approval section
  const handleApprove = (studentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    setIsLoading(true);
    axios
      .get(baseUrl(`student-approve/${studentId}`), {
        headers: headers,
      })
      .then(() => {
        setPendStudents((prevStudents) =>
          prevStudents.filter((student) => student.student_id !== studentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Student Approved successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error approving student",
          text: error.message,
          showConfirmButton: true,
        });
      });
    setIsLoading(false);
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
            {/* Pending Student section  */}
            <div className="mt-20 mx-[10px] ">
              {/* AdminStudentInfo section  */}
              <h1 className=" mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
                Pending Student
              </h1>
                <hr className="border border-black mb-8" />

              {/* table section  */}
              <div className="overflow-x-auto  rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2">
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
                    {pendStudents.student &&
                      pendStudents.student.map((student, index) => (
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
                            <Link to={`/pendingStudentEdit/${student.id}`}>
                              <button
                              className="editButton"
                              >
                                Edit
                              </button>
                            </Link>
                            {/* Approve button  */}
                            <button
                              onClick={() => handleApprove(student.id)}
                              className="acceptButton"
                            >
                              Approve
                            </button>
                            {/* Delete button  */}
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

export default PendingStudent;
