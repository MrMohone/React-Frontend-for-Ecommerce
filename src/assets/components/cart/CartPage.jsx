import {useState, useEffect } from 'react'
import CartItem from './CartItem'
import CartSummery from './CartSummery'
import api from '../../../api'
import Spinner from '../ui/Spinner'

const CartPage = ({setNumberCartItems}) => {
    const cart_code = localStorage.getItem('cart_code')
    const [cartitems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0.00)   
    const tax = 4.00
    const [loading ,setLoading] = useState(false)


    useEffect(function(){
        setLoading(true)
        api.get(`get_cart?cart_code=${cart_code}`)
        .then(res =>{
            console.log(res.data)
            setLoading(false)
            setCartItems(res.data.items)
            setCartTotal(res.data.sum_total)
        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
        })
    }, [])

    if(loading){
        return <Spinner loading={loading}/>
    }

    if(cartitems.length < 1){
        return(<div className="alert alert-primary my-5" role="alert">
          You haven't added any items to your cart yet.
        </div>
        )
    } 


  return (
    <div className="container my-3 py-3"
    style={{height:'80vh', overflowY:'scroll'}}>
        <h5 className="mb-4">Shopping Cart</h5>
        <div className="row">
            <div className="col-md-8">
                {cartitems.map(item => <CartItem  key={item.id} item={item} 
                cartitems={cartitems} 
                setCartTotal={setCartTotal}
                setNumberCartItems={setNumberCartItems}
                setCartItems={setCartItems}
                />)}
            </div>
            <CartSummery cartTotal={cartTotal} tax={tax}/>
        </div>
    </div>
  )
}

export default CartPage