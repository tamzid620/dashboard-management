import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#0d47a1]">
    <div className="text-center ">
        <h2 className="mb-2 text-[50px] font-bold text-white sm:text-[80px] md:text-[100px]">
            404
        </h2>
        <h4 className="mb-3 text-[22px] font-semibold text-white">
            Oops! That page can't be found
        </h4>
        <p className="mb-8 text-lg text-white">
            The page you are looking for may be deleted
        </p>
        <Link
            to="/"
            className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition rounded-lg hover:bg-[#000000] hover:text-white hover:shadow-gray-500
             shadow-md shadow-gray-900"
        >
            Go to Home
        </Link>
</div>
</div>
  );
};

export default ErrorPage;
