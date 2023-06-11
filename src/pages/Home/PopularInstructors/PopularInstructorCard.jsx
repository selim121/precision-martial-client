/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMail } from 'react-icons/ai';

const PopularInstructorCard = ({ popularInstructor }) => {
  const { photo, name, email, totalStudents } = popularInstructor;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mx-auto">
      <motion.div
        className={`relative block shadow-xl rounded-lg  w-72 cursor-pointer bg-[#dc034158] ${
            isExpanded ? 'h-[270px]' : 'h-[270px]'
          }`}
        layoutId={popularInstructor.id}
        onClick={handleCardClick}
      >
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              className="px-6 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col justify-center items-center">
                <motion.h5
                  className="text-xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold mb-1"
                  layout
                >
                  {name}
                </motion.h5>
                <div className="flex justify-center items-start gap-1">
                  <AiOutlineMail color="E80040" />
                  <motion.h6
                    className="font-medium text-blue-800 mb-2 text-xs"
                    layout
                  >
                    {email}
                  </motion.h6>
                </div>
              </div>
              <hr />
              <div className="mt-3 flex flex-col items-center justify-center">
                <p className="my-2 font-light">Total Students: {totalStudents}</p>
                <button
                  className="uppercase px-4 py-2 hover:bg-[#E80040] rounded-lg font-bold text-white border-b-4 border-[#E80040]"
                  onClick={handleCardClick}
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-auto mt-4 pt-3 w-64 h-64"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `url(${photo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '12px',
                  transition: 'transform 0.3s',
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PopularInstructorCard;
