import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const ApprovedPayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apprPayments, setApprPayments] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");
  const [filteredPayments, setFilteredPayments] = useState([]);
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
        .get(baseUrl("approved-payment"), {
          headers: headers,
        })
        .then((res) => {
          setApprPayments(res.data.payment);
          setFilteredPayments(res.data.payment);
          setIsLoading(false);
        })
        .catch((error) => {
          return error
        });
    }
  }, [navigate]);
 

  // approval section
  // const handleDetail = (paymentId) => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const headers = {
  //     accept: "application/json",
  //     Authorization: "Bearer " + user.token,
  //   };

  //   axios
  // .get(baseUrl(`payment-detail/${paymentId}`), {
  //       headers: headers,
  //     })
  //     .then(() => {
  //       setApprPayments((prevPayments) =>
  //         prevPayments.filter((payment) => payment.payment_id !== paymentId)
  //       );
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "payment deleted successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: "Error deleting payment",
  //         text: error.message,
  //         showConfirmButton: true,
  //       });
  //     });
  // };

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;

    // If "All" is selected, show all data
    if (selectedClass === "All") {
      setFilteredPayments(apprPayments);
    } else {
      // Filter data based on the selected class
      const filtered = apprPayments.filter(
        (payment) => payment.class === selectedClass
      );
      setFilteredPayments(filtered);
    }

    setSelectedClass(selectedClass);
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
            {/* AdminpaymentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Approved Payment
            </h1>
            <hr className="border border-black mb-8" />

            {/* table section  */}
            <div className="mb-10 overflow-x-auto rounded-sm px-8 py-8 lg:mx-10 md:mx-5 sm: mx-2">
              {/* search and add field  */}
              <div className="flex justify-between items-center">
                {/* dropdown filter  */}
              <div>
              <select
                name=""
                id=""
                value={selectedClass}
            onChange={handleClassChange}
                className=" px-3 py-1 rounded-lg text-sm font-medium outline-none"
              >
                <option value="All">All</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value=" 6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
              </div>
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
              <table className="table overflow-x-auto ">
                {/* head */}
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Registration</th>
                    <th>Class</th>
                    <th>Transaction id</th>
                    <th>Amount</th>
                    <th>Month</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  filteredPayments.length > 0
            ? filteredPayments.map((payment, index) => (
                      <tr key={payment.id}>
                        <td>{index + 1}</td>
                        <td>{payment.name}</td>
                        <td>{payment.regNo}</td>
                        <td>{payment.class}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.amount}</td>
                        <td>{Array.isArray(payment.months) ? payment.months.join(",") : "..."}</td>
                        <td className="flex gap-2">
                          
                           {/* Details button  */}
                           <Link to={`/paymentHistory/${payment.studentId}`}>
                           <button className="btn-xs text-gray-100 rounded font-semibold uppercase bg-blue-500 bg-gradient-to-t from-blue-500 to-blue-800 hover:from-blue-800 hover:to-blue-500 hover:text-white">
                            PaymentHistory
                            </button>
                          </Link>
                          
                        </td>
                      </tr>
                    ))
                    : 
                 <tr>   
                    <td colSpan="8" className="text-center">
                      No payments for the selected class.
                    </td>
                  </tr>
                  }
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

export default ApprovedPayment;