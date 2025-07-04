import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import functionCreateUserDialog from '../../functions/functionCreateUserDialog';

export function DialogCreateUser({ onClose }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState('false');
    const [ativo, setAtivo] = useState('false');
    const [cpf, setCpf] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');
    const [referencia, setReferencia] = useState('');
    const [contato, setContato] = useState('');
    const [senha, setSenha] = useState('');
    const [dados, setDados] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoUsuario = {
            nome,
            email,
            admin: admin === 'true',
            ativo: ativo === 'true',
            cpf,
            cidade,
            endereco,
            bairro,
            numero,
            cep,
            referencia,
            contato,
            senha
        };
        setDados(novoUsuario); // opcional, se quiser manter o estado
        functionCreateUserDialog(novoUsuario);
    }

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

                <form className="space-y-3 text-xs" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-xs text-white mb-1" htmlFor="admin">Admin</label>
                            <select
                                id="admin"
                                value={admin}
                                onChange={e => setAdmin(e.target.value)}
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
                                value={ativo}
                                onChange={e => setAtivo(e.target.value)}
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
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            id="cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="endereco">Endereço</label>
                        <input
                            type="text"
                            id="endereco"
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="bairro">Bairro</label>
                        <input
                            type="text"
                            id="bairro"
                            value={bairro}
                            onChange={e => setBairro(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-xs text-white mb-1" htmlFor="numero">N°</label>
                            <input
                                type="number"
                                id="numero"
                                value={numero}
                                onChange={e => setNumero(e.target.value)}
                                className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-xs text-white mb-1" htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                id="cep"
                                value={cep}
                                onChange={e => setCep(e.target.value)}
                                className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="referencia">Referência</label>
                        <input
                            type="text"
                            id="referencia"
                            value={referencia}
                            onChange={e => setReferencia(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-white mb-1" htmlFor="contato">Contato</label>
                        <input
                            type="text"
                            id="contato"
                            value={contato}
                            onChange={e => setContato(e.target.value)}
                            className="w-full rounded px-2 py-1 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
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
