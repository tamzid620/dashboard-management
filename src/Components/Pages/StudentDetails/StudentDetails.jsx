import hr from "../../../../public/icons/hrLine.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "../../../utilies/config";


const StudentDetails = () => {
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
        .get(baseUrl("student-detail"), {
          headers: headers,
        })
        .then((res) => {
          const userData = res.data; 
          if(userData && userData.status === "401"){
            // setStudentData(res.data);
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/login");
          } else {
              setStudentData(res.data);
          }
        })
        .catch((error) => {
          return error
        });
    }
  }, [navigate]);
  
  

  const logoutSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };
    axios
      .post(baseUrl("student-logout"), null, {
        headers: headers,
      })
      .then((res) => {
        if (res.data.status === "405") {
          localStorage.removeItem("token", res.data.token);
          localStorage.removeItem("user", res.data.user);
          Swal.fire({
            position: "center",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-green-100 px-5 mt-2 rounded-xl">
          {/* StudentDetails tittle  */}
          <div className="flex justify-center items-center my-3">
            <div>
              <p className="flex justify-center items-center text-2xl font-bold uppercase">
                Student Details
              </p>
              <img className="w-[350px] h-[50px] " src={hr} alt="" />
            </div>
          </div>
          {/* StudentDetails information  */}

          <div className="flex justify-center items-center">
            <img
              className="w-[250px] h-[250px] rounded-xl bg-yellow-200"
              src={studentData?.file}
              alt=""
            />
          </div>
          <div className="flex">
            {studentData.user && (
              <div className=" text-lg grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10  md:gap-10 mt-10">
                <div className="leading-10">
                  <h1>
                    <span className="font-bold text-xl">Name:</span>
                    {studentData?.user.name}
                  </h1>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <h1>
                    <span className="font-bold text-xl">Father's Name:</span>
                    {studentData?.user.fatherName}
                  </h1>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <h1>
                    <span className="font-bold text-xl">Mother's Name:</span>
                    {studentData?.user.motherName}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">BirthDate:</span>
                    {studentData?.user.birthDate}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Email:</span>
                    {studentData?.user.email}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Adress:</span>
                    {studentData?.user.address}
                  </h1>
                </div>
                <div className="leading-10">
                  <h1>
                    <span className="font-bold text-xl">Class:</span>
                    {studentData?.user.class}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Class Roll:</span>
                    {studentData?.user.rollNo}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Section :</span>
                    {studentData?.user.section}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Registration:</span>
                    {studentData?.user.registration}
                  </h1>
                  <div className="flex gap-3 mt-5">
                    <Link to="/enterPhone">
                      <button className="font-semibold text-white btn bg-green-500 hover:bg-green-300 hover:text-gray-600">
                        Payment
                      </button>
                    </Link>
                    <button
                      onClick={logoutSubmit}
                      className="font-semibold text-white btn bg-red-500  hover:bg-red-300 hover:text-gray-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
