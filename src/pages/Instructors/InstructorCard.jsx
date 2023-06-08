/* eslint-disable react/prop-types */
import { AiOutlineMail } from 'react-icons/ai';

const InstructorCard = ({instructor}) => {

    const {name, email, photo} = instructor;
    console.log(instructor);

    return (
        <div
            className="mx-auto">
            <div className="relative block bg-[#dc034158] rounded-lg shadow-lg h-[450px] w-72">
                <div className="flex">
                    <div
                        className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={photo} className="w-full h-full" />
                    </div>
                </div>
                <div className="px-6 py-3">
                    <h5 className="text-xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold mb-1">{name}</h5>
                    <div className="flex justify-center items-start gap-1">
                        <AiOutlineMail color='E80040' />
                        <h6 className="font-medium text-blue-800 mb-2 text-xs">{email}</h6>
                    </div>
                    <hr />
                    <p className="my-2 font-light">Number of Classes: 4</p>
                    <div className="mt-3">
                        <button className="hover:text-[#E80040] uppercase hover:border px-4 py-2 rounded-md hover:bg-white bg-[#E80040] border-[#E80040] text-white font-bold">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;