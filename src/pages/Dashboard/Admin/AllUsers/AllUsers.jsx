import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const AllUsers = () => {
    return (
        <div>
            <SectionTitle
                heading={'All Users'}
                paragraph={'Manage your all users'}
            ></SectionTitle>
            <div className="divider m-0"></div>
            <p className="text-6xl text-red-600">All Users here</p>
        </div>
    );
};

export default AllUsers;