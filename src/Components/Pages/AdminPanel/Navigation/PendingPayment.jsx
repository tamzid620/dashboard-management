import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const PendingPayment = () => {
  const [pendPayments, setPendPayments] = useState([]);
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
        .get(baseUrl("pending-payment"), {
          headers: headers,
        })
        .then((res) => {
          setPendPayments(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
         return error
        });
    }
  }, [navigate]);

  // approval section
  const handleApprove = (paymentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    setIsLoading(true);
    axios
      .get(
        baseUrl(`payment-approve/${paymentId}`),
        {
          headers: headers,
        }
      )
      .then(() => {
        setPendPayments((prevPayments) =>
          prevPayments.filter((payment) => payment.payment_id !== paymentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "payment deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting payment",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  // delete section
  const handleDecline = (paymentId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    setIsLoading(true);
    axios
      .delete(
        baseUrl(`delete-payment/${paymentId}`),
        {
          headers: headers,
        }
      )
      .then(() => {
        setPendPayments((prevPayments) =>
          prevPayments.filter((payment) => payment.payment_id !== paymentId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "payment deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error deleting payment",
          text: error.message,
          showConfirmButton: true,
        });
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
            {/* AdminpaymentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Pending Payment
            </h1>
            <hr className="border border-black mb-8" />

            {/* table section  */}
            <div className="overflow-x-auto rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2">
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
              <table className="table ">
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
                  {pendPayments.payment &&
                    pendPayments.payment.map((payment, index) => (
                      <tr key={payment.id}>
                        <td>{index + 1}</td>
                        <td>{payment.name}</td>
                        <td>{payment.class}</td>
                        <td>{payment.regNo}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.month}</td>
                        <td className="flex gap-2">
                          {/* Approve button  */}
                          <button
                            onClick={() => handleApprove(payment.id)}
                            className="acceptButton"
                          >
                            Approve
                          </button>
                          {/* Delete button  */}
                          <button
                            onClick={() => handleDecline(payment.id)}
                            className="declineButton"
                          >
                            Decline
                          </button>
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

export default PendingPayment;
