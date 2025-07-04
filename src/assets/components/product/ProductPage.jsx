import { useParams } from "react-router-dom"
import ProductPagePlaceHolder from "./productPagePlaceHolder"
import RelatedProducts from "./RelatedProducts"
import { useEffect, useState } from "react"
import api from "../../../api"
import { BASE_URL } from "../../../api"

const ProductPage = () => {

    const {slug} = useParams()
    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        setLoading(true)
        api.get(`product_detail/${slug}`)//'product_detail' <-- is backend url to get detial
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
            setSimilarProducts(res.data.similar_products)
            setLoading(false)
        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
        })
    }, [slug])

    if(loading){
         return <ProductPagePlaceHolder/>
    }

  return (
    <div>
        <section className='py-3'>
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" 
                        src={`${BASE_URL}${product.image}`} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>{`$${product.price}`}</span>
                        </div>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Aliquam, maxime sint. Iure magnam ipsam facere nemo animi? 
                             Nostrum, alias quasi eligendi commodi quisquam illo. Commodi, 
                            laboriosam laborum. Nulla, accusantium tempore?
                        </p>
                        <div className="d-flex">
                            <button className='btn btn-outline-dark flex-shirink-0'
                            type='button'>
                                <i className="bi-cart-fill me-1"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <RelatedProducts products={similarProducts}/>
    </div>
  )
}

export default ProductPage