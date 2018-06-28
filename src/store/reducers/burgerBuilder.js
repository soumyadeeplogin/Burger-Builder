import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    const updatedIndgredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedIndgredients = updateObject(state.ingredients,updatedIndgredient)
            const updatedState = {
                ingredients: updatedIndgredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedIndgs = updateObject(state.ingredients,updatedIng)
            const updatedSt = {
                ingredients: updatedIndgs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        return updateObject(state, updatedSt)
}

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    })
}

const fetchIngredientFailed = (state, action) => {
    updateObject(state, {error: true})
}

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action)

        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action)

        case actionTypes.SET_INGREDIENTS:
            return setIngredient(state,action)

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientFailed(state,action)
            
        default:
            return state
    }
}

export default reducer