import React, {Component} from 'react'
import Aux from '../../../hoc/Auxuliary/Auxuliary'
import Button from '../../../components/UI/Button/Button'
class OrderSummary extends Component
{
    componentDidUpdate() {
        console.log("oder Summary will update")
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>    
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicioud burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType='Success'>CONTINUE</Button>
            </Aux>
        ) 
    }
} 
    


export default OrderSummary