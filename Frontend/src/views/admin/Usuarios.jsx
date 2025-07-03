// src/components/Usuarios.jsx
import {
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';
import { ButtonAdd } from '../../components/admin/button_add';
import { Table } from '../../components/admin/Table';

export function Usuarios() {
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
            contato: '00000-0000'
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
            contato: '00000-0000'
        },
        // adicione mais itens…
    ];

    return (
        <div className="overflow-x-auto scrollbar-minimal">
            <div className='flex justify-end'>
                <ButtonAdd />
            </div>
            <Table dados={dados} />
        </div>


    );
}
