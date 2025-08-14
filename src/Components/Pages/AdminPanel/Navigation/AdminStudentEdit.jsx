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

const AdminStudentEdit = () => {
  const { studentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  // post method ------------
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
  const [id, setid] = useState("");
  const navigate = useNavigate();

  // handle control --------------------
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
  const handleIdChange = (e) => {
    setid(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlephoneNoChange = (e) => {
    setphoneNo(e.target.value);
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
      .get(
        baseUrl(`student-edit/${studentId}`),
        {
          headers: headers,
        }
      )
      .then((response) => {
        const studentData = response.data;
        setid(studentData.id);
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
        return error
      });
  }, [studentId]);

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
    
    // post method --------------
    setIsLoading(true);
    axios
      .post(baseUrl("student-update"), data, {
        headers: headers,
      })
      .then((res) => {
        
        // to refresh to form ---------------
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
  };

  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
      <Box sx={{ display: "flex", backgroundColor: "#d1d5db" }}>
        <AdminPanel />
        <div className="w-full">
          <SearchPanel />
          {/* AdminStudentInfo section  */}
          <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
            Student Update
          </h1>
          <hr className="border border-black mb-8" />

          {/* Edit form section  */}
          <div className="flex justify-center mt-20">
            {/* form section  */}
            <form
              onSubmit={handleSubmit}
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
              <div className="flex gap-2 mb-3">
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
              <div className="flex gap-2 mb-3">
                <div>
                  <label htmlFor="phoneNo">Phone Number:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    // placeholder="Add Phone Number"
                    type="number"
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
              <div className="flex gap-2 mb-3">
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
              <div className="flex gap-2 mb-3">
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
              <div className="flex gap-2 mb-3">
                <div>
                  <label htmlFor="wclass">Class:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="file-input file-input-bordered file-input-primary w-full max-w-lg"
                  type="file"
                  name="file"
                  id="file"
                  // value={image}
                  onChange={handleImageChange}
                />
              </div>

              <button
                className="bg-blue-300 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
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

export default AdminStudentEdit;
