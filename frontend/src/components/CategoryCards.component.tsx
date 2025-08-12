interface DataObject {
    id: string;
    image: string;
    name: string;
}

interface CategoryCardsProps {
    data: DataObject[];
}

export function CategoryCards({ data }: CategoryCardsProps) {
    return (
        <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="relative overflow-hidden rounded-xl w-full aspect-[4/3] group cursor-pointer"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60"></div>
                    <h3 className="absolute bottom-0 left-0 w-full p-3 text-base font-semibold text-white text-center transition-transform duration-500 group-hover:translate-y-[-4px]">
                        {item.name}
                    </h3>
                </div>
            ))}
        </div>
    );
}
