import backgroudphoto from "../../../../public/images/tree.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFiletypePdf } from "react-icons/bs";
import { baseUrl } from "../../../utilies/config";

const Routine = () => {

  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl("routine-listApi"))
      .then((res) => {
        setRoutines(res.data.routine);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  // console.log(routines);

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
            className="text-3xl text-white font-semibold "
          >
            Routine 
          </h1>
          <img
            className="w-[350px] h-[50px]"
            src="../../../../public/icons/hrLine.png"
            alt=""
          />
        </div>
      </div>
      {/* routine section  */}
      <div className="overflow-x-auto border mt-5 mx-3">
        <table className="table-auto w-full">
          {/* head */}
          <thead className="flex justify-between">
            <tr
              className="flex justify-between w-full font-bold"
              style={{ fontFamily: "Mooli, sans-serif" }}
            >
              <td className="w-1/2 ">Routines</td>
              <td className="w-1/6 ">Class</td>
              <td className="w-1/6 ">section</td>
              <td className="w-1/6 ">Download</td>
            </tr>
          </thead>
          <hr />
          <tbody>
            {routines.map((routine) => (
              <tr key={routine.id} className="flex justify-between w-full">
                <td className="w-1/2 border-r-2">{routine.title}</td>
                <td className="w-1/4 border-r-2 flex justify-center">{routine.class}</td>
                <td className="w-1/4 border-r-2 flex justify-center">{routine.section}</td>
                <td className="w-1/4 flex justify-center py-2">
                  <BsFiletypePdf
                    onClick={() => handlePdfDownload(routine.pdflink)}
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

export default Routine;
