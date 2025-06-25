import { Box } from "@mui/material";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import UnderConstrunction from "../../../Shared/UnderConstrunction/UnderConstrunction";


const AdminExamination = () => {
    return (
        <Box sx={{ display: "flex" }}>
        <AdminPanel />
        <div className="w-full">
          <SearchPanel />
          {/* Admin Examination section  */}
      {/* <h1 className=" mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
      Admin Examination
            </h1>
              <hr className="border border-black mb-8" /> */}
              <UnderConstrunction/>
      <div>
      </div>
      
      </div>
    </Box>
    );
};

export default AdminExamination;