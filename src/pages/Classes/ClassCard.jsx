/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import useAxiosSecure from "../../hooks/UseAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


const ClassCard = ({ cls, enrolledClasses, refetch }) => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { photo, name, className, seats, price } = cls;
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();

    const isDisabled = enrolledClasses.some(singleClass => singleClass.id === cls._id);

    const handleEnroll = classId => {

        if (user && user?.email) {
            const { _id, className, photo, price, seats, name, email } = cls;
            const selectedClass = { id: _id, className, price: parseFloat(price), seats: parseInt(seats), photo, email: user.email, instructorName: name, instructorEmail: email };

            axiosSecure.post('/enrolledClasses', selectedClass)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch();
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
        else {
            Swal.fire({
                title: 'Please Sign In To Enroll Class!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sign in now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-in', { state: { from: location } });
                }
            })

        }

    }


    return (
        <>
            {
                isInstructorLoading || isAdminLoading ? '' : <div data-aos="zoom-in-up"
                data-aos-duration="2000"
                className="mx-auto">
                <div className={`relative block ${seats <= 0 ? 'bg-red-300 opacity-60' : 'bg-slate-300'} rounded-lg   shadow-lg h-[465px] w-72`}>
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
                            <button onClick={() => handleEnroll(cls._id)} disabled={isAdmin || isInstructor || isDisabled || seats <= 0} className="uppercase px-4 py-2 rounded-md bg-[#E80040] border-[#E80040] text-white font-bold disabled:opacity-50">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
            }

            {/* {
                !isAdminLoading && !isInstructorLoading && <>
                    {
                        (isDisabled || seats < 0 || isAdmin || isInstructor) ?
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                className="mx-auto">
                                <div className="relative block bg-red-300 rounded-lg opacity-60 shadow-lg h-[465px] w-72">
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
                                            <button disabled className="uppercase px-4 py-2 rounded-md bg-[#E80040] border-[#E80040] text-white font-bold opacity-50">Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
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
                    }
                </>
            } */}
        </>

    );
};

export default ClassCard;