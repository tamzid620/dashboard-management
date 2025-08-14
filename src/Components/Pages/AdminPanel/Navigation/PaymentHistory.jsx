import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const PaymentHistory = () => {
  const { studentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [paymentHistoryData, setPaymentHistoryData] = useState({
    student: {},
    payment: [],
  } );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    // get method -------------------

    setIsLoading(true);
    axios
      .get(baseUrl(`payment-history/${studentId}`), {
        headers: headers,
      })
      .then((res) => {
        setPaymentHistoryData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setPaymentHistoryData(error);
      });
  }, [studentId]);
  
  

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
              Payment History
            </h1>
            <hr className="border border-black mb-8" />

            <div className="mt-10 rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2">
            {/* details section  */}
            <div style={{ fontFamily: "Young Serif, serif" }} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ms-10">
              <div>
                <h1 className="leading-10 font-bold text-2xl">
                  Name:
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.name}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Father Name:
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.fatherName}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Mother Name:
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.motherName}</span>
                </h1>
              </div>
              <div>
                <h1 className="leading-10 font-bold text-2xl">
                  Registration :
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.regNo}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Class: <span className="text-purple-700 text-xl">{paymentHistoryData.student.class}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Section: <span className="text-purple-700 text-xl">{paymentHistoryData.student.section}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Roll :<span className="text-purple-700 text-xl">{paymentHistoryData.student.rollNo}</span>
                </h1>
              </div>
            </div>

            {/* payment Due section  */}
            <div className="overflow-x-auto mt-10 mb-20 ">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Payment Status</th>
                    <th>Monthly to Pay</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-base-200">
                    <td className="text-red-500">Payment Due</td>
                    <td className="text-red-500">{paymentHistoryData.student.unpaid?.join(', ')}</td>

                    {/* <td>january</td> */}
                    <td>
                      <div className="flex flex-col gap-2">
                        <button className="btn-xs w-[120px] text-gray-100 rounded font-semibold uppercase bg-green-500 bg-gradient-to-t from-green-500 to-green-800 hover:from-green-800 hover:to-green-500 hover:text-white">
                          Send Message
                        </button>
                        <button className="btn-xs w-[120px] text-gray-100 rounded font-semibold uppercase bg-blue-500 bg-gradient-to-t from-blue-500 to-blue-800 hover:from-blue-800 hover:to-blue-500 hover:text-white">
                          Send Email
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* table section  */}
            <div className="overflow-x-auto">
              <table className="table mt-10">
                {/* head */}
                <thead>
                  <tr>
                    <th>index</th>
                    <th>Amount</th>
                    <th>Month</th>
                    <th>Transaction id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {paymentHistoryData.payment.map((payment, index) => (
        <tr className="bg-base-200" key={index}>
          <th>{index + 1}</th>
          <td>{payment.amount}</td>
          <td>{payment.months.join(', ')}</td>
          <td>{payment.transactionId}</td>
          <td>
            <div className="gap-2">
            <Link to={`/invoice/${payment.id}`}>
              <button className="btn-xs text-gray-100 rounded font-semibold uppercase bg-blue-500 bg-gradient-to-t from-blue-500 to-blue-800 hover:from-blue-800 hover:to-blue-500 hover:text-white mb-3">
                Invoice
              </button>
              </Link>
              <button className="btn-xs text-gray-100 rounded font-semibold uppercase bg-green-500 bg-gradient-to-t from-green-500 to-green-800 hover:from-green-800 hover:to-green-500 ms-1">
                Send Email
              </button>
            </div>
          </td>
        </tr>
      ))}
                </tbody>
              </table>
            </div>

            <div className="my-10 flex justify-center gap-5">
              <button className="btn text-white rounded-lg font-semibold uppercase bg-red-500 bg-gradient-to-t from-red-500 to-red-800 hover:from-red-800 hover:to-red-500">
                ExcelSheet
              </button>
            </div>
            </div>


          </div>
        </div>
      </Box>
       )}
    </>
  );
};

export default PaymentHistory;