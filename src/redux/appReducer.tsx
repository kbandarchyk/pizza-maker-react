import Action from "./action/Action";
import AppState from "./state/AppState";
import Pizza from "./model/Pizza";
import PizzaSelectorType from "./model/PizzaSelectorType";
import {ADD_PIZZA_TO_BASKET, RESET_PIZZA_TAG, SELECT_PIZZA_DOUGH, SELECT_PIZZA_SIZE, SELECT_PIZZA_TAG} from "./types";
import SelectPizzaDoughActionPayload from "./action/SelectPizzaDoughActionPayload";
import {PizzaDoughType} from "./model/PizzaDoughType";
import {PizzaSizeType} from "./model/PizzaSizeType";
import SelectPizzaSizeActionPayload from "./action/SelectPizzaSizeActionPayload";
import ClientBasket from "./model/ClientBasket";
import AddPizzaToBasketActionPayload from "./action/AddPizzaToBasketActionPayload";
import PizzaTag from "./model/PizzaTag";
import SelectPizzaTagActionPayload from "./action/SelectPizzaTagActionPayload";
import {replaceArrayElement} from "../utils/immutable-collection-utils";

const initialState:AppState = new AppState( [
    new Pizza( 1,
               "Сырный цыпленок",
               [ PizzaDoughType.THIN, PizzaDoughType.TRADITIONAL ],
               [ PizzaSizeType.SMALL, PizzaSizeType.MEDIUM, PizzaSizeType.LARGE ],
               [ new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.MEDIUM, 200 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.LARGE, 300 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.SMALL, 150 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.MEDIUM, 250 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.LARGE, 350 ) ],
               new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
               [ 1 ] ),
    new Pizza( 2,
               "Сырный цыпленок",
               [ PizzaDoughType.THIN ],
               [ PizzaSizeType.SMALL, PizzaSizeType.MEDIUM, PizzaSizeType.LARGE ],
               [ new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.MEDIUM, 200 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.LARGE, 300 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.SMALL, 150 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.MEDIUM, 250 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.LARGE, 350 ) ],
               new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
               [ 1 ] ),
    new Pizza( 3,
               "Сырный цыпленок",
               [ PizzaDoughType.THIN, PizzaDoughType.TRADITIONAL ],
               [ PizzaSizeType.SMALL, PizzaSizeType.MEDIUM, PizzaSizeType.LARGE ],
               [ new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.MEDIUM, 200 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.LARGE, 300 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.SMALL, 150 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.MEDIUM, 250 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.LARGE, 350 ) ],
               new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
               [ 1 ] ),
    new Pizza( 4,
               "Сырный цыпленок",
               [ PizzaDoughType.TRADITIONAL ],
               [ PizzaSizeType.SMALL, PizzaSizeType.MEDIUM, PizzaSizeType.LARGE ],
               [ new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.MEDIUM, 200 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.LARGE, 300 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.SMALL, 150 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.MEDIUM, 250 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.LARGE, 350 ) ],
               new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.SMALL, 150 ),
               [ 1 ] ),
    new Pizza( 5,
               "Сырный цыпленок",
               [ PizzaDoughType.THIN, PizzaDoughType.TRADITIONAL ],
               [ PizzaSizeType.SMALL, PizzaSizeType.MEDIUM, PizzaSizeType.LARGE ],
               [ new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.MEDIUM, 200 ),
                 new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.LARGE, 300 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.SMALL, 150 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.MEDIUM, 250 ),
                 new PizzaSelectorType( PizzaDoughType.TRADITIONAL, PizzaSizeType.LARGE, 350 ) ],
               new PizzaSelectorType( PizzaDoughType.THIN, PizzaSizeType.SMALL, 100 ),
               [ 1 ] )
    ],
    [ new PizzaTag( 1, 'Мясные', false), new PizzaTag( 2, 'Вегетерианская', false), new PizzaTag( 3, 'Гриль', false) ,new PizzaTag( 4, 'Острые', false) ,new PizzaTag( 5, 'Закрытые', false) ],
    new ClientBasket( [], 0 ) );

export const appReducer = ( state:AppState = initialState, action:Action ) => {
    switch ( action.type ) {
        case SELECT_PIZZA_DOUGH: {
            return processSelectPizzaDoughAction( state, action.payload as SelectPizzaDoughActionPayload );
        }
        case SELECT_PIZZA_SIZE: {
            return processSelectPizzaSizeAction( state, action.payload as SelectPizzaSizeActionPayload );
        }
        case ADD_PIZZA_TO_BASKET: {
            return processAddPizzaToBasketAction( state, action.payload as AddPizzaToBasketActionPayload );
        }
        case SELECT_PIZZA_TAG: {
            return processSelectPizzaTagAction( state, action.payload as SelectPizzaTagActionPayload );
        }
        case RESET_PIZZA_TAG: {
            return processResetPizzaTagAction( state )
        }
        default:
            return state;
    }

}


function processSelectPizzaDoughAction( state: AppState, payload: SelectPizzaDoughActionPayload): AppState {

    let currentPizza = state.pizzas.find( Pizza.isFor( payload.pizzaId ) );

    if( currentPizza === undefined ) {
        console.log( `This pizza is not found by id: ${payload.pizzaId}` );
        return state;
    }

    return new AppState( replaceArrayElement( state.pizzas,
                                              state.pizzas.findIndex( Pizza.isFor( payload.pizzaId ) ),
                                              currentPizza.selectDough( payload.selectedDough ) ),
                         state.tags,
                         state.clientBasket );
}

function processSelectPizzaSizeAction( state: AppState, payload: SelectPizzaSizeActionPayload ): AppState {

    let currentPizza = state.pizzas.find( Pizza.isFor( payload.pizzaId ) );

    if( currentPizza === undefined ) {
        console.log( `This pizza is not found by id: ${payload.pizzaId}` );
        return state;
    }

    return new AppState( replaceArrayElement( state.pizzas,
                                              state.pizzas.findIndex( Pizza.isFor( payload.pizzaId ) ),
                                              currentPizza.selectSize( payload.selectedSize ) ),
                         state.tags,
                         state.clientBasket );
}

function processAddPizzaToBasketAction( state: AppState, payload: AddPizzaToBasketActionPayload ): AppState {

    return new AppState( state.pizzas,
                         state.tags,
                         state.clientBasket.addPizzaToBasket( payload.pizza ) );

}

function processSelectPizzaTagAction( state: AppState, payload: SelectPizzaTagActionPayload ): AppState {

    const currentPizzaTag = state.tags.find( PizzaTag.isFor( payload.pizzaTagId ) );

    if( currentPizzaTag === undefined ) {
        console.log( `This pizza tag is not found by id: ${payload.pizzaTagId}` );
        return state;
    }

    return new AppState( state.pizzas,
                         replaceArrayElement( state.tags.map( e => e.markAsInactive() ),
                                              state.tags.findIndex( PizzaTag.isFor( payload.pizzaTagId ) ),
                                              currentPizzaTag.markAsActive() ),
                         state.clientBasket );

}

function processResetPizzaTagAction( state: AppState ): AppState {

    return new AppState( state.pizzas,
                         state.tags.map( e => e.markAsInactive() ),
                         state.clientBasket );
}