/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './PopularClasses.css';
import PopularClassCard from "./PopularClassCard";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const PopularClasses = () => {

    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: popularClasses = [] } = useQuery(['popularClasses'], async () => {
        const res = await axiosSecure.get('/popularClasses');
        return res.data;
    })

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
        <div id="popularClasses" className="classes-bg bg-fixed py-8">
            <SectionTitle
                heading='Popular Classes'
                paragraph='Join our martial art club and be healthy'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-0 gap-y-12 mt-8">
                {
                    popularClasses && popularClasses.map(popularClass => <PopularClassCard
                        key={popularClass._id}
                        popularClass={popularClass}
                        enrolledClasses={enrolledClasses}
                        refetch={refetch}
                    ></PopularClassCard>)
                }
            </div>
            <div className="mt-12 mb-5 text-center">
                <Link to={'/classes'} className="px-6 py-3 hover:bg-[#E80040] rounded-lg font-bold text-white border-b-4 border-[#E80040]">More Classes</Link>
            </div>
        </div>
    );
};

export default PopularClasses;