import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";
import useAdmin from "../../../../hooks/useAdmin";


const ManageClasses = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectClass, setSelectClass] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await fetch('https://precision-martial-server.vercel.app/classes');
        return res.json();
    });

    const handleApproved = allClass => {
        fetch(`https://precision-martial-server.vercel.app/classes/approved/${allClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Approved Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Ok'
                    })
                    refetch();
                }
            })
    }
    const handleDeny = allClass => {
        fetch(`https://precision-martial-server.vercel.app/classes/deny/${allClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Denied Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Ok'
                    })
                    refetch();
                }
            })
    }

    const handleFeedback = id => {
        setSelectClass(id);
        setShowModal(true);
    }



    const handleUpdate = data => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, send it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://precision-martial-server.vercel.app/classes/${selectClass}/feedback`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Feedback Send Successfully',
                                icon: 'Success',
                                confirmButtonText: 'Ok'
                            })
                            reset();
                            setShowModal(false);
                        }
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })


    };

    const [isAdminLoading] = useAdmin();

    return (
        <>
            {
                isAdminLoading && <div>
                    <Helmet>
                        <title>
                            Precision Martial - Manage Classes
                        </title>
                    </Helmet>
                    <SectionTitle
                        heading={'Manage Classes'}
                    ></SectionTitle>
                    <hr />
                    <div className="mt-5">
                        {
                            allClasses && allClasses.map(allClass => <div data-aos="fade-up"
                                data-aos-duration="2000" key={allClass._id} className="p-3 mt-12 bg-base-200">
                                <div className="flex justify-center lg:justify-start flex-col lg:flex-row  gap-4">
                                    <img src={allClass.photo} className="w-80 h-96 lg:w-56 lg:h-60 rounded-lg shadow-2xl" />
                                    <div className="space-y-1">
                                        <h1 className="text-4xl font-semibold uppercase">{allClass.className}</h1>
                                        <h3 className="text-xl font-semibold">Instructor: <span className="font-light">{allClass.name}</span></h3>
                                        <h3 className="text-xl font-semibold">Email: <span className="font-light">{allClass.email}</span></h3>
                                        <h3 className="text-xl font-semibold">Available seats: <span className="font-light">{allClass.seats}</span></h3>
                                        <h3 className="text-xl font-semibold">Price: <span className="font-light">$ {allClass.price}</span></h3>

                                        <h3 className="text-xl font-semibold">Status: <span className=
                                            {
                                                allClass.status === 'approved' ? 'font-light text-green-700' : allClass.status === 'deny' ? 'font-light text-red-600' : 'font-light text-orange-400'
                                            }
                                        >
                                            {
                                                allClass.status === 'approved' ? 'Approved' : allClass.status === 'deny' ? 'Denied' : 'Pending'
                                            }
                                        </span></h3>
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center mx-auto">

                                        {
                                            (allClass.status === 'approved' || allClass.status === 'deny') ? <button className="px-2 py-3 bg-green-700 rounded-md text-white opacity-40" disabled>Approved</button>
                                                :
                                                <button onClick={() => handleApproved(allClass)} className="px-2 py-3 bg-green-700 rounded-md text-white hover:opacity-40">Approved</button>
                                        }


                                        {
                                            (allClass.status === 'approved' || allClass.status === 'deny') ? <button className="px-2 py-3 bg-red-500 rounded-md text-white opacity-40" disabled>Deny</button>
                                                :
                                                <button onClick={() => handleDeny(allClass)} className="px-2 py-3 bg-red-500 rounded-md text-white hover:opacity-40">Deny</button>
                                        }

                                        <button onClick={() => handleFeedback(allClass._id)} className="px-2 py-3 bg-cyan-500 rounded-md text-white hover:opacity-40">Send Feedback</button>

                                        {showModal ? (
                                            <>
                                                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                                                <h3 className="text-3xl font=semibold">Your Feedback</h3>
                                                            </div>
                                                            <div className="relative p-6 flex-auto">
                                                                <form onSubmit={handleSubmit(handleUpdate)} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-2 w-full">
                                                                    <textarea placeholder="Write here..." className="textarea textarea-bordered textarea-lg w-full max-w-xs" {...register("feedback")} ></textarea>
                                                                    <div className="flex justify-center">
                                                                        <input className="cursor-pointer mt-3 px-5 py-3 bg-cyan-500 rounded-md text-white" type="submit" value="SEND" />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : null}

                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default ManageClasses;