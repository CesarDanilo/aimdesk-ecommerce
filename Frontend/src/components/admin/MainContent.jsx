const MainContent = () => {
    return (
        <main className="flex-1 bg-black text-white px-10 py-8 relative overflow-hidden">
            {/* Círculo decorativo estilo glassmorphism */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl z-0" />

            {/* Conteúdo principal */}
            <section className="relative z-10 max-w-5xl">
                <h1 className="text-4xl font-semibold mb-4 text-white/90">
                    Simplicity
                </h1>
                <p className="text-lg text-white/60 mb-10">
                    is the ultimate sophistication. Explore refined products and sleek visuals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#111111] p-4 rounded-lg hover:bg-[#1a1a1a] transition">
                        <h2 className="text-white/80 font-medium mb-2">Weekly Inspiration #10</h2>
                        <p className="text-sm text-white/50">Modern watch, clean layout, smart display.</p>
                    </div>
                    <div className="bg-[#111111] p-4 rounded-lg hover:bg-[#1a1a1a] transition">
                        <h2 className="text-white/80 font-medium mb-2">Ready Inspiration #11</h2>
                        <p className="text-sm text-white/50">Accessories, fashion shots, and contrast lighting.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
