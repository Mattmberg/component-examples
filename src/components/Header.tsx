export interface HeaderInterface {
    pageTitle: string;
};

export const Header = ({pageTitle}: HeaderInterface) => {
    return (
        <header className ="">
            <h1>{pageTitle}</h1>
        </header>
    );
};
