import { useState } from "react";
import { Link } from "react-router-dom";

const EnterPhone = () => {

    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    const handleSubmit = () => {
      // console.log(phoneNumber);
    };

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-64">
            <h1 className="flex justify-center font-semibold mb-3 text-blue-gray-400">Enter Your Phone Number</h1>
          <input
          value={phoneNumber}
          onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            type="number"
            placeholder="Enter Phone Number"
          />
<Link to="/enterotp"><button 
onClick={handleSubmit}
className="w-full bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Generate OTP
</button></Link>
        </div>
      </div>
    );
  };
  
  export default EnterPhone;