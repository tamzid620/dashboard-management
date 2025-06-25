import ad1 from '../../../../public/images/maddhomik shikka board.png'
import ad2 from '../../../../public/images/shadinota.jpeg'
import ad3 from '../../../../public/images/bijoy.png'

const Advertisement = () => {
    return (
        <div className='sm: hidden lg:flex md:flex mt-10'>
            <div>
            <img className=' h-[250px]' src={ad1} alt="মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড" />
            <img className=' h-[250px]' src={ad2} alt="স্বাধীনতা দিবস" />
            <img className=' h-[250px]' src={ad3} alt="বিজয় দিবস " />
            </div>
        </div>
    );
};

export default Advertisement;