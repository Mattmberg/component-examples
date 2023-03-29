export interface CardInterface {
    id: number;
    title: string;
    description: string;
    image: string;
    color?: string | number;
};

export const Card = ({ id, title, description, image, color }: CardInterface) => {

    return (
        <div>
        </div>
    );
};
