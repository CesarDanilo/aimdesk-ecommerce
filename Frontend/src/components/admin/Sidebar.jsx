import {
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onSelect, selected }) => {
    const links = [
        { name: 'dashboard', label: 'Dashboard', icon: HomeIcon },
        { name: 'produtos', label: 'Produtos', icon: ShoppingBagIcon },
        { name: 'usuarios', label: 'Usuários', icon: UserGroupIcon },
    ];

    const handleClick = (item) => {
        if (onSelect) onSelect(item);
    };

    return (
        <aside className="h-full w-64 bg-black backdrop-blur-sm text-white  flex-col px-6 py-8
                     border-r border-white/10 shadow-inner relative">
            <span className="absolute inset-y-0 left-0 w-px bg-white/5" />

            <h2 className="text-2xl font-semibold mb-8 tracking-wider uppercase text-white/90">
                Admin
            </h2>

            <nav className="flex flex-col gap-3">
                {links.map(({ name, label, icon: Icon }) => (
                    <NavLink
                        key={name}
                        onClick={() => handleClick(name)}
                        className={`
              group flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200
              ${selected === name
                                ? 'bg-white/5 text-white font-semibold'
                                : 'hover:bg-white/5 text-white/70 hover:text-white'}
            `}
                    >
                        <Icon className="h-5 w-5 stroke-1 group-hover:stroke-[1.5] transition" />
                        <span className="text-sm tracking-wide">{label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </aside>
    );
};

export default Sidebar;
