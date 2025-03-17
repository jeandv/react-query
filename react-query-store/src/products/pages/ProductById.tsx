import { useParams } from "react-router-dom";
import { ProductCard } from ".."
import CustomLoader from "../components/CustomLoader";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";

export const ProductById = () => {

  const { id } = useParams();

  const { isLoading, product } = useProduct({ id: Number(id) });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {isLoading && <CustomLoader />}

      {product && (<ProductCard product={product} fullDescription />)}

    </div>
  )
}