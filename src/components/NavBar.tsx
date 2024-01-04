import { Key } from "react";

export interface NavItem {
    index: Key;
    item: String;
    url: string;
}

export interface NavBarInterface {
    logoImageSrc: string;
    companySiteUrl: string;
    navItems: NavItem[];
};

export const NavBar = ({logoImageSrc, companySiteUrl, navItems}: NavBarInterface) => {
    return (
        <div className ="">
            <a href={companySiteUrl}><img src={logoImageSrc}/></a>
            <ul>
                {navItems.map((navItem: NavItem) =>(
                    <li key={navItem.index} className="">
                        <a href={navItem.url}>{navItem.item}</a>
                    </li>
                ))}
            </ul>
            <form>
                <input type="search" placeholder="Search" aria-label="Search"/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};
