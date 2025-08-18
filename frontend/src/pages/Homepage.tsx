import { Label } from "../components/ui/label"
import { Navigation } from "../components/Navbar.component"
import { SectionMainBanner } from "../components/Section.component"
import { CategoryCards } from "../components/CategoryCards.component"
import { FeaturedProducts } from "../components/FeaturedProducts.component"
import { Footer } from "../components/Footer.component"
import { data } from '../data/categories-list.data'
import { listProducts } from "../data/FeaturedProducts-list.data"
import { SheetDemo } from "../components/Sheet.component"

import logo from "../assets/logo.png"

interface SectionTitleProps {
    children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
    return (
        <div className="flex justify-center mt-12 mb-6">
            <Label htmlFor="section-title" className="text-2xl font-semibold">
                {children}
            </Label>
        </div>
    );
}

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HEADER */}
            <header className="border-b relative z-10 bg-white">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="w-36 flex-shrink-0">
                        <img
                            src={logo}
                            alt="Logo da loja"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    {/* Navegação */}
                    <Navigation />
                    {/* Menu Mobile */}
                    <SheetDemo />
                </div>
            </header>

            {/* MAIN */}
            <main className="flex-grow">
                {/* Banner Principal */}
                <section className="flex justify-center items-center relative z-0">
                    <SectionMainBanner />
                </section>

                {/* Categorias */}
                <section className="flex justify-center -mt-24 mb-12 px-4 relative z-20">
                    <CategoryCards data={data} />
                </section>

                {/* Seções de Produtos */}
                <section className="container mx-auto px-4">
                    <SectionTitle>Destaques</SectionTitle>
                    <FeaturedProducts data={listProducts} />
                </section>

                <section className="container mx-auto px-4">
                    <SectionTitle>Mais vendidos</SectionTitle>
                    <FeaturedProducts data={listProducts} />
                </section>

                <section className="container mx-auto px-4">
                    <SectionTitle>Lançamentos</SectionTitle>
                    <FeaturedProducts data={listProducts} />
                </section>

                {/* Banner secundário */}
                <section className="flex justify-center items-center relative z-0 mt-12">
                    <SectionMainBanner />
                </section>
            </main>

            {/* FOOTER */}
            <footer className="mt-12">
                <Footer />
            </footer>
        </div>
    );
}


