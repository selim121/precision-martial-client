import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from '../../../assets/images/students/sabbir.jpeg';
import img2 from '../../../assets/images/students/img2.webp';
import img3 from '../../../assets/images/students/img3.jpeg';
import { FaQuoteRight } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Review = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className="my-12 py-5 bg-[#030303f6]">
            <div className="text-center mt-5">
                <h1 className="text-4xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">
                <Typewriter
                        options={{
                            strings: ['Our Happy Students says'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 'natural',
                        }}
                    />
                </h1>
            </div>
            <div ref={sliderRef} className="keen-slider mt-5">
                <div className="keen-slider__slide number-slide1">
                    <div className="flex flex-col text-center">
                        <img src={img1} className="h-24 w-24 mx-auto rounded-full" />
                        <p className="text-white w-1/2 mx-auto mt-3">
                            I have been practicing martial arts for several years, and this website has become my go-to resource. It offers a wealth of information on various martial arts styles, techniques, and training tips.
                        </p>
                        <FaQuoteRight size={'30px'} color="#dd604acc" className="mx-auto my-5" />
                        <h3 className="text-2xl text-[#E80040] mb-5">Sabbir Al Noman</h3>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="flex flex-col text-center">
                        <img src={img2} className="h-24 w-24 mx-auto rounded-full" />
                        <p className="text-white w-1/2 mx-auto mt-3">
                            I recently stumbled upon this martial arts website, and I am impressed with its user-friendly interface. The layout is clean and intuitive, making it easy to navigate through the different sections.
                        </p>
                        <FaQuoteRight size={'30px'} color="#dd604acc" className="mx-auto my-5" />
                        <h3 className="text-2xl text-[#E80040] mb-5">Shakil Ahmed</h3>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <div className="flex flex-col text-center">
                        <img src={img3} className="h-24 w-24 mx-auto rounded-full" />
                        <p className="text-white w-1/2 mx-auto mt-3">
                            As a beginner in the world of martial arts, this website has been a game-changer for me. It provides step-by-step tutorials, beginner-friendly training plans, and insightful articles that have guided me in my martial arts journey.
                        </p>
                        <FaQuoteRight size={'30px'} color="#dd604acc" className="mx-auto my-5" />
                        <h3 className="text-2xl text-[#E80040] mb-5">Motasim Billah</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;