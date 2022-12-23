import axios from "axios";
import { BASE_URL } from "../configs/config";

export const fetchProducts = async () => {
  try {
   
    setLoading(true); 
    const response = await axios.get(BASE_URL);
    if (response.status === 200 && response.data.length > 0) {
      setProducts(response.data);
      setLoading(false);
    } else if (response.status === 200 && response.data.length === 0) {
      setProducts([]);
      setLoading(false); 
    }

    return response.data;
  } catch (error) {
    console.log(error);
    setLoading(false);
    setProducts([]);
  }
};
