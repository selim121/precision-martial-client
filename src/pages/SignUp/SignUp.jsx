import login from "../../assets/images/background/login.png";
import { AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import { toast } from "react-hot-toast";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { setLoading, createUser, updateUserProfile, signInWithGoogle } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const password = watch('password');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    // user sign up
    const onSubmit = (data) => {
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
                const { name, email, password, confirmPassword, gender, phoneNumber } = data;
                const newUser = { name, email, password, confirmPassword, gender, phoneNumber, photo: imageUrl }

                fetch('https://precision-martial-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate(from, { replace: true })
                        }
                    })

                createUser(data.email, data.password)
                    .then(() => {
                        updateUserProfile(data.name, imageUrl)
                            .then(() => {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'Awesome',
                                    title: 'Signup successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                                navigate(from, { replace: true });
                            })
                            .catch(err => {
                                setLoading(false)
                                console.log(err.message)
                                toast.error(err.message)
                            })
                    })
                    .catch(err => {
                        setLoading(false)
                        console.log(err.message)
                        toast.error(err.message)
                    })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    };

    // google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-start md:ps-8 min-h-[130vh] md:min-h-screen bg-cover"
            style={{
                backgroundImage: `url(${login})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

        >
            <div className="w-full p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text" >Precision Martial</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your name"
                                {...register("name", { required: "name is required" })}
                            />
                            {errors.email && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-1">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : ""
                                        }`}
                                    placeholder="Enter your password"
                                    {...register("password", { required: "Password is required" })}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-2 right-2 focus:outline-none"
                                >
                                    {showPassword ? <AiFillEye size={'25px'} /> : <AiFillEyeInvisible size={'25px'} />}
                                </button>
                            </div>


                            {errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block mb-1">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : ""
                                        }`}
                                    placeholder="Enter your password"
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required", validate: (value) =>
                                            value === password || "Passwords do not match",
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute top-2 right-2 focus:outline-none"
                                >
                                    {showConfirmPassword ? <AiFillEye size={'25px'} /> : <AiFillEyeInvisible size={'25px'} />}
                                </button>

                                {errors.confirmPassword && (
                                    <p className="text-red-500">{errors.confirmPassword.message}</p>
                                )}
                            </div>


                            {errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4 flex items-center gap-8">
                            <label htmlFor="gender">Gender:</label>
                            <select id="gender" {...register("gender")}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your phone number"
                                {...register("phoneNumber", {
                                    required: "Phone Number is required",
                                    pattern: {
                                        value: /^[0-9]{11}$/,
                                        message: "Invalid phone number",
                                    },
                                })}
                            />
                            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
                        </div>
                    </div>

                    <div className="mb-4 flex gap-2">
                        <label htmlFor="photo">Photo</label>
                        <input type="file" id="photo" {...register("photo")} />
                    </div>

                    <div className="text-center">
                        <button className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#E10020]" type="submit">Register</button>
                    </div>
                </form>
                <div className="divider">OR</div>

                <div className="flex items-center justify-center">
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-[#E80040] text-white font-bold hover:bg-[#E10020] rounded-lg mr-4"
                        onClick={handleGoogleSignIn}
                    >
                        <AiFillGoogleCircle size={'20px'} />
                        Sign in with Google
                    </button>
                    {/* Add your Google sign-in button implementation here */}
                </div>
                <div className="pt-4 flex items-center justify-center">
                    <p>Already have an account? <Link to={'/sign-in'} className="text-[#E80040]">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;


