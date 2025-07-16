import OrderSummery from './OrderSummery'
import PaymentSection from './PaymentSection'
import useCartData from '../../../hooks/useCartData'

const CheckoutPage = () => {
   const {cartitems, setCartItems, cartTotal, setCartTotal, loading, tax} = useCartData()

  return (
    <div className="container my-3">
        <div className="row">
            <OrderSummery cartitems={cartitems}/>
            <PaymentSection />
        </div>
    </div>
  )
}

export default CheckoutPage