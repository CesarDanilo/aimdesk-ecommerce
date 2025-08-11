import { Navigation } from "../components/Navbar.component"
import logo from '../assets/logo.png'

function HomePage() {
    return (
        <div className="flex justify-center align-middle p-4">
            <nav className="flex gap-6">
                <div className="flex w-40">
                    <img src={logo} alt="logo" />
                </div>
                <Navigation />
            </nav>
        </div>
    )
}

export default HomePage