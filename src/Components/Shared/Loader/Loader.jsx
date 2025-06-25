

const Loader = () => {
    return (
<div className="flex justify-center items-center bg-gray-200 h-screen">
        <div className="text-center">
<span className="loading loading-spinner text-[#25476a] w-[80px] mb-7"></span>
<h2 className="text-center text-xl text-black font-semibold">Loading...</h2>
	<p className="text-center text-black">This may take a few seconds, please don't close this page.</p>
        </div>
        </div>
    );
};

export default Loader;