import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import sadImg from '../../../../assets/images/others/sad.png';
import useAuth from "../../../../hooks/useAuth";
import Swal from 'sweetalert2';
import { useState } from "react";
import { useForm } from "react-hook-form";

const MyClasses = () => {

    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [selectClass, setSelectClass] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const { data: myClasses = [] } = useQuery(['myClasses'], async () => {
        const res = await fetch(`https://precision-martial-server.vercel.app/classes/${user?.email}`);
        return res.json();
    });


    const handleIdAndModal = id => {
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
                fetch(`https://precision-martial-server.vercel.app/classes/update/${selectClass}`, {
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

    

    return (
        <div>
            <SectionTitle
                heading={'My Classes'}
                paragraph={'Here is my all valuable classes'}
            ></SectionTitle>
            <hr />
            {
                myClasses ? myClasses.map(myClass => <div key={myClass._id} className="p-3 mt-8 bg-base-200">
                    <div className="flex justify-center lg:justify-start flex-col lg:flex-row  gap-4">
                        <img src={myClass.photo} className="w-80 h-96 lg:w-56 lg:h-60 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-semibold uppercase">{myClass.className}</h1>
                            <p className="py-2">Available seats: {myClass.seats}</p>
                            {/* TODO: Implement total enrolled */}
                            <p className="py-1">Total Enrolled: 0</p>

                            <h3 className="text-xl font-semibold">Status: <span className=
                                {
                                    myClass.status === 'approved' ? 'font-light text-green-700' : myClass.status === 'deny' ? 'font-light text-red-600' : 'font-light text-orange-400'
                                }
                            >
                                {
                                    myClass.status === 'approved' ? 'Approved' : myClass.status === 'deny' ? 'Denied' : 'Pending'
                                }
                            </span></h3>
                            <button onClick={() => handleIdAndModal(myClass._id)} className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mt-3" type="button" >
                                Update
                            </button>

                            {
                                showModal ? (
                                    <>
                                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                                        <h3 className="text-3xl font=semibold">Update your class</h3>
                                                        <button
                                                            className="bg-transparent border-0 text-black float-right"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                                                x
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="relative p-6 flex-auto">
                                                        <form onSubmit={handleSubmit(handleUpdate)}>
                                                            <div className="grid grid-cols-1 md:grid-cols-2">
                                                                <div className="form-control me-4">
                                                                    <label className="label">
                                                                        <span className="label-text font-semibold">Instructor Name</span>
                                                                    </label>
                                                                    <input type="text" className="input input-bordered" {...register("name", { required: true })} />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text font-semibold">Instructor Email</span>
                                                                    </label>
                                                                    <input type="email" className="input input-bordered" {...register("email", { required: true })} />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2">
                                                                <div className="form-control me-4">
                                                                    <label className="label">
                                                                        <span className="label-text font-semibold">Class Name</span>
                                                                    </label>
                                                                    <input type="text" placeholder="Class name" className="input input-bordered" {...register("className", { required: true })} />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text font-semibold">Class Image</span>
                                                                    </label>
                                                                    <input type="file" id="photo" {...register("photo")} />
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-1 md:grid-cols-2">
                                                                <div className="form-control me-4">
                                                                    <label className="label">
                                                                        <span className="label-text font-semibold">Price</span>
                                                                    </label>
                                                                    <input type="text" placeholder="Enter price" className="input input-bordered" {...register("price", { required: true })} />
                                                                </div>
                                                                <div className="form-control me-4">
                                                                    <label className="label">
                                                                        <span className="label-text font-semibold">Available Seats</span>
                                                                    </label>
                                                                    <input type="text" placeholder="Available seats" className="input input-bordered" {...register("seats", { required: true })} />
                                                                </div>
                                                            </div>
                                                            <div className="form-control mt-4">
                                                                <input className="py-3 uppercase font-bold text-xl rounded-xl border-0 mt-2 bg-[#dc034158] cursor-pointer" type="submit" value="Save" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null
                            }
                        </div>

                        {
                            myClass.status === 'deny' && <div className="text-center bg-white ">
                                <div className="p-6">
                                    <h3 className="text-2xl border-b-4 border-[#E80040]">Feedback</h3>
                                    <p className="">
                                        {myClass.feedback}
                                    </p>
                                </div>
                            </div>
                        }
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