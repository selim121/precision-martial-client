/* eslint-disable react/prop-types */

const ClassCard = ({ cls }) => {

    const { image, name, instructor, availableSeats, price } = cls;

    return (
        <>
            {
                availableSeats > 0 ? <div className="card w-96 bg-base-300 shadow-xl mx-auto">
                    <figure className="px-5 pt-5">
                        <img src={image} className="rounded-xl h-[300px] w-full" />
                    </figure>
                    <div className="px-5 pt-5 space-y-2 mb-5">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="text-2xl">{name}</h2>
                            <p className="text-[#E80040]">$ {price}</p>
                        </div>
                        <p className="font-semibold">Available Seat: <span className="text-[#E80040]">{availableSeats}</span></p>
                        <p className="font-semibold">Instructor: {instructor}</p>
                        <div className="text-center">
                            <button className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#E10020]">Enroll Now</button>
                        </div>
                    </div>
                </div>
                    :
                    <div className="card w-96 bg-red-300 shadow-xl mx-auto">
                        <figure className="px-5 pt-5 opacity-50">
                            <img src={image} className="rounded-xl h-[300px] w-full" />
                        </figure>
                        <div className="px-5 pt-5 space-y-2 mb-5 opacity-50">
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="text-2xl">{name}</h2>
                                <p className="text-[#E80040]">$ {price}</p>
                            </div>
                            <p className="font-semibold">Available Seat: <span className="text-[#E80040]">{availableSeats}</span></p>
                            <p className="font-semibold">Instructor: {instructor}</p>
                            <div className="text-center">
                                <button disabled className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#E10020]">Enroll Now</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default ClassCard;