// src/components/Usuarios.jsx
import {
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';

export function Usuarios() {
    const dados = [
        {
            nome: 'Ada Lovelace',
            email: 'ada@example.com',
            admin: true,
            createdAt: '2025-07-02T14:30:00Z',
            cpf: '123.456.789-00',
            cidade: 'Dourados',
            endereco: 'Rua Algoritmo, 42',
            Bairro: 'Jd Italia',
            numero: 390,
            cep: '01001‑000',
            referencia: 'casa',
            contato: '00000-0000'
        },
        // adicione mais itens…
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm ">
                {/* Cabeçalho */}
                <thead className=" text-white  tracking-wider border-b border-white/10">
                    <tr>
                        {[
                            'Nome',
                            'Email',
                            'Admin',
                            'Criado',
                            'CPF',
                            'Cidade',
                            'Endereço',
                            'Bairro',
                            'N°',
                            'CEP',
                            'Referencia',
                            'Contato'
                        ].map((titulo) => (

                            <th
                                key={titulo}
                                className="px-4 py-3 text-left whitespace-nowrap font-normal"
                            >
                                {titulo}
                            </th>
                        ))}
                    </tr >
                </thead>


                {/* Corpo */}
                <tbody>
                    {dados.length === 0 ? (
                        <tr>
                            <td
                                colSpan={10}
                                className="px-4 py-6 text-center italic border-t border-white"
                            >
                                Nenhum usuário cadastrado.
                            </td>
                        </tr>
                    ) : (
                        dados.map((u, idx) => (
                            <tr
                                key={u.id ?? idx}
                                className=""
                            >
                                <td className="px-4 py-3">{u.nome}</td>
                                <td className="px-4 py-3">{u.email}</td>
                                <td className="px-4 py-3">{u.admin ? '✔︎' : '—'}</td>
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
        </div>


    );
}
