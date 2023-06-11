/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';


const PopularClassCard = ({ popularClass, enrolledClasses, refetch }) => {

    const { photo, name, className, seats, price, totalEnroll } = popularClass;

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const isDisabled = enrolledClasses.some(singleClass => singleClass.id === popularClass._id);

    const handleEnroll = () => {

        if (user && user?.email) {
            const { _id, className, photo, price, seats, name, email } = popularClass;
            const selectedClass = { id: _id, className, price: parseFloat(price), seats: parseInt(seats), photo, email: user.email, instructorName: name, instructorEmail: email };

            axiosSecure.post('/enrolledClasses', selectedClass)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${className} by ${popularClass.name} added successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Sign In To Enroll Class!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sign in now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-in', { state: { from: location } });
                }
            })

        }

    }

    return (
        <>
            {
                (isDisabled || seats < 0 || isAdmin || isInstructor) ?
                
                <div
                        className="mx-auto">
                        <div className="relative block bg-red-300 rounded-lg shadow-lg h-[465px] w-72 opacity-60">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={photo} className="w-full h-full" />
                                </div>
                            </div>
                            <div className="px-6 py-3">
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <h3 className="text-2xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold">{className}</h3>
                                    <h4 className="font-medium mb-2 text-xl">{name}</h4>
                                </div>
                                <hr />
                                <div className="flex items-center justify-between">
                                    <p className="my-2 font-light">Available Seats: <span className="text-[#E80040]">{seats}</span></p>
                                    <p>Total Enroll: <span className="text-[#E80040]">{totalEnroll}</span></p>
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                    <p className="bg-[#E80040] bg-opacity-70 text-white px-4 py-2 rounded-lg">$ {price}</p>
                                    <button disabled className="uppercase px-4 py-2 rounded-md hover:bg-[#ff3939d9] bg-[#E80040] border-[#E80040] text-white font-bold">See Classes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                :
                <div
                    className="mx-auto">
                    <div className="relative block bg-slate-300 rounded-lg shadow-lg h-[465px] w-72">
                        <div className="flex">
                            <div
                                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src={photo} className="w-full h-full" />
                            </div>
                        </div>
                        <div className="px-6 py-3">
                            <div className="flex flex-col justify-center items-center gap-1">
                                <h3 className="text-2xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold">{className}</h3>
                                <h4 className="font-medium mb-2 text-xl">{name}</h4>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p className="my-2 font-light">Available Seats: <span className="text-[#E80040]">{seats}</span></p>
                                <p>Total Enroll: <span className="text-[#E80040]">{totalEnroll}</span></p>
                            </div>
                            <div className="mt-3 flex justify-between items-center">
                                <p className="bg-[#E80040] bg-opacity-70 text-white px-4 py-2 rounded-lg">$ {price}</p>
                                <button onClick={() => handleEnroll(popularClass._id)} className="uppercase px-4 py-2 rounded-md hover:bg-[#981b1bd9] bg-[#E80040] text-white font-bold">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default PopularClassCard;