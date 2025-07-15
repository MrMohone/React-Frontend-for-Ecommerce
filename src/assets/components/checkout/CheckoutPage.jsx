import OrderSummery from './OrderSummery'
import PaymentSection from './PaymentSection'

const CheckoutPage = () => {
  return (
    <div className="container my-3">
        <div className="row">
            <OrderSummery />
            <PaymentSection />
        </div>
    </div>
  )
}

export default CheckoutPage