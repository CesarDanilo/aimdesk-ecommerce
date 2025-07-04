import { XMarkIcon } from '@heroicons/react/24/outline';

export function DialogCreateUser({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-3xl bg-zinc-900 rounded-xl shadow-lg p-6 min-h-0 h-auto relative max-h-[85vh] overflow-y-auto scrollbar-minimal">
                {/* Botão de fechar */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white hover:text-zinc-400 focus:outline-none"
                    aria-label="Fechar"
                >
                    <XMarkIcon className="w-5 h-5" />
                </button>
                <h2 className="text-lg font-semibold text-white mb-3">Criar Usuário</h2>

                <form className="space-y-3 text-xs">
                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-xs text-white mb-1" htmlFor="admin">Admin</label>
                            <select
                                id="admin"
                                className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>

                        <div className="flex-1">
                            <label className="block text-xs text-white mb-1" htmlFor="ativo">Ativo</label>
                            <select
                                id="ativo"
                                className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            id="cidade"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="endereco">Endereço</label>
                        <input
                            type="text"
                            id="endereco"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="bairro">Bairro</label>
                        <input
                            type="text"
                            id="bairro"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-xs text-white mb-1" htmlFor="numero">N°</label>
                            <input
                                type="number"
                                id="numero"
                                className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-xs text-white mb-1" htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="referencia">Referência</label>
                        <input
                            type="text"
                            id="referencia"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="contato">Contato</label>
                        <input
                            type="text"
                            id="contato"
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            className="px-3 py-1 rounded bg-zinc-700 text-white hover:bg-zinc-600 transition text-xs"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-500 transition text-xs"
                        >
                            Criar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
