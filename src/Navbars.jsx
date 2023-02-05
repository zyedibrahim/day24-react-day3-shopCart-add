export function Navbars({ count }) {


  return (


    <div>


      <header>

        <nav className="navbar navbar-dark navbar-expand-lg ">
          <div className="container">
            <span className="navbar-brand" href="#"><i className="me-2 fa-brands fa-opencart"></i>Cart Gos</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span className="nav-link active" aria-current="page" href="#">Home</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" href="#">About</span>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </span>
                  <div className="dropdown-menu ">
                    <li><span className="dropdown-item" href="#">New Products</span></li>
                    <li><span className="dropdown-item" href="#">Arrivals</span></li>
                    <li className="dropdown-divider"></li>
                    <li><span className="dropdown-item" href="#">Offers</span></li>
                  </div>
                </li>
                <li className="nav-item">
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-warning " href="#"> <i className="fa-solid me-2 fa-cart-plus"></i> Cart {count}</button>
                </li>


              </ul>

            </div>
          </div>
        </nav>
        {/* <Popup id="exampleModal" /> */}





      </header>


      <div className="container mt-5 mb-5 rounded">



        <div className="row bg-light">

          <div className="col-12 px-4 ">
            <h1 className=' text-center  text-start display-3'>Mango is National fruit Of India </h1>
            <p className='lead text-start'>National Fruit of India - Mango - Designated as the King of all fruits by Indians since long, ripe fleshy mangoes are certainly very tasty. The raw ones can be used to make spicy pickles that are an important part of Indian cuisine. Belonging to the Mangifera indica species, mangoes are native to India and are the most cultivated fruits of the tropical world. A rich source of Vitamins A, C and D, India hosts over 100 varieties of juicy mangoes that can be of green, orange, yellow and shades of red. They can be of many sizes and shapes. Historians have mentioned the deliciousness of this savory fruit in the ancient times. The famous Indian poet Kalidasa has penned praises on mangoes while historians mention that the great Alexander and the famous Chinese traveler had tasted its divine flavor.</p>

          </div>

        </div>







      </div>



    </div>

  );


}
