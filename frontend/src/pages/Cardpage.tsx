import { useState } from "react"
import { listProducts } from "../data/FeaturedProducts-list.data"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Minus, Plus, Trash2 } from "lucide-react"

type Produto = {
    id: number
    nome: string
    preco: number
    quantidade: number
    imagem: string
}

export default function CartPage() {
    const [produtos, setProdutos] = useState<Produto[]>(
        listProducts.map((p, i) => ({
            id: i,
            nome: p.name,
            preco: parseFloat(p.price), // 👈 converte string para número
            quantidade: 1,
            imagem: p.image,
        }))
    )

    const atualizarQuantidade = (id: number, delta: number) => {
        setProdutos((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, quantidade: Math.max(1, p.quantidade + delta) } : p
            )
        )
    }

    const removerProduto = (id: number) => {
        setProdutos((prev) => prev.filter((p) => p.id !== id))
    }

    const subtotal = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0)
    const frete = subtotal > 0 ? 20 : 0
    const total = subtotal + frete

    return (
        <div className="flex justify-center min-h-screen bg-gray-50 py-10 px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Lista de Produtos */}
                <div className="lg:col-span-2 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Carrinho</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {produtos.length > 0 ? (
                                produtos.map((produto) => (
                                    <div
                                        key={produto.id}
                                        className="flex items-center justify-between gap-4 border rounded-xl p-4 bg-white shadow-sm"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={produto.imagem}
                                                alt={produto.nome}
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                            <div>
                                                <h3 className="font-medium">{produto.nome}</h3>
                                                <p className="text-sm text-gray-500">
                                                    R$ {produto.preco.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => atualizarQuantidade(produto.id, -1)}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-8 text-center">
                                                {produto.quantidade}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => atualizarQuantidade(produto.id, 1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-semibold">
                                                R$ {(produto.preco * produto.quantidade).toFixed(2)}
                                            </p>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => removerProduto(produto.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">
                                    Seu carrinho está vazio 😢
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Resumo do Pedido */}
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Resumo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>R$ {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Frete</span>
                                <span>R$ {frete.toFixed(2)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total</span>
                                <span>R$ {total.toFixed(2)}</span>
                            </div>
                            <Button className="w-full text-lg py-6 rounded-2xl mt-4">
                                <a href="/cart/checkout" className="flex-1">Finalizar Compra</a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
