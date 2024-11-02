import { useProducts } from "../context/ProductsProvider";

function ProductsPage() {
  const products = useProducts();
  console.log(products);

  return <div>ProductsPage</div>;
}

export default ProductsPage;
