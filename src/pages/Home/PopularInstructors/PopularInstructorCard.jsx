/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { AiOutlineMail } from "react-icons/ai";

const PopularInstructorCard = ({ instructor }) => {

    const { image, name, email, numberOfClassesTaken } = instructor;

    return (
        <>
            <div
                className="mx-auto">
                <div className="relative block bg-[#dc034158] rounded-lg shadow-lg h-[450px] w-72">
                    <div className="flex">
                        <div
                            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={image} className="w-full h-full" />
                        </div>
                    </div>
                    <div className="px-6 py-3">
                        <div className="flex flex-col justify-center items-center">
                            <h5 className="text-xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold mb-1">{name}</h5>
                            <div className="flex justify-center items-start gap-1">
                                <AiOutlineMail color='E80040' />
                                <h6 className="font-medium text-blue-800 mb-2 text-xs">{email}</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-3 flex flex-col items-center justify-center">
                            <p className="my-2 font-light">Total Classes: {numberOfClassesTaken}</p>
                            <button className="uppercase px-4 py-2 rounded-md hover:bg-[#981b1bd9] bg-[#E80040] text-white font-bold">See Classes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularInstructorCard;