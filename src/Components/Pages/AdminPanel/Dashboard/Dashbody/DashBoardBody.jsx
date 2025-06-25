import AmountSecion from "../AmountSecion/AmountSecion";
import EventList from "../EventList/EventList";
import NumberStatus from "../NumberStatus/NumberStatus";
import PaymentStatus1 from "../PaymentStatus/PaymentStatus1";
import Transaction from "../Transaction/Transaction";

const DashBoardBody = () => {
  return (
    <div className="text-white  mt-10 ps-2 2xl:max-w-full xl:max-w-full lg:max-w-full md:max-w-full sm: max-w-sm md:ms-0 sm: -ms-9">
      {/* rest of the body  */}
      <div>
        <div className="mb-16"><NumberStatus /></div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5 mx-3 mb-16">
          <div className=""><Transaction /></div>
          <div className=""><EventList /></div>
        </div>
        <div className=" mb-16"><AmountSecion /></div>
        <div className=" mb-16"><PaymentStatus1 /></div>
      </div>
    </div>
  );
};

export default DashBoardBody;