import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import softplatoon from "../../../../public/images/Untitled-4-01.png";

const Footer = () => {
  return (
    <div className="sm: ms-2 sm: me-2 lg:ms-0 lg:me-0 mt-36 bg-blue-200 pt-10">
      <div>
        <footer className="max-w-screen-xl mx-auto ">
          <div className="">
            <div className="last-boxes grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-5">
              {/* ------------ Contact Us------------- */}
              <div className="">
                <div className="text-center">
                  <h3 className="flex justify-center text-xl font-semibold">
                    Contact Us
                  </h3>
                  <hr className="mb-3 border-green-500" />
                  <div className="nd:px-0 sm: px-4">
                    <div className="flex items-center mb-2">
                      <FaMapMarkerAlt className="text-2xl mr-3 " />
                      <p className="hover:text-yellow-500">
                        123 Main Street, <br />
                        City, Country
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaPhone className="text-2xl mr-3 " />
                      <p className="hover:text-yellow-500">
                        Phone: +1 (123) 456-7890 <br />
                        Mobile: +1 (987) 654-3210
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-2xl mr-3 " />
                      <p className="hover:text-yellow-500">
                        Email: example@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------Facebook ------------- */}
              <div >
                <div>
                  <h3 className="text-xl text-center font-semibold">
                    Developers
                  </h3>
                  <hr className="mb-3 border-green-500" />
                  <div className="photo">
                    <div className="flex justify-center">
                      <a
                        href="https://www.softplatoon.com/"
                        target="blank"
                      >
                        <img className="md:w-[180px] sm: w-[150px]" src={softplatoon} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------Quick Links ------------- */}
              <div className="text-center">
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <hr className="mb-3 border-green-500" />
                <div className="">
                  <ul>
                    <li>
                      <a className="hover:text-yellow-500" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-yellow-500" href="/aboutUs">
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-yellow-500"
                        href="/platterService"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-yellow-500" href="#">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-yellow-500" href="/contactUs">
                        Contact Us
                      </a>
                    </li>
                    {/* <li>
                            <Link className="hover:text-yellow-500" to="/dp">AdminPanel</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500" to="/adminlogin">AdminLogin</Link>
                        </li> */}
                  </ul>
                </div>
              </div>
              {/* ------------Follow us ------------- */}
              <div className="text-center">
                <div>
                  <h3 className="text-xl font-semibold">Follow Us</h3>
                  <hr className="mb-3 border-green-500" />
                  <div className="flex justify-center">
                    <ul className="text-center ">
                      <li>
                        <a href="#" className="flex items-center">
                          <img
                            className="bg-black rounded-full w-5 h-5 p-1"
                            src="./icons/facebook.svg"
                            alt=""
                          />
                          <span className=" ms-3 hover:text-yellow-500">
                            {" "}
                            facebook
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center">
                          <img
                            className="bg-black rounded-full w-5 h-5 p-1"
                            src="./icons/instagram.svg"
                            alt=""
                          />
                          <span className=" ms-3 hover:text-yellow-500">
                            Instagram
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center">
                          <img
                            className="bg-black rounded-full w-5 h-5 p-1"
                            src="./icons/twitter.svg"
                            alt=""
                          />
                          <span className=" ms-3 hover:text-yellow-500">
                            Twitter
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="copyright">
          <div className=" py-3 mt-16  text-center bg-blue-600 text-white font-semibold">
            <h1>
              copyright © 2023. All rights reserved by{" "}
              <a
                href="https://www.softplatoon.com/"
                className="hover:underline"
                target="blank"
              >
                SoftPlatoon
              </a>
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
