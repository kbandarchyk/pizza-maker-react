export default function PizzaCardSizeSelector() {
    return (
        <div className="selector__size">
            <button className="selector__button active selector_button_third_part">26 cm</button>
            <button className="selector__button selector_button_third_part">30 cm</button>
            <button className="selector__button selector_button_third_part">40 cm</button>
        </div>
    );
}