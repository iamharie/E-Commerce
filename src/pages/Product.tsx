import { useNavigate, useParams } from "react-router-dom";
import { useFetchPostIdQuery } from "../services/api";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, error, isLoading } = useFetchPostIdQuery(Number(id));

  console.log(error);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching product details.</div>;
  }
  if (!product) {
    return <div>No product found.</div>;
  }

  function handleBack() {
    navigate("..");
  }

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-96">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg text-gray-700">
            <strong>Category:</strong> {product?.category}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Description:</strong> {product.description}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Launch Date:</strong> {product.releaseDate}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Price:</strong> ${product.price}
          </p>

          <button
            className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={handleBack}
          >
            Home
          </button>
          <button
            className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded"
            disabled
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
