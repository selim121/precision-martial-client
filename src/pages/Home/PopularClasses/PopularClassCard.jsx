/* eslint-disable react/prop-types */

const PopularClassCard = ({ cls }) => {

    const { image, name, instructor, availableSeats, price } = cls;

    return (
        <>
            {
                availableSeats > 0 ? <div
                    className="mx-auto">
                    <div className="relative block bg-slate-300 rounded-lg shadow-lg h-[465px] w-72">
                        <div className="flex">
                            <div
                                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src={image} className="w-full h-full" />
                            </div>
                        </div>
                        <div className="px-6 py-3">
                            <div className="flex flex-col justify-center items-center gap-1">
                                <h3 className="text-2xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold">{name}</h3>
                                <h4 className="font-medium mb-2 text-xl">{instructor}</h4>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between">
                                <p className="my-2 font-light">Available Seats: {availableSeats}</p>
                                <p className="text-[#E80040]">$ {price}</p>
                            </div>
                            <div className="mt-3 flex justify-center items-center">
                                <button className="uppercase px-4 py-2 rounded-md hover:bg-[#ff3939d9] bg-[#E80040] border-[#E80040] text-white font-bold">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                    :
                    <div
                        className="mx-auto">
                        <div className="relative block bg-red-300 rounded-lg shadow-lg h-[465px] w-72 opacity-60">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 w-64 h-64"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={image} className="w-full h-full" />
                                </div>
                            </div>
                            <div className="px-6 py-3">
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <h3 className="text-2xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold">{name}</h3>
                                    <h4 className="font-medium mb-2 text-xl">{instructor}</h4>
                                </div>
                                <hr />
                                <div className="flex items-center justify-between">
                                    <p className="my-2 font-light">Available Seats: {availableSeats}</p>
                                    <p className="text-[#E80040]">$ {price}</p>
                                </div>
                                <div className="mt-3 flex justify-center items-center">
                                    <button disabled className="uppercase px-4 py-2 rounded-md hover:bg-[#ff3939d9] bg-[#E80040] border-[#E80040] text-white font-bold">See Classes</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default PopularClassCard;