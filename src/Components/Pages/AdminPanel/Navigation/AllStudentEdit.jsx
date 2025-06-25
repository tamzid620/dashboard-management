import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useState } from "react"; 
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import AdminPanel from "../Dashboard/SearchPanel/AdminPanel";
import Loader from "../../../Shared/Loader/Loader";
import { baseUrl } from "../../../../utilies/config";

const AllStudentEdit = () => {
    const {studentId} = useParams();
    // const [studentData, setStudentData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
  // post method ------------
    const [id, setid] = useState("");
    const [name, setName] = useState("");
    const [fatherName, setfatherName] = useState("");
    const [motherName, setmotherName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [rollNo, setrollNo] = useState("");
    const [regNo, setregNo] = useState("");
    const [wclass, setwclass] = useState("");
    const [section, setsection] = useState("");
    const navigate = useNavigate();
  
  // handle control --------------------
   const handleIdChange = (e) => {
    setid(e.target.value);
  };
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
    const handlefatherNameChange = (e) => {
      setfatherName(e.target.value);
    };
    const handlemotherNameChange = (e) => {
      setmotherName(e.target.value);
    };
    const handleBirthDateChange = (e) => {
      setBirthDate(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
    const handleRollNoChange = (e) => {
      setrollNo(e.target.value);
    };
    const handleRegNoChange = (e) => {
      setregNo(e.target.value);
    };
    const handleWclassChange = (e) => {
      setwclass(e.target.value);
    };
    const handleSectionChange = (e) => {
      setsection(e.target.value);
    };
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
      // if (selectedImage) {
      //   const reader = new FileReader();
  
      //   reader.onload = (e) => {
      //     const imagePreviewURL = e.target.result;
      //     setImage(imagePreviewURL);
      //   };
      //   reader.readAsDataURL(selectedImage);
      // }
    };
  
    const handlephoneNoChange = (e) => {
      setphoneNo(e.target.value);
    };
  
    // handle button section ----------------
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
      data.append("fatherName", fatherName);
      data.append("motherName", motherName);
      data.append("birthDate", birthDate);
      data.append("email", email);
      data.append("address", address);
      data.append("phoneNo", phoneNo);
      data.append("image", image);
      data.append("rollNo", rollNo);
      data.append("regNo", regNo);
      data.append("wclass", wclass);
      data.append("section", section);
      // console.log(data);
      // console.log("Selected Image:", image);
      setIsLoading(true);
      axios
        .post(baseUrl("student-update"), data, {
          headers: headers,
        })
        .then((res) => {
          // console.log("Data:", res.data);
          setid("");
          setName("");
          setfatherName("");
          setmotherName("");
          setBirthDate("");
          setEmail("");
          setAddress("");
          setphoneNo("");
          setImage("");
          setrollNo("");
          setregNo("");
          setwclass("");
          setsection("");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "updated Data successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsLoading(false);
          navigate("/allStudent");
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
      }
    
    // get method ----------------------
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };
      setIsLoading(true);
      axios
        .get(baseUrl(`student-edit/${studentId}`), {
          headers: headers,
        })
        .then((response) => {
          // Assuming the response contains the student data
          const studentData = response.data.user;
          setid(studentData.id)
          setName(studentData.name);
          setfatherName(studentData.fatherName);
          setmotherName(studentData.motherName);
          setBirthDate(studentData.birthDate);
          setEmail(studentData.email);
          setAddress(studentData.address);
          setphoneNo(studentData.phoneNo);
          setImage(studentData.image);
          setrollNo(studentData.rollNo);
          setregNo(studentData.regNo);
          setwclass(studentData.wclass);
          setsection(studentData.section);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    
    }, [studentId]); 
    
  
    return (
        <>
        {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ display: "flex" }}>
          <AdminPanel /> 
          <div className="w-full"> 
          <SearchPanel/>
              {/* AdminStudentInfo section  */}
              <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
                Update  Details
              </h1>
              <hr className="border border-black mb-8" />
          <div className="flex justify-center">
  
              {/* Edit form section  */}
  {/* form section  */}
  <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
          >
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
            {/* motherName and fathername section  */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-2 mb-3">
              <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label htmlFor="fatherName">Father's Name:</label>
                <input
                  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add Father Name"
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  value={fatherName}
                  onChange={handlefatherNameChange}
                />
              </div>
              <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label htmlFor="motherName">Mother's Name:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add Mother Name"
                  type="text"
                  name="motherName"
                  id="motherName"
                  value={motherName}
                  onChange={handlemotherNameChange}
                />
              </div>
            </div>
  
            {/* Phone and birthdate section  */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-2 mb-3">
              <div>
                <label htmlFor="phoneNo">Phone Number:</label>
                <input
                  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add Phone Number"
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  value={phoneNo}
                  onChange={handlephoneNoChange}
                />
              </div>
              <div>
                <label htmlFor="birthDate">Birthdate:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  value={birthDate}
                  onChange={handleBirthDateChange}
                />
              </div>
            </div>
  
            {/* email and address section  */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-2 mb-3">
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
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add address"
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
            </div>
  
            {/* Roll and Registration section  */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-2 mb-3">
              <div>
                <label htmlFor="rollNo">Roll:</label>
                <input
                  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add Roll Number"
                  type="number"
                  name="rollNo"
                  id="rollNo"
                  value={rollNo}
                  onChange={handleRollNoChange}
                />
              </div>
              <div>
                <label htmlFor="regNo">Registration:</label>
                <input
                  
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add Registration Number"
                  type="number"
                  name="regNo"
                  id="regNo"
                  value={regNo}
                  onChange={handleRegNoChange}
                />
              </div>
              
            </div>
  
            {/* Class and Section section  */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-2 mb-3">
              <div>
                <label htmlFor="wclass">Class:</label>
                <input
                  
                  className="shadow appearance-none border border-black bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add Class"
                  type="wclass"
                  name="wclass"
                  id="wclass"
                  value={wclass}
                  onChange={handleWclassChange}
                />
              </div>
              <div>
                <label htmlFor="section">Section:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Add section"
                  type="text"
                  name="section"
                  id="section"
                  value={section}
                  onChange={handleSectionChange}
                />
              </div>
            </div>
  
            {/* picture section  */}
            <div>
              <label htmlFor="file">Picture: </label> <br />
              <input
              
                className="file-input file-input-bordered file-input-primary w-full mb-4 bg-white text-black"
                type="file"
                name="file"
                id="file"
                // value={image}
                onChange={handleImageChange}
              />
            </div>
  
            <button
              className="border border-black rounded uppercase 
                              bg-gradient-to-r from-indigo-500 to-blue-600 
                              hover:from-blue-600 hover:to-purple-700 hover:shadow-sm hover:shadow-black
                              text-white font-semibold w-full mt-3 py-2"
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

export default AllStudentEdit;