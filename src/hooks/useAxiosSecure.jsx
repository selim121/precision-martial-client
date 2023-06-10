import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useEffect } from 'react';


const axiosSecure = axios.create({
  baseURL: 'https://precision-martial-server.vercel.app',
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate(from, { replace: true })
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, from]);

  return [axiosSecure];
};

export default useAxiosSecure;