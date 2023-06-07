import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/allUsers/instructor/${user?.email}`);
                return res.data.instructor;
            }
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;