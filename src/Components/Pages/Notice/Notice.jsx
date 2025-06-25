import { useEffect, useState } from "react";
import backgroudphoto from "../../../../public/images/tree.jpg";
import axios from "axios";
import { BsFiletypePdf } from "react-icons/bs";
import { baseUrl } from "../../../utilies/config";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl("notice-listApi"))
      .then((res) => {
        setNotices(res.data.notice);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);
  // console.log(notices);

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
            Notice
          </h1>
          <img
            className="w-[350px] h-[50px]"
            src="../../../../public/icons/hrLine.png"
            alt=""
          />
        </div>
      </div>

      {/* information section  */}
      <div className="overflow-x-auto border mt-5 mx-3">
        <table className="table-auto w-full">
          {/* head */}
          <thead className="flex justify-between">
            <tr
              className="flex justify-between w-full font-bold"
              style={{ fontFamily: "Mooli, sans-serif" }}
            >
              <td className="w-1/2 border-r-2">Notice</td>
              <td className="w-1/6 border-r-2">Publish Date</td>
              <td className="w-1/6 border-r-2">Download</td>
            </tr>
          </thead>
          <hr />
          <tbody>
          {notices.map((notice) => (
    <tr key={notice.id} className="flex justify-between w-full">
      <td className="w-1/2 border-r-2 border-b-2">{notice.subject}</td>
      <td className="w-1/4 border-r-2 border-b-2 flex justify-center">
        {notice.date}
      </td>
      <td className="w-1/4 flex justify-center py-2 border-b-2">
        <BsFiletypePdf
          onClick={() => handlePdfDownload(notice.pdflink)}
          className="p-1 rounded-lg text-red-500 hover:text-white hover:bg-red-500 bg-white"
         
          size={40}
        />
      </td>
    </tr>
  ))}
            {/* <tr className="flex justify-between w-full">
              <td className="w-1/2 border-r-2">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  class Off Notice
                </a>
              </td>
              <td className="w-1/4 border-r-2 flex justify-center">
                10 August 2023
              </td>
              <td className="w-1/4 flex justify-center py-2">
                <BsFiletypePdf
                 onClick={() => handlePdfDownload()}
                  className=" p-1 rounded-lg text-red-500 hover:bg-red-500 hover:text-white"
                  size={40}
                />
              </td>
            </tr> */}
          </tbody>
          <hr />
        </table>
      </div>
    </div>
  );
};

export default Notice;