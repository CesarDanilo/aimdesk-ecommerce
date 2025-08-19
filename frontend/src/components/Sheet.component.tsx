import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { listProducts } from "../data/FeaturedProducts-list.data";
import { ShoppingCart } from "lucide-react";

interface Product {
    id: string;
    nome: string;
    preco: number;
    imagem: string;
    quantidade: number;
}

export function SheetDemo() {
    // Mapeia os produtos da lista para o formato do carrinho
    const cart: Product[] = listProducts.slice(0, 3).map((p) => ({
        id: p.id,
        nome: p.name, // converte "name" -> "nome"
        preco: Number(p.price), // converte "price" (string?) -> number
        imagem: p.image, // converte "image" -> "imagem"
        quantidade: 1,
    }));

    const subtotal = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    const frete = subtotal > 500 ? 0 : 40;
    const total = subtotal + frete;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="relative flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Carrinho
                    {/* Badge com contador */}
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {cart.reduce((acc, item) => acc + item.quantidade, 0)}
                    </span>
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="flex flex-col sm:max-w-lg md:max-w-2xl p-6">
                <SheetHeader>
                    <SheetTitle className="text-xl font-bold">Meu Carrinho</SheetTitle>
                </SheetHeader>

                {/* Lista de produtos */}
                <div className="flex-1 overflow-y-auto py-6 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                            <img src={item.imagem} alt={item.nome} className="w-20 h-20 object-cover rounded-md" />
                            <div className="flex-1">
                                <p className="font-medium">{item.nome}</p>
                                <p className="text-sm text-gray-500">Qtd: {item.quantidade}</p>
                            </div>
                            <p className="font-semibold">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                {/* Totalizadores */}
                <div className="space-y-3 border-t pt-6 text-sm">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Frete</span>
                        <span>{frete === 0 ? "Grátis" : `R$ ${frete.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                </div>

                {/* Botões do Footer */}
                <SheetFooter className="mt-8 flex gap-3">
                    <Button className="flex-1"><a href="/cart" className="flex-1">Finalizar Compra</a></Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="flex-1">
                            Fechar
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
