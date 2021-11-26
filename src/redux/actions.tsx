import SelectPizzaDoughActionPayload from "./action/SelectPizzaDoughActionPayload";
import {ADD_PIZZA_TO_BASKET, RESET_PIZZA_TAG, SELECT_PIZZA_DOUGH, SELECT_PIZZA_SIZE, SELECT_PIZZA_TAG} from "./types";
import {PizzaDoughType} from "./model/PizzaDoughType";
import {PizzaSizeType} from "./model/PizzaSizeType";
import SelectPizzaSizeActionPayload from "./action/SelectPizzaSizeActionPayload";
import Pizza from "./model/Pizza";
import AddPizzaToBasketActionPayload from "./action/AddPizzaToBasketActionPayload";
import SelectPizzaTagActionPayload from "./action/SelectPizzaTagActionPayload";

export function selectPizzaDough( pizzaId: number, selectedPizzaDough:PizzaDoughType ): SelectPizzaDoughAction {
    return {
      type: SELECT_PIZZA_DOUGH,
      payload: new SelectPizzaDoughActionPayload( pizzaId, selectedPizzaDough )
    }
}

export function selectPizzaSize( pizzaId: number, selectedPizzaSize: PizzaSizeType ): SelectPizzaSizeAction {
    return {
        type: SELECT_PIZZA_SIZE,
        payload: new SelectPizzaSizeActionPayload( pizzaId, selectedPizzaSize )
    }
}

export function addPizzaToBasket( pizza: Pizza ): AddPizzaToBasketAction {
    return {
        type: ADD_PIZZA_TO_BASKET,
        payload: new AddPizzaToBasketActionPayload( pizza )
    }
}

export function selectPizzaTag( pizzaTagId: number ): SelectPizzaTagAction {
    return {
        type: SELECT_PIZZA_TAG,
        payload: new SelectPizzaTagActionPayload( pizzaTagId )
    }
}

export function resetPizzaTag(): ResetPizzaTagAction {
    return {
        type: RESET_PIZZA_TAG
    }
}


interface SelectPizzaDoughAction {
    type: string,
    payload: SelectPizzaDoughActionPayload
}

interface SelectPizzaSizeAction {
    type: string,
    payload: SelectPizzaSizeActionPayload
}

interface AddPizzaToBasketAction {
    type: string,
    payload: AddPizzaToBasketActionPayload
}

interface SelectPizzaTagAction {
    type: string,
    payload: SelectPizzaTagActionPayload
}

interface ResetPizzaTagAction {
    type: string
}