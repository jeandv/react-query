import { type Product, productsApi } from "..";

interface GetProductsOptions {
  filterKey?: string;
}

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<Product[]> => {

  //await sleep(2);

  const urlFilter = filterKey ? `?category=${filterKey}` : '';

  const { data } = await productsApi.get<Product[]>('/products' + urlFilter);

  return data
};

export const getProductById = async (id: number): Promise<Product> => {

  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data
};