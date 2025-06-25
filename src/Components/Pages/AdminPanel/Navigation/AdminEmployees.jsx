import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const AdminEmployees = () => {
  const [adminEmployees, setAdminEmployees] = useState([]);
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
        setAdminEmployees(Admintoken);
        setIsLoading(true);
      } else {
        ""
      }
    }
  }, [navigate]);

  // delete section
  const handleDelete = (employeeId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    setIsLoading(true);
    axios
      .delete(baseUrl(`delete-employee/${employeeId}`), {
        headers: headers,
      })
      .then(() => {
        setAdminEmployees((prevEmployees) =>
          prevEmployees.filter(
            (employee) => employee.employee_id !== employeeId
          )
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "employee deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
        navigate("/adminEmployees");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting employee",
          text: error.message,
          showConfirmButton: true,
        });
        navigate("/adminEmployees");
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
            {/* AdminemployeeInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              All employees
            </h1>
            <hr className="border border-black mb-8" />

            {/* add employees list section  */}
            <div className="overflow-x-auto border rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2">
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
                  <Link to="/adminEmployeesAdd">
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
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {adminEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <div className="mask mask-squircle w-12 h-12">
                        <td>
                          {" "}
                          <img
                            src={employee.image}
                            alt="teahcer's photo"
                          />{" "}
                        </td>
                      </div>

                      <td>{employee.name}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.email}</td>
                      <td>
                        <div className="flex gap-2">
                          {/* Edit button  */}
                          <Link
                            to={`/adminEmployeesEdit/${employee.id}`}
                            // "/adminEmployeesEdit"
                          >
                            <button className="editButton">
                              Edit
                            </button>
                          </Link>
                          {/* Delete button   */}
                          <button
                            onClick={() => handleDelete(employee.id)}
                            className="declineButton"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </Box>
       )}
    </>
  );
};

export default AdminEmployees;
