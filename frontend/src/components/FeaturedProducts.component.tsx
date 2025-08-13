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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-10/12 mx-auto">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="p-1 flex flex-col justify-between h-24">
                        <h3 className="text-base font-semibold text-gray-800 truncate">
                            {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm">${item.price}</p>
                        <button className="mt-2 bg-black text-white py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
