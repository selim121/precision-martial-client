/* eslint-disable react/prop-types */


const SectionTitle = ({heading, paragraph}) => {
    return (
        <div className="md:w-3/12 lg:w-5/12 mx-auto text-center py-8 bg-base-100 bg-opacity-70">
            <h3 className="text-3xl mb-2 bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text">{heading}</h3>
            <p className="font-light italic text-sm">{paragraph}</p>
        </div>
    );
};

export default SectionTitle;