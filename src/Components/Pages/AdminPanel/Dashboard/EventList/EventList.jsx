import { HiDocumentText } from "react-icons/hi";
import {
  BsFillCloudArrowDownFill,
  BsFileEarmarkBarGraphFill,
} from "react-icons/bs";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";

const EventList = () => {
  return (
    <div className="">
      <div>
        <div className=" 
        shadow-md shadow-black bg-blue-900 rounded-xl  px-3 py-3"
        >
          <div className="flex justify-between items-center mb-2 py-2">
            <div>
              <h4 className="card-title mt-3 mb-3 text-3xl">Event List</h4>
            </div>
            <div>
              <p className="text-muted mt-3 mb-3 font-lg">Your data status</p>
            </div>
          </div>

          <div className="leading-10">
            <div className="lg:flex md:flex lg:justify-between md:justify-between">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-xl me-2">
                  <HiDocumentText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h6 className=" text-white">Family days</h6>
                  <p className="text-xs text-gray-500">
                    Mother's Day and Father's Day
                  </p>
                </div>
              </div>
              <div className="">
                <p className="">15 minutes ago</p>
                <p className="text-xs text-gray-500">30 tasks, 5 issues </p>
              </div>
            </div>
            <hr className="my-3 " />

            <div className="lg:flex md:flex lg:justify-between md:justify-between">
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-xl me-2">
                  <BsFillCloudArrowDownFill className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h6 className=" text-white">Resolution Ruiners</h6>
                  <p className="text-xs text-gray-500">
                    Resolution Ruiner parties,
                  </p>
                </div>
              </div>
              <div className="">
                <p className="">15 minutes ago</p>
                <p className="text-xs text-gray-500">30 tasks, 5 issues </p>
              </div>
            </div>
            <hr className="my-3 " />

            <div className="lg:flex md:flex lg:justify-between md:justify-between">
              <div className="flex items-center">
                <div className="bg-blue-400 p-3 rounded-xl me-2">
                  <AiFillClockCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h6 className=" text-white">Groundhog Day</h6>
                  <p className="text-xs text-gray-500"> holiday season </p>
                </div>
              </div>
              <div className="">
                <p className="">15 minutes ago</p>
                <p className="text-xs text-gray-500">30 tasks, 5 issues </p>
              </div>
            </div>
            <hr className="my-3 " />

            <div className="lg:flex md:flex lg:justify-between md:justify-between">
              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-xl me-2">
                  <BsFileEarmarkBarGraphFill className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h6 className=" text-white">Valentine's Day</h6>
                  <p className="text-xs text-gray-500">
                    {" "}
                    host a singles night instead.
                  </p>
                </div>
              </div>
              <div className="">
                <p className="">15 minutes ago</p>
                <p className="text-xs text-gray-500">30 tasks, 5 issues </p>
              </div>
            </div>
            <hr className="my-3 " />

            <div className="lg:flex md:flex lg:justify-between md:justify-between">
              <div className="flex items-center">
                <div className="bg-yellow-500 p-3 rounded-xl me-2">
                  <BiSolidMessageAltDetail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h6 className=" text-white">Pi Day</h6>
                  <p className="text-xs text-gray-500">March 14 is 3/14, </p>
                </div>
              </div>
              <div className="s">
                <p className="">15 minutes ago</p>
                <p className="text-xs text-gray-500">30 tasks, 5 issues </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventList;
