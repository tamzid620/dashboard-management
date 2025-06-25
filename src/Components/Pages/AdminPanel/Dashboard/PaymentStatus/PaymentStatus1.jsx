

const PaymentStatus1 = () => {


  return (
    <div className=" border shadow-md shadow-gray-800
    rounded-xl overflow-x-auto bg-blue-900 mx-5">
      <div
        className=" col-12  rounded-xl p-3 b "
        role="region"
        aria-labelledby="Cap1"
        tabIndex="0"
      >
        <table className="table w-full rounded-xl flex items-center justify-center">
          <h4 className="font-semibold text-2xl text-white mb-5">
            Payment Status
          </h4>

          <div className="overflow-x-auto" >
            <table className=" table table-zebra text-black mb-5">
              {/* head */}
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th>index</th>
                  <th>Client Name</th>
                  <th>phoneNo</th>
                  <th>OrderCode</th>
                  <th>Total Amount</th>
                  <th>Order Stage</th>
                </tr>
              </thead>
              <tbody className="bg-gray-400">
                
                  <tr >
                    <th>index</th>
                    <td>clientName</td>
                    <td>phoneNo</td>
                    <td>orderCode</td>
                    <td>totalAmount</td>
                    <td>orderStage</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </table>
      </div>
    </div>
  );
};

export default PaymentStatus1;