import Action from "./action/Action";
import AppState from "./state/AppState";
import Pizza from "./model/Pizza";
import PizzaSelectorType from "./model/PizzaSelectorType";
import {SELECT_PIZZA_DOUGH} from "./types";
import SelectPizzaDoughActionPayload from "./action/SelectPizzaDoughActionPayload";
import {PizzaDoughType} from "./model/PizzaDoughType";
import {PizzaSizeType} from "./model/PizzaSizeType";

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
               ['Мясные' ] ),
    new Pizza( 2,
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
               ['Мясные' ] ),
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
               ['Мясные' ] ),
    new Pizza( 4,
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
               ['Мясные' ] ),
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
               ['Мясные' ] )
] );

export const appReducer = ( state:AppState = initialState, action:Action ) => {

    switch ( action.type ) {
        case SELECT_PIZZA_DOUGH: {
            return processSelectPizzaDoughAction( state, action.payload as SelectPizzaDoughActionPayload );
        }
    }

    return state;
}


function processSelectPizzaDoughAction( state: AppState, payload: SelectPizzaDoughActionPayload) {

    let currentPizza = state.pizzas.find( Pizza.isFor( payload.pizzaId ) );

    if( currentPizza === undefined ) {
        console.log( `This pizza is not found by id: ${payload.pizzaId}` );
        return state;
    }

    return state.pizzas.splice( state.pizzas.findIndex( Pizza.isFor( payload.pizzaId ) ), 1, currentPizza.selectDough( payload.selectedDough ) )
}
