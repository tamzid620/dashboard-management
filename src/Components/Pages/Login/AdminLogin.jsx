import { useState } from "react";
import adminloginPhoto from "../../../../public/images/educational_board.png";
import adminloginbanner from "../../../../public/images/educational_board.png";
import softplatoon from "../../../../public/images/Untitled-4-01.png";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import showPasswordIcon from "../../../../public/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../../../public/icons/show-password-icon-18.jpg";
import Loader from "../../Shared/Loader/Loader";
import { baseUrl } from "../../../utilies/config";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
      if (!e.target.value) {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const data = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    setIsLoading(true);
    axios
      .post(baseUrl("login"), data)
      .then((res) => {
        if (res.data.status === "201") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Logged In",
            showConfirmButton: false,
            timer: 1500,
          });
          if (res.data?.user?.role === "1") {
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/studentDetails");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You are not eligible for this page",
            });
          }
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          setIsLoading(false);
          navigate("/");
        } else if (res.data.status === "403") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Password",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "Access Denied",
          });
        }
      });
  };

  const backgroundStyles = {
    backgroundImage: `url(${adminloginbanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
    <div
      style={backgroundStyles}
      className="relative flex items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 bg-gray-700 opacity-70" />
      <div className="w-full max-w-md relative">
        

        {/* form section  */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="text-center mb-3">
          <h1 className="font-semibold uppercase text-xl mb-3">Admin Login Only</h1>
          <h1 className="text-gray-700">email: admin@test.com</h1>
          <h1 className="text-gray-700">password: 1234567</h1>
          </div>
         
          {/* Email Section  */}
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="username"
            >
              Enter Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="text-red-600">{emailError}</span>
          </div>
          {/* password section  */}
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span
                onClick={handleShowPassword}
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
              >
                {showPassword ? (
                  <img
                    className="w-[20px] h-[20px]"
                    src={showPasswordIcon}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-[20px] h-[20px]"
                    src={hidePasswordIcon}
                    alt=""
                  />
                )}
              </span>
            </div>
            <span className="text-red-600">{passwordError}</span>
          </div>
          {/* login button section  */}
          <div className="flex items-center justify-between">
            <button
              className="text-white bg-gradient-to-t from-blue-500 to-blue-300
              hover:from-blue-300 hover:to-blue-500
              uppercase font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full border border-gray-500 shadow-md"
              type="submit"
            >
              Login
            </button>
          </div>
          {/* home button-------------  */}

          <button className=" text-white mt-5 bg-gradient-to-b from-blue-500 to-blue-300
              hover:from-blue-300 hover:to-blue-500
              uppercase text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline border border-gray-500 shadow-md">
            <Link className="flex justify-center" to="/">
              return home
            </Link> 
          </button>
        </form>
      </div>
    </div>
      )}
    </>
  );
}

export default AdminLogin;
