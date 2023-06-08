/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";


const ClassUpdate = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" className="input input-bordered" {...register("name", { required: true })} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="email" className="input input-bordered" {...register("email", { required: true })} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class name" className="input input-bordered" {...register("className", { required: true })} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input type="file" id="photo" {...register("photo")} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="text" placeholder="Enter price" className="input input-bordered" {...register("price", { required: true })} />
                </div>
                <div className="form-control me-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats</span>
                    </label>
                    <input type="text" placeholder="Available seats" className="input input-bordered" {...register("seats", { required: true })} />
                </div>
            </div>
            <div className="form-control mt-4">
                <input className="py-3 uppercase font-bold text-xl rounded-xl border-0 mt-2 bg-[#dc034158] cursor-pointer" type="submit" value="Update Class" />
            </div>
        </form>
    );
};

export default ClassUpdate;