import {
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const links = [
        { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
        { name: 'Produtos', icon: ShoppingBagIcon, href: '/produtos' },
        { name: 'Usuários', icon: UserGroupIcon, href: '/usuarios' },
    ];
    return (
        <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Admin</h2>
            <nav className="flex flex-col gap-4">
                {links.map(({ name, icon: Icon, href }) => (
                    <NavLink
                        key={name}
                        to={href}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700 font-semibold' : ''
                            }`
                        }
                    >
                        <Icon className="h-5 w-5" />
                        <span>{name}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
