import { Label } from "../components/ui/label"
import { Navigation } from "../components/Navbar.component"
import { SectionMainBanner } from "../components/Section.component"
import { CategoryCards } from "../components/CategoryCards.component"
import { FeaturedProducts } from "../components/FeaturedProducts.component"
import { Footer } from "../components/Footer.component"
import { data } from '../data/categories-list.data'
import { listProducts } from "../data/FeaturedProducts-list.data"
import logo from "../assets/logo.png"

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen gap-4">
            <nav className="border-b relative z-10 bg-white">
                <div className="container mx-auto flex items-center justify-start gap-6 px-6 py-4">
                    <div className="w-36 flex-shrink-0">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <Navigation />
                </div>
            </nav>
            <section className="flex justify-center items-center relative z-0 ">
                <SectionMainBanner />
            </section>
            <section className="flex justify-center -mt-24 mb-8 px-4 relative z-20">
                <CategoryCards data={data} />
            </section>
            <section className="flex justify-center mt-8">
                <Label htmlFor="Text" className="text-2xl">Destaques</Label>
            </section>
            <section>
                <FeaturedProducts data={listProducts} />
            </section>
            <footer>
                <Footer />
            </footer>
        </div >
    );
}


export default HomePage;
