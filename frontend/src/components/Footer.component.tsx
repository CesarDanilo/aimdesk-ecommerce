import Logo from "../assets/logo.png"

export function Footer() {
    return (
        <footer className="bg-white text-gray-700 py-10 mt-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo e Descrição */}
                <div>
                    <div>
                        <img src={Logo} alt="aimdesk" />
                    </div>
                    <p className="text-sm text-gray-600">
                        Sua loja de confiança para produtos de qualidade e entrega rápida.
                    </p>
                </div>

                {/* Links rápidos */}
                <div>
                    <h3 className="text-gray-900 font-semibold mb-4">Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-gray-900">Início</a></li>
                        <li><a href="/produtos" className="hover:text-gray-900">Produtos</a></li>
                        <li><a href="/sobre" className="hover:text-gray-900">Sobre nós</a></li>
                        <li><a href="/contato" className="hover:text-gray-900">Contato</a></li>
                    </ul>
                </div>

                {/* Formas de pagamento */}
                <div>
                    <h3 className="text-gray-900 font-semibold mb-4">Formas de pagamento</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6 object-contain" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-6 object-contain" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-6 object-contain" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg" alt="Pix" className="h-6 object-contain" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} AimDesk — Todos os direitos reservados.
            </div>
        </footer>
    );
}
