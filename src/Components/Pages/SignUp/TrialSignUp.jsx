import { useState } from 'react';
import loginPhoto from '../../../../public/images/educational_board.png';
import loginbanner from '../../../../public/images/educational_board.png';
import marketien from '../../../../public/icons/Main Logo-01.png'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../utilies/config';

const TrialSignUp = () => {
  const [name, setName] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [motherName, setmotherName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const navigate = useNavigate();

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
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };
  
  const handlephoneNoChange = (e) => {
    setphoneNo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('fatherName', fatherName);
    data.append('motherName', motherName);
    data.append('birthDate', birthDate);
    data.append('email', email);
    data.append('password', password);
    data.append('phoneNo', phoneNo);
    data.append('image', image);
    // console.log(data);
    
    axios.post(baseUrl("student-reg"), data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      // console.log('Data:', res.data);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  };

  const backgroundStyles = {
    backgroundImage: `url(${loginbanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      style={backgroundStyles}
      className="relative flex items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 bg-gray-700 opacity-70" />
      <div className="w-full max-w-lg relative">
        <div className="lg:flex md:flex sm:hidden justify-between items-center py-5 px-3">
          <img
            className="lg:w-[100px] lg:h-[100px] sm:w-[60px] sm:h-[60px]"
            src={loginPhoto}
            alt=""
          />

          <h1 className="text-center leading-10">
            <span style={{ fontFamily: 'Tiro Bangla, serif' }} className="font-semibold text-4xl text-white">
              এ.বি.সি স্কুল এন্ড কলেজ
            </span>
            <br />
            <span style={{ fontFamily: 'Young Serif, serif' }} className="text-lg text-white">
              A.B.C School and College
            </span>
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >

          <h1 className="font-semibold text-center mb-3">Please Register Here</h1>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              placeholder='Your Name'
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className='flex gap-2 mb-3'>
            <div>
              <label htmlFor="fatherName">Father's Name:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='Your Father Name'
                type="text"
                name="fatherName"
                id="fatherName"
                value={fatherName}
                onChange={handlefatherNameChange}
              />
            </div>
            <div>
              <label htmlFor="motherName">Mother's Name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='Your Mother Name'
                type="text"
                name="motherName"
                id="motherName"
                value={motherName}
                onChange={handlemotherNameChange}
              />
            </div>
          </div>

          <div className='flex gap-2 mb-3'>
            <div>
              <label htmlFor="phoneNo">Phone Number:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='Your Phone Number'
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

          <div className='flex gap-2 mb-3'>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='Your Email'
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder='Your Password'
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="file">Picture: </label> <br />
            <input
              required
              className="file-input file-input-bordered file-input-primary w-full max-w-lg"
              type="file"
              name="image"
              id="file"
              onChange={handleImageChange}
            />
          </div>

          <button
            className="bg-blue-300 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
            type="submit"
          >
            Submit
          </button>

          <p className='mt-3 text-sm'>already have an account? ,please
            <div className='flex items-center'>
              register here : <button
                className="bg-blue-300 hover-bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              ><a href="/login">Login</a></button> <span className='ms-2 me-2'>or</span>
              <button
                className="bg-blue-300 hover-bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              ><a href="/">return home</a></button>
            </div>
          </p>
          <hr className='my-5 border border-blue-300' />
          <h1 className='flex justify-center items-center'>copyright © <img className='w-[120px] ms-2' src={marketien} alt="" /></h1>
        </form>
      </div>
    </div>
  );
};

export default TrialSignUp;
