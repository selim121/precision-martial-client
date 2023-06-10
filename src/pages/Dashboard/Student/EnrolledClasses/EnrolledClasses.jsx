import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import sadImg from '../../../../assets/images/others/sad.png';

const EnrolledClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    

    const { data: enrolledClasses = [], refetch } = useQuery(['enrolledClasses'], async () => {
        const res = await axiosSecure.get(`/enrolledClasses/${user?.email}`);
        return res.data;
    })

    const handleDelete = id => {
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
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://precision-martial-server.vercel.app/enrolledClasses/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your Enrolled Class has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Enrolled Class is safe :)',
                    'error'
                )
            }
        })
    }

    return (
        <>
            <SectionTitle
                heading={'Your Enrolled Classes'}
                paragraph={'You can pay or remove classes'}
            ></SectionTitle>

            <div className="divider m-0 mb-5"></div>

            <div className="overflow-x-auto">
                {
                    enrolledClasses.length > 0 ?  <table className="table">
                    <thead className="bg-[#dc034158] text-black font-bold">
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses && enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id}>
                                <td>
                                    <label>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={enrolledClass.photo} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {enrolledClass.className}
                                </td>
                                <td className="text-end">
                                    $ {enrolledClass.price}
                                </td>
                                <td className="text-center">
                                    {enrolledClass.seats}
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${enrolledClass._id}`} className="bg-amber-400 px-4 py-2 rounded-lg hover:opacity-50">Pay</Link>
                                </td>
                                <td >
                                    <button onClick={() => handleDelete(enrolledClass._id)} className="bg-slate-200 p-2 rounded-lg hover:opacity-50">
                                        <AiFillDelete size={'30'} color="red" />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
                    : <div className="flex flex-col items-center justify-center mt-12">
                    <img src={sadImg} width='100px' />
                    <h3 className="font-light text-[#E80040]">Classes not found.</h3>
                    <h1 className="text-3xl">Enroll your valuable classes!</h1>
                </div>
                }
                
            </div>

        </>
    );
};

export default EnrolledClasses;