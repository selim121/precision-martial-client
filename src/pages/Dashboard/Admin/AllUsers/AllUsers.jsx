import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://precision-martial-server.vercel.app/allUsers');
        return res.json();
    });

    const handleMakeAdmin = user => {
        fetch(`https://precision-martial-server.vercel.app/allUsers/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is now admin.`)
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`https://precision-martial-server.vercel.app/allUsers/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is now instructor.`)
                }
            })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://precision-martial-server.vercel.app/allUsers/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${user.name} has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <SectionTitle
                heading={'All Users'}
                paragraph={'Manage your all users'}
            ></SectionTitle>
            <div className="divider m-0 mb-5"></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-[#dc034158] text-black font-bold">
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user, index) => <tr data-aos="fade-up"
                            data-aos-duration="1000" key={user._id}>
                                <td>
                                    <label>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>

                                <td>{
                                    (user.role === 'admin' || user.role === 'instructor') ? <button className="bg-green-700 p-1 opacity-50 rounded-md text-white" disabled>Admin</button>
                                    :
                                    (user.role === 'admin') ? <button className="bg-green-700 p-1 opacity-50 rounded-md text-white" disabled>Admin</button>
                                        : <button onClick={() => handleMakeAdmin(user)} className=" bg-green-700 p-1 rounded-md text-white">Admin</button>
                                }
                                </td>
                                <td>{
                                    (user.role === 'instructor') ? <button className="bg-green-700 p-1 opacity-50 rounded-md text-white" disabled>Instructor</button>
                                    :
                                    (user.role === 'admin') ? 'admin'
                                    : <button onClick={() => handleMakeInstructor(user)} className="bg-green-700 p-1 rounded-md text-white">Instructor</button>
                                }
                                </td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' : user.role === 'instructor' ? 'Instructor' : ''
                                    }
                                </td>
                                <td >
                                    <button onClick={() => handleDelete(user)} className="bg-slate-200 p-2 rounded-lg hover:opacity-50">
                                        <AiFillDelete size={'30'} color="red" />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;