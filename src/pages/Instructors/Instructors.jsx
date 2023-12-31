import headerImg from '../../assets/images/header/instructor.png';
import { useQuery } from "@tanstack/react-query";
import InstructorCard from './InstructorCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {

    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await fetch('https://precision-martial-server.vercel.app/allInstructors');
        return res.json();
    });

    return (
        <>
            <Helmet>
                <title>
                    Precision Martial - Instructors
                </title>
            </Helmet>
            <div className="hero h-[450px]" style={{ backgroundImage: `url(${headerImg})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content mt-24">
                    <div className="bg-black bg-opacity-40 p-5 rounded-md">
                        <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                        <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Train with best legends</h1>
                        <Link to={'/classes'} className="text-[#E80040] uppercase border px-4 py-2 rounded-md hover:bg-[#E80040] hover:border-[#E80040] hover:text-white font-bold">Join Now</Link>
                    </div>
                </div>
            </div>

            <div className="my-12 mx-auto">

                <section className="text-gray-800 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-0 gap-y-12">
                        {
                            instructors && instructors.map(instructor => <InstructorCard
                                key={instructor._id}
                                instructor={instructor}
                            ></InstructorCard>)
                        }
                    </div>

                </section>
            </div >

        </>
    );
};

export default Instructors;