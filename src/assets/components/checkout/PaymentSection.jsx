import styles from './PaymentSection.module.css'

const PaymentSection = () => {
  return (
    <div className="col-md-4">
        <div className={`card ${StyleSheet.card}`}>
            <div className="card-header" style={{backgroundColor:'#6050DC', color:'white'}}>
                <h5>Payment Option</h5>
             </div>
             <div className="card-body">
                {/* paypal button */}
                <button className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} id='paypal-button'>
                    <i className="bi bi-paypal">Pay with Paypal</i>
                </button>

                {/* flutterwave button */}
                <button className={`btn btn-warning w-100 ${styles.flutterwaveButton}`} id='flutterwave-button'>
                    <i className="bi bi-paypal">Pay with Flutter</i>
                </button>
             </div>
        </div>
    </div>
  )
}

export default PaymentSection