import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { AiFillDelete } from "react-icons/ai";

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/allUsers')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    // console.log(users);

    return (
        <div>
            <SectionTitle
                heading={'All Users'}
                paragraph={'Manage your all users'}
            ></SectionTitle>
            <div className="divider m-0"></div>
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
                                <td>Purple</td>
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