
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
        <div className="">

        </div>
    )
}