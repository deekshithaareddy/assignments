function Product(props){
    // state
    const productObj=props.productObj
    // return a react element
    return(
        <div className="flex gap-2 ">
            <section>
            <h1 className="text-[25px]">{productObj.title}</h1>
            <img src="productObj.image" alt="Image" />
            <h2 className="text-[15px]">{productObj.category}</h2>
            <h3 className="text-[15px]">{productObj.description}</h3>
            <h4 className="text-[20px]">Rs.{productObj.price}/-</h4></section>
        </div>
    )
}

export default Product