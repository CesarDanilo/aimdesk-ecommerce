import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { listProducts } from "../data/FeaturedProducts-list.data"
import { Navigation } from "../components/Navbar.component"
import { SheetDemo } from "../components/Sheet.component"
import { Footer } from "../components/Footer.component"
import { FeaturedProducts } from "../components/FeaturedProducts.component"

import logo from "../assets/logo.png"

export default function ProdutoPage() {
    const produto = listProducts[0]

    const adicionarAoCarrinho = (id: string) => {
        console.log(`Produto ${id} adicionado ao carrinho!`)
    }

    const comprarAgora = (id: string) => {
        console.log(`Compra imediata do produto ${id}`)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-white">
            <header className="border-b relative z-10 bg-white w-full">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="w-36 flex-shrink-0">
                        <a href="/">
                            <img
                                src={logo}
                                alt="Logo da loja"
                                className="w-full h-auto object-contain"
                            />
                        </a>
                    </div>
                    {/* Navegação */}
                    <Navigation />
                    {/* Menu Mobile */}
                    <SheetDemo />
                </div>
            </header>

            {/* Card Produto */}
            <Card className="w-full max-w-5xl shadow-sm border rounded-2xl mt-8">
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {/* Imagem */}
                    <div className="flex justify-center items-center">
                        <img
                            src={produto.image}
                            alt={produto.name}
                            className="rounded-xl shadow-sm w-full max-w-md object-cover"
                        />
                    </div>

                    {/* Infos */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-semibold mb-3">{produto.name}</h1>
                            <p className="text-gray-600 mb-6">
                                Produto de alta qualidade, desenvolvido para proporcionar conforto e performance. Ideal para uso diário ou profissional.
                            </p>
                            <p className="text-2xl font-medium text-gray-900 mb-4">
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(Number(produto.price))}
                            </p>
                            <ul className="text-sm text-gray-500 space-y-1 mb-6">
                                <li>✔ Garantia de 1 ano</li>
                                <li>✔ Devolução em até 7 dias</li>
                                <li>✔ Frete grátis em compras acima de R$ 200</li>
                            </ul>
                        </div>

                        {/* Botões */}
                        <div className="flex gap-4 mt-6">
                            <Button
                                className="flex-1"
                                onClick={() => comprarAgora(produto.id)}
                            >
                                Comprar Agora
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => adicionarAoCarrinho(produto.id)}
                            >
                                Adicionar ao Carrinho
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Produtos relacionados */}
            <section className="w-full max-w-6xl mt-12 text-center">
                <h3 className="text-xl font-bold mb-6">
                    Você pode querer também
                </h3>
                <FeaturedProducts data={listProducts} />
            </section>

            {/* Rodapé */}
            <Footer />
        </div>
    )
}
