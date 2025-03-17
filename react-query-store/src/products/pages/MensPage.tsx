import { ProductList, useProducts } from ".."
import CustomLoader from "../components/CustomLoader";

export const MensPage = () => {

  const { isLoading, data: products } = useProducts({ filterKey: "men's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {isLoading && <CustomLoader />}

      <ProductList products={products} />

    </div>
  )
}