import { BsBoxSeamFill  } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuMonitor } from "react-icons/lu";

const AmountSecion = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5 mt-5 mx-auto mb-16">

      {/* Total Amount Debit */}
 <div className="flex flex-col sm:flex-row items-center justify-between shadow-md shadow-black bg-blue-900 rounded-xl px-5 py-5">
 {/* text part  */}
            <div>
              <h5 className="text-2xl text-white font font-semibold mb-2">Total Amount Debit</h5>
              <div className="flex items-center ">
                <h2 className="font-bold text-3xl">$32123</h2>
                <p className="text-success ms-2 text-xl">+3.5%</p>
              </div>
              <h6 className="text-gray-400 text-xl">11.38% Since last month</h6>
            </div>
{/* icon part  */}
            <div className=" flex justify-center sm: mt-3 ">
              <BsBoxSeamFill size={70} className="text-blue-500"/>
            </div>
        </div>

        {/* Total Amount Credit  */}
<div className="flex flex-col sm:flex-row items-center justify-between shadow-md shadow-black bg-blue-900 rounded-xl px-5 py-5">
 {/* text part  */}
            <div>
              <h5 className="text-2xl text-white font font-semibold mb-2">Total Amount Credit</h5>
              <div className="flex items-center">
                <h2 className="font-bold text-3xl">$45850</h2>
                <p className="text-success ms-2 text-xl">+8.3%</p>
              </div>
              <h6 className="text-gray-400 text-xl">9.61% Since last month</h6>
            </div>
{/* icon part  */}
            <div className="flex justify-center sm: mt-3 ">
              <BiSolidShoppingBags size={70} className="text-red-500"/>
            </div>
        </div>

        {/* Purchase */}
<div className="flex flex-col sm:flex-row items-center justify-between shadow-md shadow-black bg-blue-900 rounded-xl px-5 py-5">
 {/* text part  */}
            <div>
              <h5 className="text-2xl text-white font font-semibold mb-2">Purchase</h5>
              <div className="flex items-center">
                <h2 className="font-bold text-3xl">$2039</h2>
                <p className="text-success ms-2 text-xl">-2.1%</p>
              </div>
              <h6 className="text-gray-400 text-xl">2.27% Since last month</h6>
            </div>
{/* icon part  */}
            <div className="flex justify-center sm: mt-3 ">
              <LuMonitor size={70} className="text-green-500"/>
        </div>
        </div>

      </div>
    </div>
  );
};

export default AmountSecion;