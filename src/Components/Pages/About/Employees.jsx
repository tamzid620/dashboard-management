import unknownPhoto from '../../../../public/images/Unknown.png'
import backgroudphoto from '../../../../public/images/tree.jpg'

const Employees = () => {
    return (
<div>
<div
     style={{
        backgroundImage: `url(${backgroudphoto})`,
         backgroundSize: 'cover',
          backgroundPosition: 'center',
           height: '350px',
           marginTop:'30px'
        }} className="flex justify-center">
                {/* title tag */}
                <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
                    <h1
                        style={{ fontFamily: 'Mooli, sans-serif' }}
                        className="text-3xl text-white font-semibold "
                    >
                        Our Employess
                    </h1>
                    <img className='w-[350px] h-[50px]' src="../../../../public/icons/hrLine.png" alt="" />
                </div>
</div>

            {/* information section  */}
            <div className="mt-10 max-w-screen-xl mx-auto ">
                {/* our team seciton  */}
                <div>
                    {/* our team information */}
                    <div className='mt-10'>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Babul</h1>
                                <p className='flex justify-center font-semibold  uppercase'>General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold  uppercase'> General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Babul</h1>
                                <p className='flex justify-center font-semibold  uppercase'>General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold  uppercase'> General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Babul</h1>
                                <p className='flex justify-center font-semibold  uppercase'>General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold  uppercase'> General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Babul</h1>
                                <p className='flex justify-center font-semibold  uppercase'>General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold  uppercase'> General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-end md:justify-end sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Babul</h1>
                                <p className='flex justify-center font-semibold  uppercase'>General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold  uppercase'> General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold  uppercase'> General Manager</p>
                            </div>
                            </div>

                            <div className='flex lg:justify-start md:justify-start sm: justify-center'>
                            <div>
                                <div className='flex justify-center'>
                                    <img className='w-[350px] rounded-xl bg-blue-200' src={unknownPhoto} alt="" />
                                </div>
                                <h1 className='flex justify-center mt-3 font-semibold  text-2xl uppercase'>Bahar</h1>
                                <p className='flex justify-center font-semibold  uppercase'> General Manager</p>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
 </div>
    );
};

export default Employees;