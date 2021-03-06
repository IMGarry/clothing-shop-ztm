import React from 'react'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='cart-item-count'>0</span>
    </div>
)

const mapDispachToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispachToProps)(CartIcon)