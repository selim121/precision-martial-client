import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaTransgenderAlt } from "react-icons/fa";


const InstructorHome = () => {

    const { user } = useAuth();

    const { data: profile = [] } = useQuery(['profile'], async () => {
        const res = await fetch(`http://localhost:4000/allUsers/${user?.email}`);
        return res.json();
    });

    const { name, email, gender, phoneNumber, photo } = profile;
    console.log(profile);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="">
                <img src={photo} width={'300px'} className="rounded-xl" />
            </div>
            <div className="space-y-3">
                <h1 className="text-5xl">{name}</h1>
                <div className="flex flex-row items-center gap-2">
                    <AiOutlineMail color="E80040" size={'20'} />
                    <p className="text-xl">{email}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <AiOutlinePhone color="E80040" size={'20'} />
                    <p className="text-xl">{phoneNumber}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <FaTransgenderAlt color="E80040" size={'20'} />
                    <p className="text-xl">{gender}</p>
                </div>

            </div>
        </div>
    );
};

export default InstructorHome;