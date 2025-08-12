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
        <div className="grid grid-cols-3 gap-4">
            {data.map((item) => (
                <Card key={item.id}>
                    <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-40 object-cover"
                        />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
