export default function FilterButton( {name}:FilterButtonProps ) {
    return (
        <button className="filter-button btn btn__gray">{name}</button>
    );
}

interface FilterButtonProps {
    name: string;
}