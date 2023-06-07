import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/allUsers/admin/${user?.email}`);
                return res.data.admin;
            }
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;