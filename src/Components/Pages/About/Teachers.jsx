import { useEffect } from "react";
import unknownPhoto from "../../../../public/images/Unknown.png";
import backgroudphoto from "../../../../public/images/tree.jpg";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../utilies/config";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl("teacher-listApi"))
      .then((res) => {
        setTeachers(res.data.teacher);
      })
      .catch((error) => {
        return error
      });
  }, []);


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
            Our Teachers
          </h1>
          <img
            className="w-[350px] h-[50px]"
            src="../../../../public/icons/hrLine.png"
            alt=""
          />
        </div>
      </div>

      {/* information section  */}
      <div className="mt-10 max-w-screen-xl mx-auto ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex lg:justify-end md:justify-end sm: justify-center"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[350px] rounded-xl bg-yellow-200"
                    src={teacher.imglink}
                    alt=""
                  />
                </div>
                <h1 className="flex justify-center mt-3 font-semibold  text-2xl uppercase">
                  {teacher.name}
                </h1>
                <p className="flex justify-center font-semibold  uppercase">
                  {teacher.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;