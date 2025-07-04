import { PlusIcon } from '@heroicons/react/24/solid';

export function ButtonAdd({ handleClick }) {
    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-semibold text-sm shadow-sm hover:bg-gray-200 transition"
        >
            <PlusIcon className="h-4 w-4" />
            Adicionar
        </button>
    );
}
