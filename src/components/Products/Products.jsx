import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchProducts } from "../../actions/product.action";
import SingleProduct from "../SingleProduct/SingleProduct";
import { fetchAllProducts } from "../../Redux/reducers/product.reducer";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productReducer
  );


  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
    dispatch(fetchAllProducts());
    }

    return () => {
      isMounted = false;
    };
  }, []);

  if(error!==null){
    return <p className="text-red-500 text-2xl">An arror occured</p>
  }

  if(loading==='pending'){

    return <p className="text-green-500 text-3xl">loading...</p>
  }

  if(products.length===0){
    return <p className="text-red-500 text-2xl">
      No products found
    </p>

  }

  return (
    <div className="grid justify-center w-[100%] grid-cols-4 auto-rows-[420px] gap-[20px] place-items-center">
      {products?.map((prod,index) => 
         <SingleProduct key={index} prod={prod} />
      )}
    </div>
  );
};

export default Products;
