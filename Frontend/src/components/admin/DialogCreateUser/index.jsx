export function DialogCreateUser() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Criar Usuário</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm text-white mb-1" htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            className="w-full rounded-md px-3 py-2 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-white mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded-md px-3 py-2 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                        <button
                            type="button"
                            className="px-4 py-2 rounded-md bg-zinc-700 text-white hover:bg-zinc-600 transition"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition"
                        >
                            Criar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
