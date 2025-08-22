import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { listProducts } from "../data/FeaturedProducts-list.data"

export default function AllProductsPage() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    const filteredProducts = listProducts.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
        const matchesFilter = filter === "all" || p.category === filter
        return matchesSearch && matchesFilter
    })

    return (
        <div className="min-h-screen p-6 flex flex-col items-center bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Mouse Pads</h1>

            {/* Filtros */}
            <div className="flex gap-3 mb-6 w-full max-w-2xl">
                <Input
                    placeholder="Buscar produto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="border rounded-md px-3 py-2"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">Todos</option>
                    <option value="gamer">Gamer</option>
                    <option value="profissional">Profissional</option>
                </select>
            </div>

            {/* Lista de produtos */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
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
        </div>
    )
}
