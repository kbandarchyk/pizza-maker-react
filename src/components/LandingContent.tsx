import PizzaCards from "./PizzaCards";

export default function LandingContent() {
    return (
        <div className="content">
            <div className="container">
                <div className="content__inner">
                    <h1 className="content__title">Все пиццы</h1>
                    <PizzaCards/>
                </div>
            </div>
        </div>
    );
}