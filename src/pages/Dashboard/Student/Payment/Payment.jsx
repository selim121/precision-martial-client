import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

    const [axiosSecure] = useAxiosSecure();
    const { id } = useParams();

    const { data: classPayment = [] } = useQuery(['classPayment'], async () => {
        const res = await axiosSecure.get(`/payment/${id}`);
        return res.data;
    })

    const { price } = classPayment;


    return (
        <>
            <SectionTitle
                heading={'Payment'}
                paragraph={'Process payment and start your class'}
            ></SectionTitle>
            <div className="divider"></div>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm classPayment={classPayment} price={price} ></CheckoutForm>
                </Elements>
            </div>
        </>
    );
};

export default Payment;