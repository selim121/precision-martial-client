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

            <div className="flex flex-wrap gap-4">
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