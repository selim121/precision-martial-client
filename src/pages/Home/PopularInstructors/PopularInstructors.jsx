import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const PopularInstructors = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: popularInstructors = [] } = useQuery(['popularInstructors'], async () => {
        const res = await axiosSecure.get('/popularInstructors');
        return res.data;
    })

    
    return (
        <div id="popularInstructors" className="mb-12">
            <div className="my-8">
            <SectionTitle
                heading={'Popular Instructors'}
                paragraph={'Join our Precision Martial and be healthy'}
            ></SectionTitle>
            </div>

            <div className="flex flex-wrap gap-4">
                {
                    popularInstructors && popularInstructors.map(popularInstructor => <PopularInstructorCard
                        key={popularInstructor._id}
                        popularInstructor={popularInstructor}
                    ></PopularInstructorCard>)
                }
            </div>
            <div className="mt-12 mb-5 text-center">
                <Link to={'/instructors'} className="px-6 py-3 hover:bg-[#E80040] hover:text-white rounded-lg font-bold border-b-4 border-[#E80040]">More Instructors</Link>
            </div>
        </div>
    );
};

export default PopularInstructors;