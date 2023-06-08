import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import sadImg from '../../../../assets/images/others/sad.png';
import useAuth from "../../../../hooks/useAuth";

const MyClasses = () => {
    
    const {user} = useAuth();

    const { data: myClasses = [] } = useQuery(['myClasses'], async () => {
        const res = await fetch(`http://localhost:4000/classes/${user?.email}`);
        return res.json();
    });

    return (
        <div>
            <SectionTitle
                heading={'My Classes'}
                paragraph={'Here is my all valuable classes'}
            ></SectionTitle>
            <hr />
            {
                myClasses ? myClasses.map(myClass => <div key={myClass._id} className="p-3 mt-12 bg-base-200">
                    <div className="flex justify-center lg:justify-start flex-col lg:flex-row  gap-4">
                        <img src={myClass.photo} className="w-80 h-96 lg:w-56 lg:h-60 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-semibold uppercase">{myClass.className}</h1>
                            <p className="py-2">Available seats: {myClass.seats}</p>
                            <p className="py-1">Total Enrolled: 0</p>
                            <h3 className="text-xl font-semibold">Status: <span className={myClass.status === 'approved' ? 'font-light text-green-700' : 'font-light text-orange-400'}>{myClass.status === 'approved' ? 'approved' : 'pending'}</span></h3>
                            <button className="bg-[#E80040] px-2 py-1 rounded-md text-white hover:opacity-30 mt-2">Update</button>
                        </div>
                        {/* TODO:Feedback implement */}
                        <div className="mx-auto text-center d-none">
                            <h1 className="text-2xl">Feedback</h1>
                            <hr />
                            <p className="mt-2">Feedback loading...</p>
                        </div>
                    </div>
                </div>)
                    :
                    <div className="flex flex-col items-center justify-center mt-12">
                        <img src={sadImg} width='100px' />
                        <h3 className="font-light text-[#E80040]">Classes not found.</h3>
                        <h1 className="text-3xl">Add your valuable classes!</h1>
                    </div>
            }
        </div>
    );
};

export default MyClasses;