import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const AdminHome = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: myProfile = [] } = useQuery(['myProfile'], async () => {
        const res = await axiosSecure.get(`/allUsers/${user?.email}`);
        return res.data;
    })

    const { name, email, phoneNumber, photo, gender } = myProfile;

    return (
        <>
            <SectionTitle
                heading='My Profile'
            ></SectionTitle>
            <div className="bg-[#dc034158]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="zoom-in-left" data-aos-duration="1000"  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img className="rounded-xl shadow-md" src={photo} alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="2000" className="">
                        <h3 className="text-4xl font-bold">{name}</h3>
                        <h5 className="text-xl">Email: <span className="font-light">{email}</span></h5>
                        <h5 className="text-xl">Phone: <span className="font-light">{phoneNumber}</span></h5>
                        <h5 className="text-xl">Gender: <span className="font-light">{gender}</span></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;