import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";

const PopularInstructors = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: popularInstructors = [] } = useQuery(['popularInstructors'], async () => {
        const res = await axiosSecure.get('/popularInstructors');
        return res.data;
    })


    return (
        <div>
            <SectionTitle
                heading={'Popular Instructors'}
                paragraph={'Join our Precision Martial and be healthy'}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-0 gap-y-12">
                {
                    popularInstructors && popularInstructors.map(popularInstructor => <PopularInstructorCard
                        key={popularInstructor._id}
                        popularInstructor={popularInstructor}
                    ></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;