// src/components/Usuarios.jsx
import {
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';
import { ButtonAdd } from '../../components/admin/button_add';
import { Table } from '../../components/admin/Table';
import { DialogCreateUser } from '../../components/admin/DialogCreateUser';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Usuarios() {
    const [open, setOpen] = useState(false);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                setDados(response.data.data);
            })
            .catch(error => {
                console.error('Erro ao buscar usuários:', error);
            });
    }, []);

    console.log(dados);

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
                <div className="text-xs w-full max-w-6xl mx-auto">
                    <Table dados={dados} titulos={titulos} />
                </div>
            </div>
        </div>
    );
}
