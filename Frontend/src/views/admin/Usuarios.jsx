// src/components/Usuarios.jsx
import {
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';
import { ButtonAdd } from '../../components/admin/button_add';
import { Table } from '../../components/admin/Table';
import { DialogCreateUser } from '../../components/admin/DialogCreateUser';
import { useState } from 'react';

export function Usuarios() {
    const [open, setOpen] = useState(false);

    const dados = [
        {
            nome: 'Ada Lovelace',
            email: 'ada@example.com',
            admin: true,
            ativo: true,
            createdAt: '2025-07-02T14:30:00Z',
            cpf: '123.456.789-00',
            cidade: 'Dourados',
            endereco: 'Rua Algoritmo, 42',
            Bairro: 'Jd Italia',
            numero: 390,
            cep: '01001‑000',
            referencia: 'casa',
            contato: '00000-0000',
        },
        {
            nome: 'Ada Lovelace',
            email: 'ada@example.com',
            admin: false,
            ativo: false,
            createdAt: '2025-07-02T14:30:00Z',
            cpf: '123.456.789-00',
            cidade: 'Dourados',
            endereco: 'Rua Algoritmo, 42',
            Bairro: 'Jd Italia',
            numero: 390,
            cep: '01001‑000',
            referencia: 'casa',
            contato: '00000-0000',
        },
        // outros usuários…
    ];

    const titulos = [
        'Nome',
        'Email',
        'Admin',
        'Ativo',
        'Criado',
        'CPF',
        'Cidade',
        'Endereço',
        'Bairro',
        'N°',
        'CEP',
        'Referencia',
        'Contato',
    ];

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="relative overflow-x-auto overflow-y-auto">
            {/* Centraliza o DialogCreateUser sobre o conteúdo principal */}
            {open &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <DialogCreateUser onClose={handleClick} />
                </div>
            }

            {/* Botão fixo no topo direito da tela */}
            <div className="fixed top-4 right-4 z-50">
                <ButtonAdd handleClick={handleClick} />
            </div>

            {/* Espaçamento entre botão e tabela */}
            <div className="pt-16">
                <div className="text-xs w-4/5">
                    <Table dados={dados} titulos={titulos} />
                </div>
            </div>
        </div>
    );
}
