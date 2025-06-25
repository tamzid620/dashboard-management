import { Box } from "@mui/material";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import UnderConstrunction from "../../../Shared/UnderConstrunction/UnderConstrunction";


const AdminAccountsMng = () => {
    return (
        <Box sx={{ display: "flex" }}>
          <AdminPanel />
          <div className="w-full">
            <SearchPanel />
            {/* Admin Accounts Management section  */}
        {/* <h1 className=" mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
        Admin Accounts Management
              </h1>
                <hr className="border border-black mb-8" /> */}
                <UnderConstrunction/>
        <div>
        </div>
        
        </div>
      </Box>
    );
};

export default AdminAccountsMng;