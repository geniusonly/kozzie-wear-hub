
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Tee",
    category: "Shirts",
    price: 29.99,
    image: "https://source.unsplash.com/800x600/?tshirt"
  },
  {
    id: 2,
    name: "Essential Hoodie",
    category: "Hoodies",
    price: 59.99,
    image: "https://source.unsplash.com/800x600/?hoodie"
  },
  {
    id: 3,
    name: "Wool Beanie",
    category: "Beanies",
    price: 24.99,
    image: "https://source.unsplash.com/800x600/?beanie"
  },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    <div className="py-24 px-8" id="products">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              <p className="font-medium">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
