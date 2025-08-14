import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const AdminNoticesEdit = () => {
  const { noticeId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  // post method
  const [id, setid] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState("");
  const navigate = useNavigate();

  // handle control --------------------
  const handleIdChange = (e) => {
    setid(e.target.value);
  };
  const handletitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlesubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handledescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlepdfChange = (e) => {
    setPdf(e.target.files[0]);
  };

  // get  method ----------------------
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    setIsLoading(true);
    axios
      .get(baseUrl(`notice-edit/${noticeId}`), {
        headers: headers,
      })
      .then((response) => {
        const teacherData = response.data.user;
        setid(teacherData.id);
        setTitle(teacherData.title);
        setSubject(teacherData.subject);
        setDescription(teacherData.description);
        setPdf(teacherData.pdf);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, [noticeId]);

  // post section ----------------
  const handleSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    e.preventDefault();
    const data = new FormData();
    data.append("id", id);
    data.append("title", title);
    data.append("subject", subject);
    data.append("description", description);
    data.append("pdf", pdf);

    // post method --------------

    setIsLoading(true);
    axios
      .post(baseUrl("notice-update"), data, {
        headers: headers,
      })
      .then((res) => {
        // to refresh to form ---------------
        setid("");
        setTitle("");
        setSubject("");
        setDescription("");
        setPdf("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "updated Data successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
        navigate("/adminNotices");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: ("An error occurred:", error),
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ display: "flex" }}>
          <AdminPanel />
          <div className="w-full">
            <SearchPanel />
            {/* All Student section  */}
            <div className="mt-20 mx-[10px]">
              {/* AdminTeachersInfo section  */}
              <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
                Notice Update
              </h1>
              <hr className="border border-black mb-8" />

              {/* Edit form section  */}
              {/* form section  */}
              <form
                onSubmit={handleSubmit}
                className="bg-gray-100 shadow-lg rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2"
              >
                {/*id,  title and subject section  */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3">
                  {/* title section   */}
                  <div>
                    <label htmlFor="title">title:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                      // placeholder="Add title"
                      type="text"
                      title="title"
                      id="title"
                      value={title}
                      onChange={handletitleChange}
                    />
                  </div>
                  {/* subject section  */}
                  <div>
                    <label htmlFor="subject">subject:</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      title="subject"
                      id="subject"
                      value={subject}
                      onChange={handlesubjectChange}
                    />
                  </div>
                </div>

                {/* description section  */}
                <div>
                  <label htmlFor="description">description:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // placeholder="Add Mother title"
                    type="text"
                    title="description"
                    id="description"
                    value={description}
                    onChange={handledescriptionChange}
                  />
                </div>

                {/* picture section  */}
                <div>
                  <label htmlFor="file">Pdf: </label> <br />
                  <input
                    className="file-input file-input-bordered file-input-primary w-full"
                    type="file"
                    title="file"
                    id="file"
                    // value={pdf}
                    onChange={handlepdfChange}
                  />
                </div>
                {/* id section   */}
                <div>
                  <label htmlFor="id"></label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    // placeholder="Add title"
                    type="hidden"
                    title="id"
                    id="id"
                    value={id}
                    onChange={handleIdChange}
                  />
                </div>

                <button className="saveFormButton" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </Box>
      )}
    </>
  );
};

export default AdminNoticesEdit;
