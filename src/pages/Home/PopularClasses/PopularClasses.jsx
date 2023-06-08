import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './PopularClasses.css';
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:4000/classes');
        return res.json();
    });


    return (
        <div className="classes-bg bg-fixed py-8">
            <SectionTitle
                heading='Popular Classes'
                paragraph='Join our martial art club and be healthy'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-0 gap-y-12 mt-8">
                {
                    classes && classes.map(cls => <PopularClassCard
                        key={cls.id}
                        cls={cls}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;