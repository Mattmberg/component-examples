export interface CardInterface {
    id: number;
    title: string;
    description: string;
    image: string;
    color?: string | number;
};

export const Card = ({ id, title, description, image, color }: CardInterface) => {

    return (
        <div className ={`grid col-auto grid-rows-1 text-center my-5 shadow-lg p-4 ${color}`}>
            <img src={`${image}`}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};