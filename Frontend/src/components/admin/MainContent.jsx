import Dashboard from "../../views/admin/Dashboard";

const MainContent = ({ selected }) => {
    const renderContent = () => {
        switch (selected) {
            case 'dashboard':
                return <Dashboard />;
            default:
                return (
                    <div className="text-white/50 text-sm">
                        Selecione uma seção válida no menu lateral.
                    </div>
                );
        }
    };

    return (
        <main className="flex-1 bg-black text-white px-10 py-8 relative overflow-hidden">
            {/* Círculo decorativo estilo glassmorphism */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl z-0" />

            {/* Conteúdo principal */}
            <div className="relative z-10 overflow-auto">
                {renderContent()}
            </div>
        </main>
    );
};

export default MainContent;
