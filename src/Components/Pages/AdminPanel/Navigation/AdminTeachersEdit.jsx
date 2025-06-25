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

const AdminTeachersEdit = () => {
  const { teacherId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  // post method
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  // handle control --------------------
  const handleIdChange = (e) => {
    setid(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }; 
  const handlesubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handlephoneNoChange = (e) => {
      setphoneNo(e.target.value);
    };
    const handledesignationChange = (e) => {
      setDesignation(e.target.value);
    };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
//     const selectedImage = e.target.files[0];
//     if (selectedImage) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const imagePreviewURL = e.target.result;
//         setImage(imagePreviewURL);
//       };
//       reader.readAsDataURL(selectedImage);
//     }
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
      .get(baseUrl(`teacher-edit/${teacherId}`), {
        headers: headers,
      })
      .then((response) => {
        const teacherData = response.data.user;
        setid(teacherData.id);
        setName(teacherData.name);
        setSubject(teacherData.subject);
        setDesignation(teacherData.designation);
        setEmail(teacherData.email);
        setphoneNo(teacherData.phoneNo);
        setImage(teacherData.image);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teacherId]);

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
    data.append("name", name);
    data.append("subject", subject);
    data.append("designation", designation);
    data.append("email", email);
    data.append("phoneNo", phoneNo);
    data.append("image", image);
    // console.log(data);
    // console.log("Selected Image:", image);
    // post method --------------
    setIsLoading(true);
    axios
      .post(baseUrl("teacher-update"), data, {
        headers: headers,
      })
      .then((res) => {
        // console.log("Data:", res.data);
        // to refresh to form ---------------
        setid("");
        setName("");
        setSubject("");
        setDesignation("");
        setEmail("");
        setphoneNo("");
        setImage("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "updated Data successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
        navigate("/adminTeachers");
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
          {/* Admin Teacher Add section  */}
          <div className="mt-20 mx-[10px] bg-white text-black h-screen">
            {/* AdminStudentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
             Teachers Update 
            </h1>
            <hr className="border border-black mb-8" />

            {/* Edit form section  */}
            {/* form section  */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 shadow-lg rounded-sm px-8 py-8 mb-4 lg:mx-10 md:mx-5 sm: mx-2"
            >
{/*id,  name and emai section  */}
 <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3">

{/* name section   */}
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  // placeholder="Add Name"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
{/* email section  */}
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // placeholder="Add Email"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
</div>

{/* phoneNo and subject section  */}
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3">
    {/* subject section  */}
                <div>
                  <label htmlFor="subject">subject:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={handlesubjectChange}
                  />
                </div>
{/* phone section  */}
<div>
                  <label htmlFor="phoneNo">Phone Number:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="phoneNo"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={handlephoneNoChange}
                  />
                </div>
 </div>

{/* designation section  */}
                <div>
                  <label htmlFor="designation">designation:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // placeholder="Add Mother Name"
                    type="text"
                    name="designation"
                    id="designation"
                    value={designation}
                    onChange={handledesignationChange}
                  />
                </div>

{/* picture section  */}
              <div>
                <label htmlFor="file">Picture: </label> <br />
                <input
                  className="file-input file-input-bordered file-input-primary w-full bg-white text-black"
                  type="file"
                  name="file"
                  id="file"
                  // value={image}
                  onChange={handleImageChange}
                />
              </div>
{/* id section   */}
<div>
                <label htmlFor="id"></label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  // placeholder="Add Name"
                  type="hidden"
                  name="id"
                  id="id"
                  value={id}
                  onChange={handleIdChange}
                />
              </div>

              <button
                className="saveFormButton"
                type="submit"
              >
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

export default AdminTeachersEdit;
