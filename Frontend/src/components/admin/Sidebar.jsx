import {
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const links = [
        { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
        { name: 'Produtos', icon: ShoppingBagIcon, href: '/produtos' },
        { name: 'Usuários', icon: UserGroupIcon, href: '/usuarios' },
    ];

    return (
        <aside className="h-screen w-64 bg-black backdrop-blur-sm text-white flex flex-col px-6 py-8
                       border-r border-white/10 shadow-inner relative">
            {/* faixa/listra sutil na borda esquerda */}
            <span className="absolute top-0 left-0 h-full w-px bg-white/5" />

            <h2 className="text-2xl font-semibold mb-8 tracking-wider uppercase text-white/90">
                Admin
            </h2>

            <nav className="flex flex-col gap-3">
                {links.map(({ name, icon: Icon, href }) => (
                    <NavLink
                        key={name}
                        to={href}
                        className={({ isActive }) =>
                            `group flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200
               ${isActive
                                ? 'bg-white/5 text-white font-semibold'
                                : 'hover:bg-white/5 text-white/70 hover:text-white'}`}
                    >
                        {/* ícone com stroke suave que ganha opacidade no hover */}
                        <Icon className="h-5 w-5 stroke-1 group-hover:stroke-[1.5] transition" />
                        <span className="text-sm tracking-wide">{name}</span>
                    </NavLink>
                ))}
            </nav>

            {/* círculo decorativo no canto inferior esquerdo (mesmo motivo geométrico do main) */}
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </aside>
    );
};

export default Sidebar;
