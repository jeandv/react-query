import { ProductList, useProducts } from ".."
import CustomLoader from "../components/CustomLoader";


export const CompleteListPage = () => {

  const { isLoading, isError, error, data: products, isFetching } = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {isLoading && <CustomLoader />}

      <ProductList products={products} />

    </div>
  )
}