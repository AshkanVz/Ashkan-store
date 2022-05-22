import React, {useReducer, createContext} from 'react';

const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
}
const subItems = items =>{
    const itemsCounter = items.reduce((total,product) => total + product.quantity , 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter , total}
}
const cartReducer = (state , action) =>{
    console.log(state);
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1
                    
                })
            }
            return{
                ...state,
                selectedItems : [...state.selectedItems],
                ...subItems(state.selectedItems),
                checkout : false
            }
        case "REMOVE_ITEM":
            const newselectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            const indexC = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexC].quantity--;
            return{
                ...state,
                selectedItems:[...newselectedItems ],
                ...subItems(state.selectedItems)
                
                
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...subItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...subItems(state.selectedItems)
            }
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:true
            }
        case "CLEAR":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:false
            }
        default:
        return state;
           
    }
         
}
export const CartContext = createContext()
const Cartcontextprovider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer,initialState)
    return (
        <div>
            <CartContext.Provider value={{state, dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default Cartcontextprovider;