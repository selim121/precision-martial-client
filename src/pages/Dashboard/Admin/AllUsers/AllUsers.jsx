import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { toast } from "react-hot-toast";

const AllUsers = () => {

    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:4000/allUsers');
        return res.json();
    });

    const handleMakeAdmin = user => {
        fetch(`http://localhost:4000/allUsers/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                toast.success(`${user.name} is now admin.`)
            }
        })
    }

    // console.log(users);

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
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user, index) => <tr key={user._id}>
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
                                    user.role === 'admin' ? 'admin' 
                                        : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield></FaUserShield></button>
                                    }</td>
                                <td >
                                    <button className="bg-slate-200 p-2 rounded-lg hover:opacity-50">
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