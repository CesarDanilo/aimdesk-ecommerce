const Dashboard = () => {
    return (
        <main className="flex-1 bg-black text-white px-10 py-8 relative overflow-hidden">
            {/* Círculo decorativo no fundo */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl z-0" />

            {/* Conteúdo principal */}
            <section className="relative z-10 max-w-6xl">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-white/90 tracking-tight">
                    Bem-vindo ao Dashboard
                </h1>
                <p className="text-white/60 text-base mb-10 max-w-xl">
                    Aqui você encontra uma visão geral das atividades, estatísticas e acessos rápidos aos módulos administrativos.
                </p>

                {/* Cards resumidos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#111111] p-6 rounded-xl hover:bg-[#1a1a1a] transition shadow-inner">
                        <h2 className="text-white/80 font-medium text-lg mb-2">Produtos</h2>
                        <p className="text-white/50 text-sm">Gerencie, edite ou adicione novos produtos ao catálogo.</p>
                    </div>

                    <div className="bg-[#111111] p-6 rounded-xl hover:bg-[#1a1a1a] transition shadow-inner">
                        <h2 className="text-white/80 font-medium text-lg mb-2">Usuários</h2>
                        <p className="text-white/50 text-sm">Controle o acesso e visualize o comportamento dos usuários.</p>
                    </div>

                    <div className="bg-[#111111] p-6 rounded-xl hover:bg-[#1a1a1a] transition shadow-inner">
                        <h2 className="text-white/80 font-medium text-lg mb-2">Relatórios</h2>
                        <p className="text-white/50 text-sm">Acompanhe os dados de vendas e desempenho da plataforma.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
