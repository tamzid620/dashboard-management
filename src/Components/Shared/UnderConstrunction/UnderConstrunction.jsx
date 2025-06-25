import logo from "../../../assets/icons/under-construction.gif";

const UnderConstrunction = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div style={{ fontFamily: 'Mooli, sans-serif' }} className="text-center bg-white">
        <h1
        style={{ fontFamily: "Young Serif, serif" }}
         className="text-4xl">Site Under Construction</h1>
       <div className=" flex justify-center ">
        <img className="w-[300px] h-[300px] bg-gray-300" src={logo} alt="" />
        </div>
        <p className="mb-3 text-xl">Please forgive the inconvenience.</p>
        <p className="mb-1 text-md">We are currently initializing our site.</p>
        <p>It's okay, we're excited too!</p>
        <p></p>
      </div>
    </div>
  );
};

export default UnderConstrunction;
