import useAuth from "../../hooks/useAuth";

const UserProfile = () => {

    const { user } = useAuth();
    console.log(user);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center my-8'>
            <div className="">
                <img src={''} alt="" />
                <p>Coming soon...</p>
            </div>
            <div className="ms-3 space-y-2">
                <h1 className='text-3xl'>Welcome To Our <span className='bg-gradient-to-r from-[#E80040] via-[#e9a0b5] to-[#E80040] text-transparent bg-clip-text'>Precision Martial</span></h1>
                <p className="text-justify text-sm">
                    At Precision Martial, we are dedicated to providing top-notch martial arts training for all ages and skill levels. <br /> <br />

                    With our state-of-the-art facilities and comprehensive training programs, we offer a supportive and inclusive environment where students can develop discipline, strength, flexibility, and confidence. Our classes focus on a range of martial arts disciplines, including Karate, Taekwondo, Jiu-Jitsu, Kickboxing, and more.
                </p>
                <div className="flex pt-2 gap-5">
                    <div className="flex items-center text-sm gap-1">

                        <p className='italic'>10/7 Shekhertek, Adabor, Dhaka - 1207</p>
                    </div>
                    <div className="flex items-center text-sm gap-1">

                        <p className="italic">+880 1773 407 976</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;