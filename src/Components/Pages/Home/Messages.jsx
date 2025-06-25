import { Link } from "react-router-dom";
import professorImg from "../../../../public/images/user-4.jpg";

const Messages = () => {
  return (
    <div className=" max-w-screen-xl mx-auto my-10">
      <div className=" flex sm: justify-center md:justify-center text-center items-center mb-5">
        {/* photo section  */}
        <div>
          <img
            style={{ borderRadius: "100" }}
            className="w-[300px] h-[300px] bg-gray-200  rounded-full p-2"
            src={professorImg}
            alt=""
          />
          <h1
            style={{ fontFamily: "Young Serif, serif" }}
            className="my-3 text-lg"
          >
            Professor Dr. Ali Morshed
          </h1>
          <p style={{ fontFamily: "Young Serif, serif" }}>
            A.B.C School and College
          </p>
        </div>
      </div>
      {/* nessage section  */}
      <div className="sm: me-2 sm: ms-2">
        <h1 style={{ fontFamily: "Young Serif, serif" }} className="text-3xl ">
          Message
        </h1>
        <p style={{ fontFamily: 'Mooli, sans-serif' }} className="text-xl">
          Welcome to A.B.C School and College, where excellence in education is
          our guiding principle. Our institution is dedicated to nurturing young
          minds, fostering creativity, and instilling a passion for lifelong
          learning. At ABC, we believe in a holistic approach to education that
          goes beyond textbooks, emphasizing character development, critical
          thinking, and leadership skills. Our committed faculty and staff work
          tirelessly to create a supportive and inclusive learning environment,
          where every student can thrive and reach their full potential. ...{" "}
          <span className="font-bold text-blue-900">
            <Link to="/fullMessages">continue reading</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Messages;
