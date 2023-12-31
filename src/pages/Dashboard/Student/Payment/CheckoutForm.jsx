/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from 'sweetalert2';
import { useLocation, useNavigate, useParams } from "react-router-dom";


const CheckoutForm = ({ price, classPayment, refetch }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || `/dashboard/ongoing-classes/${user?.email}`;

    const { id } = useParams();
    const enrolledClassId = id;
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price])

    const handleSeatsUpdate = () => {
        fetch(`https://precision-martial-server.vercel.app/confirmPayment/update/${classPayment.id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(() => {
                // console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    const handleTotalStudent = () => {
        fetch(`https://precision-martial-server.vercel.app/instructorUpdate/${classPayment.instructorEmail}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(() => {
                // console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        else {
            // console.log('payment intent',paymentIntent);
        }
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                id: id,
                classId: classPayment.id,
                className: classPayment.className,
                photo: classPayment.photo,
                instructorName: classPayment.instructorName,
                instructorEmail: classPayment.instructorEmail,
                date: new Date()
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        fetch(`https://precision-martial-server.vercel.app/enrolledClasses/${enrolledClassId}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    handleSeatsUpdate();
                                    handleTotalStudent();
                                    refetch();
                                }
                            })
                        navigate(from, { replace: true });

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Payment successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }
    }

    return (
        <>
            <form className="mx-12 p-8 bg-[#faf6ff]" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center">
                    <button className='bg-[#dc034158] px-5 py-2 rounded-lg uppercase font-semibold hover:opacity-70  mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            <div className="text-center mt-5">
                {
                    cardError && <p className='text-red-600'>{cardError}</p>
                }
                {
                    transactionId && <p className='text-green-600'>Transaction complete with transactionId: {transactionId}</p>
                }
            </div>
        </>
    );
};

export default CheckoutForm;