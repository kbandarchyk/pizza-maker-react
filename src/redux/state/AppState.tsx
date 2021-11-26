import Pizza from "../model/Pizza";
import ClientBasket from "../model/ClientBasket";
import PizzaTag from "../model/PizzaTag";

export default class AppState {

    private readonly _pizzas: Pizza[];
    private readonly _tags: PizzaTag[];
    private readonly _clientBasket: ClientBasket;

    constructor( pizzas: Pizza[],
                 tags: PizzaTag[],
                 clientBasket: ClientBasket ) {
        this._pizzas = pizzas;
        this._tags = tags;
        this._clientBasket = clientBasket;
    }

    get pizzas(): Pizza[] {
        return this._pizzas;
    }

    get tags(): PizzaTag[] {
        return this._tags;
    }

    get clientBasket(): ClientBasket {
        return this._clientBasket;
    }

    findPizzaById( pizzaId: number ): Pizza {

        let pizza = this.pizzas.find( Pizza.isFor( pizzaId ) );

        if( pizza === undefined ) {
            throw new Error( `Pizza can not be found by id: ${pizzaId}`)
        }

        return pizza;
    }

    findPizzaTagById( tagId: number ): PizzaTag {

        let pizzaTag = this.tags.find( PizzaTag.isFor( tagId ) );

        if( pizzaTag === undefined ) {
            throw new Error( `PizzaTag can not be found by id: ${tagId}`)
        }

        return pizzaTag;
    }

}