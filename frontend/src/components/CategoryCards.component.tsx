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
        <div className="grid grid-cols-3 gap-0.5 w-9/12 ">
            {data.map((item) => (
                <Card
                    key={item.id}
                    className="w-9/12 mx-auto border-none shadow-none bg-transparent relative overflow-hidden"
                >
                    <CardContent className="p-0">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                        />
                    </CardContent>

                    <CardHeader className="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50">
                        <CardTitle className="text-lg text-white">
                            {item.name}
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
