// src/components/admin/Table.jsx
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

export function Table({ dados, titulos }) {
    return (
        <table className="min-w-full border-collapse text-sm">
            {/* Cabeçalho */}
            <thead className="text-white/80 tracking-wider border-b border-white/10">
                <tr>
                    {titulos.map((titulo) => (
                        <th
                            key={titulo}
                            className="px-4 py-3 text-left whitespace-nowrap font-normal"
                        >
                            {titulo}
                        </th>
                    ))}
                    <th className="px-4 py-3 text-right font-normal">Ações</th>
                </tr>
            </thead>

            {/* Corpo */}
            <tbody>
                {dados.length === 0 ? (
                    <tr>
                        <td
                            colSpan={titulos.length + 1}
                            className="px-4 py-6 text-center italic border-t border-white"
                        >
                            Nenhum usuário cadastrado.
                        </td>
                    </tr>
                ) : (
                    dados.map((u, idx) => (
                        <tr key={u.id ?? idx}>
                            <td className="px-4 py-3">{u.nome}</td>
                            <td className="px-4 py-3">{u.email}</td>
                            <td
                                className={`px-4 py-3 ${u.admin ? 'text-green-500' : 'text-gray-400'
                                    }`}
                            >
                                {u.admin ? '✔︎' : '—'}
                            </td>
                            <td
                                className={`px-4 py-3 ${u.ativo ? 'text-green-500' : 'text-gray-400'
                                    }`}
                            >
                                {u.ativo ? '✔︎' : '—'}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                {new Date(u.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-3">{u.cpf}</td>
                            <td className="px-4 py-3">{u.cidade}</td>
                            <td className="px-4 py-3">{u.endereco}</td>
                            <td className="px-4 py-3">{u.Bairro}</td>
                            <td className="px-4 py-3">{u.numero}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{u.cep}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{u.referencia}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{u.contato}</td>
                            <td className="px-4 py-3">
                                <div className="flex items-center justify-end gap-2">
                                    {/* Botão Editar */}
                                    <button
                                        type="button"
                                        aria-label="Editar"
                                        className="p-2 rounded-md bg-transparent text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                                    >
                                        <PencilSquareIcon className="w-5 h-5" />
                                    </button>

                                    {/* Botão Deletar */}
                                    <button
                                        type="button"
                                        aria-label="Deletar"
                                        className="p-2 rounded-md bg-transparent text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}
