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
        <div className="grid grid-cols-3">
            {data.map((item) => (
                <Card
                    key={item.id}
                    className="w-10/12 mx-auto"
                >
                    <CardContent className="p-2">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded"
                        />
                    </CardContent>
                    <CardHeader className="p-2">
                        <CardTitle className="text-sm">{item.name}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
