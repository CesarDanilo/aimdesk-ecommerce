"use client"

import * as React from "react"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { components } from "../data/navbarLinks"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu"


export function Navigation() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <a href="/">Início</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Produtos */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/produtos" title="Todos os Produtos">
                                Veja todo o nosso catálogo de mouse pads.
                            </ListItem>
                            <ListItem href="/produtos/mais-vendidos" title="Mais Vendidos">
                                Confira os modelos mais procurados pelos gamers.
                            </ListItem>
                            <ListItem href="/produtos/promocoes" title="Promoções">
                                Descontos imperdíveis por tempo limitado.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Categorias */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <ListItem href="/categoria/speed" title="Speed">
                                Mouse pads com superfície rápida para movimentos ágeis.
                            </ListItem>
                            <ListItem href="/categoria/control" title="Control">
                                Superfície voltada para precisão máxima.
                            </ListItem>
                            <ListItem href="/categoria/extra-grande" title="Extra Grande">
                                Mouse pads que cobrem toda a mesa.
                            </ListItem>
                            <ListItem href="/categoria/tematicos" title="Temáticos">
                                Modelos com artes exclusivas e personalizadas.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Sobre */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <a href="/sobre">
                                        <div className="font-medium">Nossa História</div>
                                        <div className="text-muted-foreground">
                                            Saiba mais sobre a nossa loja e missão.
                                        </div>
                                    </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a href="/contato">
                                        <div className="font-medium">Contato</div>
                                        <div className="text-muted-foreground">
                                            Fale conosco para dúvidas ou suporte.
                                        </div>
                                    </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <a href="/blog">
                                        <div className="font-medium">Blog</div>
                                        <div className="text-muted-foreground">
                                            Dicas e novidades do mundo gamer.
                                        </div>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}
