
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import { useForm, } from 'react-hook-form';
import bkashbuttonlogo from '../../../../public/icons/bkash_payment_logo.png'

const Payment = () => {
  const { handleSubmit, register } = useForm();
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amount, setAmount] = useState(0);


  const options = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];
  const handleAmountChange = (event) => {
    const newAmount = parseFloat(event.target.value) || 0;
    setAmount(newAmount);
    updateTotalAmount(newAmount, selectedMonths);
  };

  const updateTotalAmount = (newAmount, selectedMonths) => {
    const selectedMonthCount = selectedMonths.length;
    const calculatedTotalAmount = newAmount * selectedMonthCount;
    setTotalAmount(calculatedTotalAmount);
  };
  // const onSubmit = (data) => {
  //   console.log(data);
  //   console.log(selectedMonths);
  // };
  const handleMonthChange = (event) => {
    setSelectedMonths(event);
    updateTotalAmount(amount, event);
  };

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(selectedMonths);
  };


  return (
    <div className='mt-5'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-md border p-5 rounded-lg bg-gray-200" >

        <h1 className='flex justify-center text-xl mb-3'>--- Payment Form ---</h1>
        <hr className='mb-3 border border-black' />

        {/* name section  */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input mt-1 block w-full"
            placeholder='Adnan Karim'
            readOnly
            {...register('name')}
          />
        </div>
        {/* father name section  */}
        <div className="mb-4">
          <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Father Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            className="form-input mt-1 block w-full"
            placeholder='Fazlul Karim'
            readOnly
            {...register('fatherName')}
          />
        </div>

        <div className='grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
          {/* class section  */}
          <div className="mb-4">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
            <input
              type="text"
              id="class"
              name="class"
              className="form-input mt-1 block w-full"
              placeholder='Ten'
              readOnly
              {...register('class')}
            />
          </div>
          {/* registration section  */}
          <div className="mb-4">
            <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Registration Number</label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              className="form-input mt-1 block w-full"
              placeholder='121212121'
              readOnly
              {...register('registrationNumber')}
            />
          </div>
        </div>

        <div className='grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
          {/* amount section  */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
            type="text"
            id="amount"
            name="amount"
            className="form-input mt-1 block w-full"
            placeholder="Monthly Amount"
            value={amount}
            onChange={handleAmountChange}
          />
          </div>

          {/* total amount section */}
          <div className="mb-4">
            <label htmlFor="totalAmount"
              className="block text-sm font-medium text-gray-700">Total Amount</label>
             <input
            type="text"
            id="totalAmount"
            name="totalAmount"
            className="form-input mt-1 block w-full"
            readOnly
            value={totalAmount}
          />

          </div>
        </div>

        {/* select month section  */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Month</label>
          <Multiselect
            isObject={false}
            selectedValues={selectedMonths}
            onRemove={handleMonthChange}
            onSelect={handleMonthChange}
            options={options}
            showCheckbox
          />
        </div>

        {/* submit butotn section  */}
        <div className='flex justify-center mt-10'>
          <button type="submit" className="bg-transparent border-none p-0">
            <img className=' w-[250px] h-auto rounded-md hover:scale-105' src={bkashbuttonlogo} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
