
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import UnderConstrunction from "../../../Shared/UnderConstrunction/UnderConstrunction";

const AdminAttendance = () => {
    return (
<>
        <Box sx={{ display: "flex" }}>
          <AdminPanel />
          <div className="w-full">
            <SearchPanel />
            {/* Attendance Management section  */}
        {/* <h1 className=" mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
        
              </h1>
                <hr className="border border-black mb-8" /> */}
                <UnderConstrunction/>
        <div>
        </div>
        
        </div>
      </Box>
    </>
    );
};

export default AdminAttendance;