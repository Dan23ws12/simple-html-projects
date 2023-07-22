import "./css/DisplayProducts.css"

type Product = {
    name: string
    src: string
    price: number
}
interface ProductList {
    products: Product[]
}

function DisplayProducts({products} : ProductList){
    const productDiv = (product: Product) => {
        return <div className="products">
            <img src={product.src} alt={product.name + "picture"} />
            <p>{product.name} <br />
                {product.price}
            </p>
        </div>
    }


    return <>
        <ul id="products_dist_lst">
        {products.map(product => 
            (<li key = {product.name}>
                {productDiv(product)}
            </li>
            ))}
        </ul>
    </>

}

export default DisplayProducts