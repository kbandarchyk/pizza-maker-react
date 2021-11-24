import SelectPizzaDoughActionPayload from "./action/SelectPizzaDoughActionPayload";
import {SELECT_PIZZA_DOUGH} from "./types";
import {PizzaDoughType} from "./model/PizzaDoughType";

export function selectPizzaDough( pizzaId: number, selectedPizzaDough:PizzaDoughType ): selectPizzaDoughAction {
    return {
      type: SELECT_PIZZA_DOUGH,
      payload: new SelectPizzaDoughActionPayload( pizzaId, selectedPizzaDough )
    }
}


interface selectPizzaDoughAction {
    type: string,
    payload: SelectPizzaDoughActionPayload
}