"use client"


async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Home() {
  const products=await getData()
  
  return (
    <main className='main'>
       <style jsx>{`
           *,
           *::before,
           *::after {
             box-sizing: border-box;
             margin: 0;
           }
           
           body {
             color: #272727;
             font-family: 'Quicksand', serif;
             font-style: normal;
             font-weight: 400;
             letter-spacing: 0;
             padding: 1rem;
           }
           
           .main{
             max-width: 1200px;
             margin: 60px auto;
           }
           
           h1 {
               font-size: 24px;
               font-weight: 400;
               text-align: center;
               margin-top: 45px;
               margin-bottom: 45px;
           }
           
           img {
             height: 400px;
             max-width: 100%;
             vertical-align: middle;
             margin: 10px auto;
           }
           
           .price {
             color: #000;
             padding: 0.8rem;
             font-size: 14px;
             text-transform: uppercase;
             border-radius: 4px;
             font-weight: 400;
             display: block;
             width: 100%;
             cursor: pointer;
             border: 1px solid rgba(255, 255, 255, 0.2);
             background: transparent;
           }
           
           
           .cards {
             display: flex;
             flex-wrap: wrap;
             list-style: none;
             margin: 0;
             padding: 0;
           }
           
           .cards_item {
             display: flex;
             padding: 1rem;
           }
           
           @media (min-width: 40rem) {
             .cards_item {
               width: 50%;
             }
           }
           
           @media (min-width: 56rem) {
             .cards_item {
               width: 33.3333%;
             }
           }
           
           .card {
             background-color: white;
             border-radius: 0.25rem;
             box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
             display: flex;
             flex-direction: column;
             overflow: hidden;
           }
           
           .card_content {
             padding: 1rem;
             
           }
           
           .card_title {
             color: #272727;
             font-size: 1.1rem;
             font-weight: 700;
             letter-spacing: 1px;
             text-transform: capitalize;
             margin: 0px;
           }
           
           .card_text {
             color: #272727;
             font-size: 0.875rem;
             line-height: 1.5;
             margin-bottom: 1.25rem;    
             font-weight: 400;
           }
           
           
      `}</style>
        <ul className="cards">
       {products.map((product) => (
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
      ))}
   </ul>
    </main>
   
  )
}