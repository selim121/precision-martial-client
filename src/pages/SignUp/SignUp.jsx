import login from "../../assets/images/background/login.png";
import { AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const passwordRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleGoogleSignIn = () => {

    };

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
                                    type="password"
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
                                    type="password"
                                    id="confirmPassword"
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : ""
                                        }`}
                                    placeholder="Enter your password"
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required", validate: (value) =>
                                            value === passwordRef.current.value || "Passwords do not match",
                                    })}
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
                                        value: /^[0-9]{10}$/,
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


