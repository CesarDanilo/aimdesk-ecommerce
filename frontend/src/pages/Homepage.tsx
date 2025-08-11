import { Navigation } from "../components/Navbar.component";
import logo from "../assets/logo.png";
import { SectionMainBanner } from "../components/Section.component";

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen gap-4">
            <nav className="border-b-1">
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
            <section className="flex justify-center align-middle">
                <SectionMainBanner />
            </section>
        </div>
    );
}

export default HomePage;
