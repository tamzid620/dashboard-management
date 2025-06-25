import TrialSilder from "./TrialSilder";


const Banner = () => {
    return (
    <div>
    <div className="mt-2">
        <marquee className="text-white font-semibold py-2 text-center bg-blue-600">
            অক্টোবর হতে ডিসেম্বর/২০২৩ এর বেতন আদায়ের তারিখ ৫ম-৯ম শ্রেণির পর্যন্ত।
             ২০২৩ সালে এসএসসি উর্ত্তীণ শিক্ষার্থীদের একাডেমিক টান্সক্রীপ্ট বিতরণ সংক্রান্ত বিজ্ঞপ্তি।
             </marquee>
    </div>
   {/* carousel section  */}
<TrialSilder/>
    </div>
    );
};

export default Banner;