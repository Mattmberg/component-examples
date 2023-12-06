export interface NavBarInterface {
    logoImageSrc: string;
    companySiteUrl: string;
    navItems: string[];
};

export const NavBar = ({logoImageSrc, companySiteUrl, navItems}: NavBarInterface) => {
    return (
        <div className ="">
            <a href={companySiteUrl}><img src={logoImageSrc}/></a>
            <ul>
                {navItems.map((items, index) =>(
                    <li key={items} className="">
                        <a href="#">{items}</a>
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
