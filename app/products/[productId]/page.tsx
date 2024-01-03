"use client"

async function getSingleProduct(id:string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function singleProduct({params}:{params:{productId:string}}) {
    let product=await getSingleProduct(params.productId)

    return (
        <div>
        
          <style jsx>
            {`
              li{
                margin:20px auto;
              }

              a{
                text-decoration:none;
              }
            `}
          </style>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={product.image} alt="" />
                </div>
                <div className="card_content">
                  <a href={`/products/${product.id}`}><h2 className="card_title">{product.title}</h2></a>
                  <p className="card_text">{product.description}</p>
                  <p className="price">{product.price}$</p>
                </div>
              </div>
            </li>
        </div>
    )
}