/* eslint-disable no-unused-vars */
import headerImg from '../../assets/images/header/class.png';
import { useQuery } from "@tanstack/react-query";
import ClassCard from './ClassCard';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Classes = () => {
    const {user} = useAuth();

    const { data: classes = [], isLoading: isClassesLoading } = useQuery(['classes'], async () => {
        const res = await fetch('https://precision-martial-server.vercel.app/approved-classes');
        return res.json();
    });

    const { data: enrolledClasses = [], refetch, isLoading } = useQuery({
        queryKey: ['enrolledClasses', user?.email], 
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios(`https://precision-martial-server.vercel.app/enrolledClasses/${user?.email}`);
            // console.log(res);
            return res.data;
        }
    });


    return (
        <>
            <div className="hero h-[450px]" style={{ backgroundImage: `url(${headerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mt-24">
                    <div className="bg-black bg-opacity-30 p-5 rounded-md">
                        <h3 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">Precision Martial</h3>
                        <h1 className='text-4xl text-white bg-slate-700 rounded-xl px-5 py-2 my-3 uppercase'>Enroll our best classes</h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-0 gap-y-12 my-8">
                {
                    classes && classes.map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                        enrolledClasses={enrolledClasses}
                        refetch={refetch}
                    ></ClassCard>)
                }
            </div>
        </>
    );
};

export default Classes;