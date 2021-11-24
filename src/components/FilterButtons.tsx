import FilterButton from "./FilterButton";

export default function FilterButtons() {
    return (
        <div className="filter-buttons">
            <FilterButton name='все'/>
            <FilterButton name='мясные' />
            <FilterButton name='вегетерианская' />
            <FilterButton name='гриль' />
            <FilterButton name='острые' />
            <FilterButton name='закрытые' />
        </div>
    );
}