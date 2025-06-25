import { IoSearchCircleSharp } from "react-icons/io5";
import { NotificationsMenu } from "./NotificationsMenu";
import { ProfileMenu } from "./ProfileMenu";
import { MessagesMenu } from "./MessagesMenu";

const SearchPanel = () => {
  return (
    <div className="flex justify-between w-full z-10 bg-blue-900 ps-5 lg:py-[8px] md:py-[8px] sm: py-[4px]">
      {/* search section  */}
      <div className=" sm: hidden lg:flex md:flex">
        <input
          type="text"
          placeholder="Search Setting"
          className="input text-black bg-white input-bordered input-success lg:w-[700px] md:w-[350px]"
        />
        <button
          title="Wishlist"
          className=" text-white hover:text-blue-500 font-bold px-3 py-1
      rounded-md"
        >
          {" "}
          <IoSearchCircleSharp className="w-[30px] h-[30px]" />
        </button>
      </div>
      {/* icon and login section  */}
      <div className="flex gap-5 lg:ms-0 lg:me-[20px] md:md-0 md:me-[20px] sm: ms-[110px]">
        <div className="flex items-center">
          {/* message icon  */}

          <MessagesMenu />

          {/* notification icon  */}
          <NotificationsMenu />
        </div>

        {/* profile section  */}
        <ProfileMenu />
      </div>
    </div>
  );
};

export default SearchPanel;
