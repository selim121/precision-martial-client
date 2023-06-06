import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Classes.css';
import ClassCard from "./ClassCard";

const Classes = () => {

    const [classes, setClasses] = useState();

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])



    return (
        <div className="classes-bg bg-fixed py-8">
            <SectionTitle
                heading='Popular Classes'
                paragraph='Join our martial art club and be healthy'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
                {
                    classes && classes.map(cls => <ClassCard
                        key={cls.id}
                        cls={cls}
                        ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;