import AmountSecion from "../AmountSecion/AmountSecion";
import EventList from "../EventList/EventList";
import NumberStatus from "../NumberStatus/NumberStatus";
import PaymentStatus1 from "../PaymentStatus/PaymentStatus1";
import Transaction from "../Transaction/Transaction";

const DashBoardBody = () => {
  return (
    <div className="text-white mt-10 ps-2 lg:max-w-7xl md:max-w-3xl max-w-sm  mx-auto flex justify-center">
      {/* rest of the body  */}
      <div>
        <NumberStatus />
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5 mx-3 mb-16">
          <Transaction />
          <EventList />
        </div>
        <AmountSecion />
        <PaymentStatus1 />
      </div>
    </div>
  );
};

export default DashBoardBody;
