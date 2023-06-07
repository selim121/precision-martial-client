/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const InstructorCard = ({ instructor }) => {

    const { image, name, email, numberOfClassesTaken, classesTaken } = instructor;

    return (
        <>
            <div className="card w-96 bg-base-300 shadow-xl mx-auto">
                <figure className="px-5 pt-5">
                    <img src={image} className="rounded-xl h-[300px] w-full" />
                </figure>
                <div className="px-5 pt-5 space-y-2 mb-5">
                    <h2 className="text-2xl">{name}</h2>
                    <p className="text-[#E80040]">$ {email}</p>
                    <p className="font-semibold">Number of classes: <span className="text-[#E80040]">{numberOfClassesTaken}</span></p>
                    <div className="flex gap-2">
                        <p className="font-semibold">Classes: </p>
                        <ul className="flex gap-2">
                            {
                                classesTaken.map((classTaken) => <li className="font-light"> {classTaken} |</li>)
                            }
                        </ul>
                    </div>
                    <div className="text-center">
                        <button className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#E10020]">See classes</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstructorCard;