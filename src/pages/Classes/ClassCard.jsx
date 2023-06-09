/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import useAxiosSecure from "../../hooks/UseAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';


const ClassCard = ({ cls }) => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { photo, name, className, seats, price } = cls;


    const handleEnroll = classId => {

        const { className, photo, price, seats } = cls;
        const selectedClass = { className, price: parseFloat(price), seats: parseInt(seats), photo, email: user.email };

        axiosSecure.post('/enrolledClasses', selectedClass)
        .then(data => {
            if(data.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${className} by ${cls.name} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
            }
        })
        
    }

    return (
        <>
            {
                seats > 0 ? <div
                    className="mx-auto">
                    <div className="relative block bg-slate-300 rounded-lg shadow-lg h-[465px] w-72">
                        <div className="flex">
                            <div
                                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src={photo} className="w-full h-full" />
                            </div>
                        </div>
                        <div className="px-6 py-3">
                            <div className="flex flex-col justify-center items-center gap-1">
                                <h3 className="text-2xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold">{className}</h3>
                                <h4 className="font-medium mb-2 text-xl">{name}</h4>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p className="my-2 font-light">Available Seats: {seats}</p>
                                <p className="text-[#E80040]">$ {price}</p>
                            </div>
                            <div className="mt-3 flex justify-center items-center">
                                <button onClick={() => handleEnroll(cls._id)} className="uppercase px-4 py-2 rounded-md hover:bg-[#981b1bd9] bg-[#E80040] text-white font-bold">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                    :
                    <div
                        className="mx-auto">
                        <div className="relative block bg-red-300 rounded-lg shadow-lg h-[465px] w-72 opacity-60">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={photo} className="w-full h-full" />
                                </div>
                            </div>
                            <div className="px-6 py-3">
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <h3 className="text-2xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold">{className}</h3>
                                    <h4 className="font-medium mb-2 text-xl">{name}</h4>
                                </div>
                                <hr />
                                <div className="flex items-center justify-between">
                                    <p className="my-2 font-light">Available Seats: {seats}</p>
                                    <p className="text-[#E80040]">$ {price}</p>
                                </div>
                                <div className="mt-3 flex justify-center items-center">
                                    <button disabled className="uppercase px-4 py-2 rounded-md hover:bg-[#ff3939d9] bg-[#E80040] border-[#E80040] text-white font-bold">See Classes</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default ClassCard;