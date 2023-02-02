import React from 'react'

function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i0.wp.com/www.learncram.com/wp-content/uploads/2021/07/Concept-of-Financial-Market.jpg?w=728&ssl=1" className="d-block w-100 vh-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.warriortrading.com/2018/06/blog_financial_markets.jpg" className="d-block w-100 vh-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="http://s3-prod.adage.com/s3fs-public/20220811_dcFinancial_3x2.jpg" className="d-block w-100 vh-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://inlegal.eu/wp-content/uploads/2020/06/Tegel-Money-Finance-and-the-Economy.jpg" className="d-block w-100 vh-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://worldfinancialreview.com/wp-content/uploads/2021/03/Business-Data-696x521-1.png" className="d-block w-100 vh-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1096812262/photo/graph-of-financial-growth-global-communications-binary-smart-phones-and-world-internet.jpg?s=1024x1024&w=is&k=20&c=B9WPQ5eZrudaS43IXBAZrryrhxW_mKHXvk9-wlieE9A=" className="d-block w-100 vh-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    

    </div>
  )
}

export default Home