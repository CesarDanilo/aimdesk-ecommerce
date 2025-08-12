interface FeaturedProductData {
    id: string;
    name: string;
    image: string;
    price: string;
}

interface ListFeaturedProductData {
    data: FeaturedProductData[];
}

export function FeaturedProducts({ data }: ListFeaturedProductData) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                    <div className="w-full h-56 overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="p-4 flex flex-col justify-between h-28">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                            {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm">${item.price}</p>
                        <button className="mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
