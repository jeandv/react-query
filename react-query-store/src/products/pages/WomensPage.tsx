import { ProductList, useProducts } from ".."
import CustomLoader from "../components/CustomLoader";

export const WomensPage = () => {

  const { isLoading, data: products } = useProducts({ filterKey: "women's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && <CustomLoader />}

      <ProductList products={products} />

    </div>
  )
}