import { useState } from "react"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"

export default function CheckoutCart() {
    const [paymentMethod, setPaymentMethod] = useState("pix")
    const [frete, setFrete] = useState<number | null>(null)

    const calcularFrete = () => {
        // Simulação: em produção, aqui você chamaria sua API de CEP
        setFrete(20)
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 px-4">
            <Card className="w-full max-w-2xl shadow-lg rounded-2xl border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-center">Finalizar pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">

                    {/* Dados do Cliente */}
                    <div className="space-y-3">
                        <h2 className="text-lg font-medium">Informações Pessoais</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="nome">Nome completo</Label>
                                <Input id="nome" placeholder="Digite seu nome" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">E-mail</Label>
                                <Input id="email" type="email" placeholder="seu@email.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="telefone">Telefone</Label>
                                <Input id="telefone" type="tel" placeholder="(99) 99999-9999" />
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Endereço */}
                    <div className="space-y-3">
                        <h2 className="text-lg font-medium">Endereço de Entrega</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2 sm:col-span-2">
                                <Label htmlFor="endereco">Endereço</Label>
                                <Input id="endereco" placeholder="Rua Exemplo, 123" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cidade">Cidade</Label>
                                <Input id="cidade" placeholder="São Paulo" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cep">CEP</Label>
                                <div className="flex gap-2">
                                    <Input id="cep" placeholder="00000-000" />
                                    <Button type="button" onClick={calcularFrete}>
                                        Calcular
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {frete !== null && (
                            <p className="text-sm text-green-600 mt-2">Frete calculado: R$ {frete},00</p>
                        )}
                    </div>

                    <Separator />

                    {/* Tipo de Pagamento */}
                    <div className="space-y-3">
                        <h2 className="text-lg font-medium">Pagamento</h2>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="pix" id="pix" />
                                <Label htmlFor="pix">Pix</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="boleto" id="boleto" />
                                <Label htmlFor="boleto">Boleto</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="cartao" id="cartao" />
                                <Label htmlFor="cartao">Cartão de Crédito</Label>
                            </div>
                        </RadioGroup>

                        {/* Campos do Cartão só aparecem se selecionado */}
                        {paymentMethod === "cartao" && (
                            <div className="grid gap-4 sm:grid-cols-2 mt-4">
                                <div className="space-y-2 sm:col-span-2">
                                    <Label htmlFor="numero">Número do Cartão</Label>
                                    <Input id="numero" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="validade">Validade</Label>
                                    <Input id="validade" placeholder="MM/AA" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvv">CVV</Label>
                                    <Input id="cvv" placeholder="123" />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <Label htmlFor="titular">Nome do Titular</Label>
                                    <Input id="titular" placeholder="Como está no cartão" />
                                </div>
                            </div>
                        )}
                    </div>

                    <Separator />

                    {/* Resumo do Pedido */}
                    <div className="space-y-3">
                        <h2 className="text-lg font-medium">Resumo do Pedido</h2>
                        <div className="flex justify-between text-sm">
                            <span>Produto X</span>
                            <span>R$ 120,00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Frete</span>
                            <span>{frete !== null ? `R$ ${frete},00` : "Calcule o CEP"}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>
                                R$ {120 + (frete !== null ? frete : 0)},00
                            </span>
                        </div>
                    </div>

                    <Button className="w-full text-lg py-6 rounded-2xl">
                        Finalizar Pedido
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
