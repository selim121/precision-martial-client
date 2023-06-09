import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();
    
    const { data: enrolledClasses = [] } = useQuery(['enrolledClasses'], async () => {
        const res = await axiosSecure.get(`/enrolledClasses/${user?.email}`);
        return res.data;
    })

    console.log(enrolledClasses);

    return (
        <>
            <SectionTitle
                heading={'Your Enrolled Classes'}
                paragraph={'You can pay or remove classes'}
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
                                <button className="bg-slate-200 px-4 py-2 rounded-lg hover:opacity-50">
                                        Pay
                                    </button>
                                </td>
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

        </>
    );
};

export default EnrolledClasses;