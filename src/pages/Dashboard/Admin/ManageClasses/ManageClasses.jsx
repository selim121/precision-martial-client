import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const ManageClasses = () => {

    const { data: allClasses = [] } = useQuery(['allClasses'], async () => {
        const res = await fetch('http://localhost:4000/classes');
        return res.json();
    });

    console.log(allClasses);

    return (
        <div>
            <SectionTitle
                heading={'Manage Classes'}
            ></SectionTitle>
            <hr />
            <div className="mt-5">
                {
                    allClasses && allClasses.map(allClass => <div key={allClass._id} className="p-3 mt-12 bg-base-200">
                    <div className="flex justify-center lg:justify-start flex-col lg:flex-row  gap-4">
                        <img src={allClass.photo} className="w-80 h-96 lg:w-56 lg:h-60 rounded-lg shadow-2xl" />
                        <div className="space-y-1">
                            <h1 className="text-4xl font-semibold uppercase">{allClass.className}</h1>
                            <h3 className="text-xl font-semibold">Instructor: <span className="font-light">{allClass.name}</span></h3>
                            <h3 className="text-xl font-semibold">Email: <span className="font-light">{allClass.email}</span></h3>
                            <h3 className="text-xl font-semibold">Available seats: <span className="font-light">{allClass.seats}</span></h3>
                            <h3 className="text-xl font-semibold">Price: <span className="font-light">$ {allClass.price}</span></h3>
                            <h3 className="text-xl font-semibold">Status: <span className="font-light text-orange-400">pending</span></h3>
                        </div>
                        {/* TODO:Feedback implement */}
                        <div className="flex flex-col gap-4 justify-center mx-auto">
                            <button className="px-2 py-3 bg-green-700 rounded-md text-white hover:opacity-40">Approved</button>
                            <button className="px-2 py-3 bg-red-500 rounded-md text-white hover:opacity-40">Deny</button>
                            <button className="px-2 py-3 bg-cyan-500 rounded-md text-white hover:opacity-40">Feedback</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;