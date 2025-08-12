import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";

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
        <div className="grid grid-cols-3 gap-0.5 w-9/12">
            {data.map((item) => (
                <Card
                    key={item.id}
                    className="w-9/12 mx-auto border-none rounded-2xl shadow-none bg-transparent relative overflow-hidden"
                >
                    <CardContent className="p-0 rounded-2xl">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-2xl"
                        />
                    </CardContent>

                    <CardHeader className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-50 rounded-b-2xl">
                        <CardTitle className="text-lg text-white">
                            {item.name}
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
