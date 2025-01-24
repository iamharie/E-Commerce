// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFetchPostsQuery } from "../services/api";
// interface Product {
//   id: number;
//   category: string;
//   brand: string;
//   name: string;
//   price: number;
//   description: string;
//   releaseDate: string;
// }
const Home = () => {
  const { data: Product = [], error, isLoading } = useFetchPostsQuery();
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <h2 className="text-center text-red-500">Something went wrong...</h2>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Product.map((el) => (
          <div
            key={el.id}
            className="bg-slate-200 shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {el.category}
              </h2>
              <h3 className="text-md text-gray-600">{el.brand}</h3>
              <h2 className="text-xl font-bold text-gray-900">{el.name}</h2>
              <h2 className="text-lg text-gray-700">${el.price}</h2>

              <button
                onClick={() => alert("welcome")}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Add to cart
              </button>
              <button
                onClick={() => handleProductClick(el.id)}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
