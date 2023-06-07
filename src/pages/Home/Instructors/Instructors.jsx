import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorCard from "./InstructorCard";

const Instructors = () => {

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

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
                {
                    instructors && instructors.map(instructor => <InstructorCard
                        key={instructor.id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;