import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";

const useCart = () => {
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://sports-genius-hub-server-zesanahmed.vercel.app/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
