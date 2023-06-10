import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/UseAxiosSecure';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const OngoingClasses = () => {

    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: ongoingClasses = [] } = useQuery(['ongoingClasses'], async () => {
        const res = await axiosSecure.get(`/ongoingClasses/${user?.email}`);
        return res.data;
    })

    return (
        <>
            <SectionTitle
                heading={'Your Ongoing classes'}
                paragraph={'Start today, success waiting for you'}
            ></SectionTitle>
            <div className="divider"></div>
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
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                    <tbody className='bg-slate-300'>
                        {
                            ongoingClasses && ongoingClasses.map((ongoingClass, index) => <tr key={ongoingClass._id}>
                                <td>
                                    <label>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-xl">
                                            <img src={ongoingClass.photo} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {ongoingClass.className}
                                </td>
                                <td>
                                    $ {ongoingClass.instructorName}
                                </td>
                                <td>
                                    {ongoingClass.instructorEmail}
                                </td>
                                <td>
                                    {
                                        ongoingClass.date
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default OngoingClasses;