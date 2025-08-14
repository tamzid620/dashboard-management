import axios from "axios";
import { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import schoolLogo from "../../../../public/images/educational_board.png";
import ReactToPrint from "react-to-print";
import Loader from "../Loader/Loader";
import { baseUrl } from "../../../utilies/config";

const StudentIdCard = () => {
  const ref = useRef();
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
    <div ref={ref}>
    <div className="flex justify-center items-center h-screen">
      {/* First Card with Student Information */}
      <div className="mx-4 ">
        <div className="border border-gray-400 p-4 w-[368px] h-[552px] rounded-lg">
          {/* Your Student Information */}
          <div className="mb-4 ">
            {/* school image and name  */}
            <div className="flex justify-center items-center">
              <img className="me-2 w-[50px] h-[50px]" src={schoolLogo} alt="" />
              <h1 className="upperclass flex justify-center font-bold text-xl">
                English Grammer School
              </h1>
            </div>
            <div className="upperclass flex justify-center font-bold">
              <p className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded py-1 px-2 mb-2">
                Student Id Card
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img
                className="w-[200px] h-[200px] rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 mb-4"
                src={studentData?.file}
                alt=""
              />
            </div>
            {studentData.user && (
              <>
                <p className="text-lg font-bold">
                  Name:{" "}
                  <span className="font-thin">{studentData.user.name}</span>
                </p>
                <p className="text-lg font-bold">
                  Registration:{" "}
                  <span className="font-thin">{studentData.user.regNo}</span>
                </p>
                <p className="text-lg font-bold">
                  Class:{" "}
                  <span className="font-thin">{studentData.user.class}</span>
                </p>
                <p className="text-lg font-bold">
                  Roll:{" "}
                  <span className="font-thin">{studentData.user.rollNo}</span>
                </p>
                <p className="text-lg font-bold">
                  Section:{" "}
                  <span className="font-thin">{studentData.user.section}</span>
                </p>
              </>
            )}
            {/* signature section  */}
            <p className="flex justify-between mt-[60px]">
              <span>Student Signature</span>
              <span>Principle</span>
            </p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div >
        <div className="border border-gray-400 p-4 w-[368px] h-[552px] rounded-lg">
          <h1 className="flex justify-center font-bold uppercase text-lg mt-16">
            If Found plese return
          </h1>
          <div className="upperclass flex justify-center font-bold my-10">
            <p className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded py-1 px-2 mb-2">Office</p>
          </div>
          {/* address section  */}
          <p>
            <span className="flex justify-center">
              A.B.C School and College
            </span>
            <br />
            <span className="flex justify-center">Khulshi ,Chattogram</span>
            <span className="flex justify-center">email: abcschool.bd</span>
            <span className="flex justify-center">web: abcschool.edu.bd</span>
            <span className="flex justify-center">phone: +6954785</span>
          </p>
          {/* alert  */}
          <h1 className="flex justify-center font-bold uppercase text-lg">
            This Card is Valid Up to 
          </h1>
          <div className="upperclass flex justify-center font-bold my-10">
            <p className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded py-1 px-2 mb-2">December 2025</p>
          </div>
        </div>
      </div>
    </div>
          {/* print button ------------------------------ */}
          <div className="flex justify-center mb-10">
        <ReactToPrint
          trigger={() => (
            <button className="btn bg-blue-900 text-white border border-black shadow-lg shadow-black hover:text-black hover:border-black ">
              Print
            </button>
          )}
          content={() => ref.current}
        ></ReactToPrint>
      </div>
      {/* print button ------------------------------ */}
    </div>
  )}
  </>
  );
};

export default StudentIdCard;
