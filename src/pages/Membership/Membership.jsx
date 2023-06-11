import SectionTitle from "../../components/SectionTitle/SectionTitle";
import regular from '../../assets/images/gallery/regular.jpeg';
import pro from '../../assets/images/gallery/pro.jpeg';
import premium from '../../assets/images/gallery/premium.jpeg';
import './Membership.css';

const Membership = () => {
    return (
        <div className="membership-bg bg-fixed py-8">
            <div className="max-w-screen-lg mx-auto">
                <SectionTitle
                    heading={'Membership Packages'}
                    paragraph={'Join our training club and rise to a new challenge'}
                ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 gap-y-4 lg:gap-y-0 ">
                    <div className="block w-full md:w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <img className="rounded-t-lg w-full" src={regular} />
                        <div className="py-3 bg-black text-center">
                            <h2 className="text-3xl text-white uppercase">Beginner</h2>
                            <p className="text-slate-300 text-sm uppercase py-2">Training with best instructor</p>
                        </div>
                        <div className="pt-6">
                            <div className="grid grid-cols-2 text-center mb-3">
                                <p className="text-slate-500">Free Consultation:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">Fitness Assessment:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">24 Hour Support:</p>
                                <p className="text-red-500">No</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">Nutritional Plan:</p>
                                <p className="text-red-500">NO</p>
                            </div>
                            <hr />
                            <p className="text-[#E80040] text-center py-5">
                                <span className="text-3xl font-bold">$29* /</span>
                                <span className="uppercase text-xs"> Monthly</span>
                            </p>
                            <button className="uppercase text-white bg-[#E80040] w-full py-3 rounded-b-lg">Get Now</button>
                        </div>
                    </div>
                    <div className="block w-full md:w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <img className="rounded-t-lg w-full" src={pro} />
                        <div className="py-3 bg-[#E80040] text-center">
                            <h2 className="text-3xl text-white uppercase">Pro</h2>
                            <p className="text-slate-300 text-sm uppercase py-2">Training with best instructor</p>
                        </div>
                        <div className="pt-6">
                            <div className="grid grid-cols-2 text-center mb-3">
                                <p className="text-slate-500">Free Consultation:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">Fitness Assessment:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">24 Hour Support:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">Nutritional Plan:</p>
                                <p className="text-red-500">No</p>
                            </div>
                            <hr />
                            <p className="text-[#E80040] text-center py-5">
                                <span className="text-3xl font-bold">$39* /</span>
                                <span className="uppercase text-xs"> Monthly</span>
                            </p>
                            <button className="uppercase text-white bg-[#E80040] w-full py-3 rounded-b-lg">Get Now</button>
                        </div>
                    </div>
                    <div className="block w-full md:w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <img className="rounded-t-lg w-full" src={premium} />
                        <div className="py-3 bg-black text-center">
                            <h2 className="text-3xl text-white uppercase">Premium</h2>
                            <p className="text-slate-300 text-sm uppercase py-2">Training with best instructor</p>
                        </div>
                        <div className="pt-6">
                            <div className="grid grid-cols-2 text-center mb-3">
                                <p className="text-slate-500">Free Consultation:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">Fitness Assessment:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">24 Hour Support:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 text-center my-3">
                                <p className="text-slate-500">Nutritional Plan:</p>
                                <p className="text-green-500">Yes</p>
                            </div>
                            <hr />
                            <p className="text-[#E80040] text-center py-5">
                                <span className="text-3xl font-bold">$49* /</span>
                                <span className="uppercase text-xs"> Monthly</span>
                            </p>
                            <button className="uppercase text-white bg-[#E80040] w-full py-3 rounded-b-lg">Get Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;