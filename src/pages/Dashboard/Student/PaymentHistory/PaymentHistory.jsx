import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: ongoingClasses = [] } = useQuery(['ongoingClasses'], async () => {
        const res = await axiosSecure.get(`/ongoingClasses/${user?.email}`);
        return res.data;
    })

    return (
        <>
            <Helmet>
                <title>
                    Precision Martial - Payment History
                </title>
            </Helmet>
            <SectionTitle
                heading={'Your Payment History'}
                paragraph={'See, when and why you pay us'}
            ></SectionTitle>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-[#dc034158] text-black font-bold">
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Your Email</th>
                            <th>Total Price</th>
                            <th>Transaction Id</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-100">
                        {
                            ongoingClasses && ongoingClasses.map((ongoingClass, index) => <tr data-aos="fade-up"
                                data-aos-duration="2000" key={ongoingClass._id}>
                                <td>{index + 1}</td>
                                <td>{ongoingClass.className}</td>
                                <td>{ongoingClass.email}</td>
                                <td>{ongoingClass.price}</td>
                                <td>{ongoingClass.transactionId}</td>
                                <td>{ongoingClass.date.slice(0, 10)}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PaymentHistory;