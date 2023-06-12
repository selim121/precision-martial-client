import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddClass = () => {

    const { user, setLoading } = useAuth();
    const navigate = useNavigate();

    const { data: profile = [] } = useQuery(['profile'], async () => {
        const res = await fetch(`https://precision-martial-server.vercel.app/allUsers/${user?.email}`);
        return res.json();
    });

    const { register, handleSubmit, reset } = useForm({
        values: {
            name: profile.name,
            email: profile.email
        }
    });

    const onSubmit = data => {
        const image = data.photo[0];
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_Token
            }`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then((imageData) => {
                const imageUrl = imageData.data.display_url;
                const { name, email, className, price, seats } = data;
                const newUser = { name, email, className, price: parseFloat(price), seats: parseInt(seats), photo: imageUrl }

                fetch('https://precision-martial-server.vercel.app/classes', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate('/dashboard/my-classes')
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Class Add Successfully!',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <div>
            <Helmet>
                <title>
                    Precision Martial - Add Class
                </title>
            </Helmet>
            <SectionTitle
                heading={'Add A Class'}
                paragraph={'Martial is a way of life, not just a sport'}
            ></SectionTitle>
            <hr />

            <div className="my-8 md:mx-5 bg-base-300 px-5 py-12 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control me-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input readOnly type="text" className="input input-bordered" {...register("name", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input readOnly type="email" className="input input-bordered" {...register("email", { required: true })} />
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
                        <input className="py-3 uppercase font-bold text-xl rounded-xl border-0 mt-2 bg-[#dc034158] cursor-pointer" type="submit" value="Add Class" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddClass;