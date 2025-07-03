import Sidebar from "../../components/admin/Sidebar";
import MainContent from "../../components/admin/MainContent";
import { useState } from "react";

const HomePageAdmin = () => {
    const [selectedItem, setSelectedItem] = useState('dashboard');
    return (
        <div className="flex h-screen">
            <Sidebar onSelect={setSelectedItem} />
            <MainContent selected={selectedItem} />
        </div>
    )
}

export default HomePageAdmin;