import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import MainContent from '../../components/admin/MainContent';

const HomePageAdmin = () => {
    const [selectedItem, setSelectedItem] = useState('dashboard');

    return (
        <div className="flex min-h-screen overflow-x-auto scrollbar-minimal">
            <Sidebar
                selected={selectedItem}
                onSelect={setSelectedItem}
            />
            <main className="flex-1 ml-64">
                <MainContent selected={selectedItem} />
            </main>
        </div>
    );
};

export default HomePageAdmin;
