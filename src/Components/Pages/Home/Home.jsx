import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Messages from "./Messages";


const Home = () => {
    return (
<div>

<Banner/>
<div className='flex mx-3 items-center '>
<Messages/>
<Advertisement/>
</div>
 </div>
    );
};

export default Home;