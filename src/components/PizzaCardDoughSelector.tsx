export default function PizzaCardDoughSelector() {
    return (
        <div className="selector__dough">
            <button className="selector__button selector_button_half_part ">тонкое</button>
            <button className="selector__button active selector_button_half_part">традиционное</button>
        </div>
    );
}