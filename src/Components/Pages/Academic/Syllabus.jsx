import backgroudphoto from "../../../../public/images/tree.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFiletypePdf } from "react-icons/bs";
import { baseUrl } from "../../../utilies/config";

const Syllabus = () => {

  const [syllabuss, setSyllabuss] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl("syllabus-listApi"))
      .then((res) => {
        setSyllabuss(res.data.syllabus);
      })
      .catch((error) => {
        return error
      });
  }, []);

  // pdf section 
  const handlePdfDownload = (pdflink) => {
    window.open(pdflink, "_blank");
  };


  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroudphoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          marginTop: "30px",
        }}
        className="flex justify-center"
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold"
          >
            Syllabus
          </h1>
          <img
            className="w-[350px] h-[50px]"
            src="../../../../public/icons/hrLine.png"
            alt=""
          />
        </div>
      </div>
        {/* syllabus section */}
        <div className="overflow-x-auto border mt-5 mx-3">
        <table className="table-auto w-full">
          {/* head */}
          <thead className="flex justify-between">
            <tr
              className="flex justify-between w-full font-bold"
              style={{ fontFamily: "Mooli, sans-serif" }}
            >
              <td className="w-1/2 ">Syllabi</td>
              <td className="w-1/6 ">Class</td>
              <td className="w-1/6 ">Subject</td>
              <td className="w-1/6 ">Download</td>
            </tr>
          </thead>
          <hr />
          <tbody>
          {syllabuss.map((syllabus) => (
              <tr key={syllabus.id} className="flex justify-between w-full">
                <td className="w-1/2 border-r-2">{syllabus.title}</td>
                <td className="w-1/4 border-r-2 flex justify-center">
                  {syllabus.class}
                </td>
                <td className="w-1/4 border-r-2 flex justify-center">
                  {syllabus.subject}
                </td>
                <td className="w-1/4 flex justify-center py-2">
                  <BsFiletypePdf
                    onClick={() => handlePdfDownload(syllabus.pdflink)}
                    className="p-1 rounded-lg text-red-500 hover:bg-red-500 hover:text-white"
                    color="red"
                    size={40}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <hr />
        </table>
      </div>
    </div>
  );
};

export default Syllabus;