/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import login from "../../assets/images/background/login.png";
import { AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in functionality
    };

    return (
        <div
            className="flex items-center justify-center md:justify-start md:ps-8 min-h-screen bg-cover"
            style={{
                backgroundImage: `url(${login})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

        >
            <div className="w-96 p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text" >Precision Martial</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="flex items-center justify-between mb-4">
                        <a href="#" className="text-sm text-gray-600">
                            Forgotten password?
                        </a>
                        <button
                            type="submit"
                            className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#E10020]"
                        >
                            Sign In
                        </button>
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
                    <p>Don't have an account? <Link to={'/sign-up'} className="text-[#E80040]">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
