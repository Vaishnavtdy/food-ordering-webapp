export const initialState = {
    basket: []
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => (item.price*item.qty)+ amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            if (!state.basket.find(item => item.id === action.item.id)) {
                state.basket.push({
                    ...action.item,
                    qty: 1
                })
            }

            return {
                ...state,
                basket: [...state.basket]
            }
        case "INCREMENT_QTY":
            return {
                ...state,
                basket: state.basket.map(basketItem =>
                    basketItem.id === action.item.id
                        ? { ...basketItem, qty: basketItem.qty + 1 }
                        : basketItem,
                ),
            };

        case "DECREMENT_QTY":
            return {
                ...state,
                basket: state.basket.map(basketItem =>
                    basketItem.id === action.item.id
                        ? {
                            ...basketItem,
                            qty: basketItem.qty !== 1 ? basketItem.qty - 1 : 1,
                        }
                        : basketItem,
                ),
            };

        case "REMOVE_FROM_CART":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
              );
              let newBasket = [...state.basket];
        
              if (index >= 0) {
                newBasket.splice(index, 1);
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
        
              return {
                ...state,
                basket: newBasket
              }
        default:
            return state;
    }
}

export default reducer;