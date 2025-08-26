import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { listProducts } from "../data/FeaturedProducts-list.data"

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
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    const filteredProducts = listProducts.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
        const matchesFilter = filter === "all" || p.category === filter
        return matchesSearch && matchesFilter
    })
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-10/12 mx-auto">
            {filteredProducts.map((produto) => (
                <Card key={produto.id} className="rounded-2xl shadow-md">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                        <img
                            src={produto.image}
                            alt={produto.name}
                            className="h-40 object-contain mb-3"
                        />
                        <h2 className="text-lg font-semibold mb-2">{produto.name}</h2>
                        <p className="text-gray-600 mb-4">R$ {produto.price}</p>
                        <div className="flex gap-2">
                            <Button className="rounded-xl">Adicionar ao Carrinho</Button>
                            <Button variant="secondary" className="rounded-xl">
                                Comprar
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
