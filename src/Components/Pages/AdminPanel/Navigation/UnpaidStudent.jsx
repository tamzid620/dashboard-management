import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Box from "@mui/material/Box";

const UnpaidStudent = () => {
  return (
    <>
      <Box sx={{ display: "flex" ,backgroundColor:"#d1d5db" }}>
        <AdminPanel /> 
        <div className="w-full"> 
        <SearchPanel/>
      {/* AdminpaymentInfo section  */}
      <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
      Unpaid Student
      </h1>
      <hr className="border border-black mb-8" />
        <div className="flex justify-between">
      {/* Information section  */}
      <div>

      </div>
      
    </div>
  </div>
  </Box>
    </>
  );
};

export default UnpaidStudent;
