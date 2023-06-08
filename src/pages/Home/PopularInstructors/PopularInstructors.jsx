import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])


    return (
        <div>
            <SectionTitle
                heading={'Popular Instructors'}
                paragraph={'Join our Precision Martial and be healthy'}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-0 gap-y-12">
                {
                    instructors && instructors.map(instructor => <PopularInstructorCard
                        key={instructor.id}
                        instructor={instructor}
                    ></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;