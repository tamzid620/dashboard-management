import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import SearchPanel from "../AdminPanel/Dashboard/SearchPanel/SearchPanel";
import AdminPanel from "../AdminPanel/Dashboard/SearchPanel/AdminPanel";
import Loader from "../../Shared/Loader/Loader";
import { baseUrl } from "../../../utilies/config";

const AdminPayment = () => {
  const { studentId } = useParams();

  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    // get method -------------------
    setIsLoading(true);
    axios
      .get(
        baseUrl(`admin-student-detail/${studentId}`),
        {
          headers: headers,
        }
      )
      .then((res) => {
        setStudentData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setStudentData(error);
      });
  }, [studentId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ display: "flex", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
          <AdminPanel />
          <div className="w-full p-4">
            <SearchPanel />
            <div className="flex justify-center">
              <div className="mt-20 lg:mx-28 md:mx-24 sm:mx-10 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold uppercase text-center text-black mb-4">
                  Student Details
                </h1>
                <hr className="border border-black mb-8" />
                <div className="flex justify-center items-center mb-8">
                  <img
                    className="w-64 h-64 rounded-xl bg-yellow-200 object-cover"
                    src={studentData?.file}
                    alt=""
                  />
                </div>
                {studentData.user && (
                  <div className="text-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-10">
                    <div className="leading-10">
                      <h1>
                        <span className="font-bold text-xl">Name:</span> {studentData?.user.name}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">Father's Name:</span> {studentData?.user.fatherName}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">Mother's Name:</span> {studentData?.user.motherName}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">BirthDate:</span> {studentData?.user.birthDate}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">Email:</span> {studentData?.user.email}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">Address:</span> {studentData?.user.address}
                      </h1>
                    </div>
                    <div className="leading-10">
                      <h1>
                        <span className="font-bold text-xl">Class:</span> {studentData?.user.class}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">Class Roll:</span> {studentData?.user.rollNo}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">Section:</span> {studentData?.user.section}
                      </h1>
                      <h1>
                        <span className="font-bold text-xl">Registration:</span> {studentData?.user.regNo}
                      </h1>
                    </div>
                  </div>
                )}
                <div className="overflow-x-auto mb-10">
                  <table className="table-auto w-full text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Month</th>
                        <th className="px-4 py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentData.user &&
                        studentData.payment.map((payment, index) => (
                          <tr className="bg-gray-100" key={index}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{payment.months.join(", ")}</td>
                            <td className="border px-4 py-2">{payment.amount}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {studentData.user && (
                  <div className="flex justify-center">
                    <Link to={`/studentIdCard/${studentData.user.id}`}>
                      <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg py-2 px-4">
                        Student Id
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      )}
    </>
  );
};

export default AdminPayment;
