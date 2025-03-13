import './App.css';
import './components/Header';
import Header from './components/Header';
function App() {
  return (
    <div>
    <Header />
    <div className="cart" id="cart">
        <i className='bx bx-x cart__close' id="cart-close"></i>

        <h2 className="cart__title-center">My Cart</h2>

        <div className="cart__container">
            <article className="cart__card">
                <div className="cart__box">
                    <img src="assets/img/featured1.png" alt="" className="cart__img" />
                </div>

                <div className="cart__details">
                    <h3 className="cart__title">Jazzmaster</h3>
                    <span className="cart__price">₹1050</span>

                    <div className="cart__amount">
                        <div className="cart__amount-content">
                            <span className="cart__amount-box">
                                <i className='bx bx-minus' ></i>
                            </span>

                            <span className="cart__amount-number">1</span>

                            <span className="cart__amount-box">
                                <i className='bx bx-plus' ></i>
                            </span>
                        </div>

                        <i className='bx bx-trash-alt cart__amount-trash' ></i>
                    </div>
                </div>
            </article>
            
            <article className="cart__card">
                <div className="cart__box">
                    <img src="assets/img/featured3.png" alt="" className="cart__img" />
                </div>

                <div className="cart__details">
                    <h3 className="cart__title">Rose Gold</h3>
                    <span className="cart__price">₹850</span>

                    <div className="cart__amount">
                        <div className="cart__amount-content">
                            <span className="cart__amount-box">
                                <i className='bx bx-minus' ></i>
                            </span>

                            <span className="cart__amount-number">1</span>

                            <span className="cart__amount-box">
                                <i className='bx bx-plus' ></i>
                            </span>
                        </div>

                        <i className='bx bx-trash-alt cart__amount-trash' ></i>
                    </div>
                </div>
            </article>

            <article className="cart__card">
                <div className="cart__box">
                    <img src="assets/img/new1.png" alt="" className="cart__img" />
                </div>

                <div className="cart__details">
                    <h3 className="cart__title">Longines Rose</h3>
                    <span className="cart__price">₹980</span>

                    <div className="cart__amount">
                        <div className="cart__amount-content">
                            <span className="cart__amount-box">
                                <i className='bx bx-minus' ></i>
                            </span>

                            <span className="cart__amount-number">1</span>

                            <span className="cart__amount-box">
                                <i className='bx bx-plus' ></i>
                            </span>
                        </div>

                        <i className='bx bx-trash-alt cart__amount-trash' ></i>
                    </div>
                </div>
            </article>
        </div>

        <div className="cart__prices">
            <span className="cart__prices-item">3 items</span>
            <span className="cart__prices-total">₹2880</span>
        </div>
    </div>
    <main className="main">
        <section className="home" id="home">
            <div className="home__container container grid">
                <div className="home__img-bg">
                    <img src="assets/img/home.png" alt="" className="home__img" />
                </div>

                <div className="home__social">
                    <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                        Facebook
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="home__social-link">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                        Instagram
                    </a>
                </div>

                <div className="home__data">
                    <h1 className="home__title">NEW WATCH <br /> COLLECTIONS B720</h1>
                    <p className="home__description">
                        Latest arrival of the new imported watches of the B720 series, 
                        with a modern and resistant design.
                    </p>
                    <span className="home__price">₹1245</span>

                    <div className="home__btns">
                        <a href="#" className="button button--gray button--small">
                            Discover
                        </a>

                        <button className="button home__button">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="featured section container" id="featured">
            <h2 className="section__title">
                Featured
            </h2>

            <div className="featured__container grid">
                <article className="featured__card">
                    <span className="featured__tag">Sale</span>

                    <img src="assets/img/featured1.png" alt="" className="featured__img" />

                    <div className="featured__data">
                        <h3 className="featured__title">Jazzmaster</h3>
                        <span className="featured__price">₹1050</span>
                    </div>

                    <button className="button featured__button">ADD TO CART</button>
                </article>

                <article className="featured__card">
                    <span className="featured__tag">Sale</span>

                    <img src="assets/img/featured2.png" alt="" className="featured__img" />

                    <div className="featured__data">
                        <h3 className="featured__title">Ingersoll</h3>
                        <span className="featured__price">₹250</span>
                    </div>

                    <button className="button featured__button">ADD TO CART</button>
                </article>

                <article className="featured__card">
                    <span className="featured__tag">Sale</span>

                    <img src="assets/img/featured3.png" alt="" className="featured__img" />

                    <div className="featured__data">
                        <h3 className="featured__title">Rose gold</h3>
                        <span className="featured__price">₹890</span>
                    </div>

                    <button className="button featured__button">ADD TO CART</button>
                </article>
            </div>
        </section>

        <section className="story section container">
            <div className="story__container grid">
                <div className="story__data">
                    <h2 className="section__title story__section-title">
                        Our Story
                    </h2>

                    <h1 className="story__title">
                        Inspirational Watch of <br /> this year
                    </h1>

                    <p className="story__description">
                        The latest and modern watches of this year, is available in various 
                        presentations in this store, discover them now.
                    </p>

                    <a href="#" className="button button--small">Discover</a>
                </div>

                <div className="story__images">
                    <img src="assets/img/story.png" alt="" className="story__img" />
                    <div className="story__square"></div>
                </div>
            </div>
        </section>

        <section className="products section container" id="products">
            <h2 className="section__title">
                Products
            </h2>

            <div className="products__container grid">
                <article className="products__card">
                    <img src="assets/img/product1.png" alt="" className="products__img" />

                    <h3 className="products__title">Spirit rose</h3>
                    <span className="products__price">₹1500</span>

                    <button className="products__button">
                        <i className='bx bx-shopping-bag'></i>
                    </button>
                </article>

                <article className="products__card">
                    <img src="assets/img/product2.png" alt="" className="products__img" />

                    <h3 className="products__title">Khaki pilot</h3>
                    <span className="products__price">₹1350</span>

                    <button className="products__button">
                        <i className='bx bx-shopping-bag'></i>
                    </button>
                </article>

                <article className="products__card">
                    <img src="assets/img/product3.png" alt="" className="products__img" />

                    <h3 className="products__title">Jubilee black</h3>
                    <span className="products__price">₹870</span>

                    <button className="products__button">
                        <i className='bx bx-shopping-bag'></i>
                    </button>
                </article>

                <article className="products__card">
                    <img src="assets/img/product4.png" alt="" className="products__img" />

                    <h3 className="products__title">Fosil me3</h3>
                    <span className="products__price">₹650</span>

                    <button className="products__button">
                        <i className='bx bx-shopping-bag'></i>
                    </button>
                </article>

                <article className="products__card">
                    <img src="assets/img/product5.png" alt="" className="products__img" />

                    <h3 className="products__title">Duchen</h3>
                    <span className="products__price">₹950</span>

                    <button className="products__button">
                        <i className='bx bx-shopping-bag'></i>
                    </button>
                </article>
            </div>
        </section>

        <section className="testimonial section container">
            <div className="testimonial__container grid">
                <div className="swiper testimonial-swiper">
                    <div className="swiper-wrapper">
                        <div className="testimonial__card swiper-slide">
                            <div className="testimonial__quote">
                                <i className='bx bxs-quote-alt-left' ></i>
                            </div>
                            <p className="testimonial__description">
                                They are the best watches that one acquires, also they are always with the latest 
                                news and trends, with a very comfortable price and especially with the attention 
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial__date">March 27. 2021</h3>
    
                            <div className="testimonial__perfil">
                                <img src="assets/img/testimonial1.jpg" alt="" className="testimonial__perfil-img" />
    
                                <div className="testimonial__perfil-data">
                                    <span className="testimonial__perfil-name">Lee Doe</span>
                                    <span className="testimonial__perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial__card swiper-slide">
                            <div className="testimonial__quote">
                                <i className='bx bxs-quote-alt-left' ></i>
                            </div>
                            <p className="testimonial__description">
                                They are the best watches that one acquires, also they are always with the latest 
                                news and trends, with a very comfortable price and especially with the attention 
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial__date">March 27. 2021</h3>
    
                            <div className="testimonial__perfil">
                                <img src="assets/img/testimonial2.jpg" alt="" className="testimonial__perfil-img" />
    
                                <div className="testimonial__perfil-data">
                                    <span className="testimonial__perfil-name">Samantha Mey</span>
                                    <span className="testimonial__perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial__card swiper-slide">
                            <div className="testimonial__quote">
                                <i className='bx bxs-quote-alt-left' ></i>
                            </div>
                            <p className="testimonial__description">
                                They are the best watches that one acquires, also they are always with the latest 
                                news and trends, with a very comfortable price and especially with the attention 
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial__date">March 27. 2021</h3>
    
                            <div className="testimonial__perfil">
                                <img src="assets/img/testimonial3.jpg" alt="" className="testimonial__perfil-img" />
    
                                <div className="testimonial__perfil-data">
                                    <span className="testimonial__perfil-name">Raul Zaman</span>
                                    <span className="testimonial__perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="swiper-button-next">
                        <i className='bx bx-right-arrow-alt' ></i>
                    </div>
                    <div className="swiper-button-prev">
                        <i className='bx bx-left-arrow-alt' ></i>
                    </div>
                </div>

                <div className="testimonial__images">
                    <div className="testimonial__square"></div>
                    <img src="assets/img/testimonial.png" alt="" className="testimonial__img" />
                </div>
            </div>
        </section>

        <section className="new section container" id="new">
            <h2 className="section__title">
                New Arrivals
            </h2>
            
            <div className="new__container">
                <div className="swiper new-swiper">
                    <div className="swiper-wrapper">
                        <article className="new__card swiper-slide">
                            <span className="new__tag">New</span>
    
                            <img src="assets/img/new1.png" alt="" className="new__img" />
    
                            <div className="new__data">
                                <h3 className="new__title">Longines rose</h3>
                                <span className="new__price">₹980</span>
                            </div>
    
                            <button className="button new__button">ADD TO CART</button>
                        </article>

                        <article className="new__card swiper-slide">
                            <span className="new__tag">New</span>
    
                            <img src="assets/img/new2.png" alt="" className="new__img" />
    
                            <div className="new__data">
                                <h3 className="new__title">Jazzmaster</h3>
                                <span className="new__price">₹1150</span>
                            </div>
    
                            <button className="button new__button">ADD TO CART</button>
                        </article>

                        <article className="new__card swiper-slide">
                            <span className="new__tag">New</span>
    
                            <img src="assets/img/new3.png" alt="" className="new__img" />
    
                            <div className="new__data">
                                <h3 className="new__title">Dreyfuss gold</h3>
                                <span className="new__price">₹750</span>
                            </div>
    
                            <button className="button new__button">ADD TO CART</button>
                        </article>

                        <article className="new__card swiper-slide">
                            <span className="new__tag">New</span>
    
                            <img src="assets/img/new4.png" alt="" className="new__img" />
    
                            <div className="new__data">
                                <h3 className="new__title">Portuguese rose</h3>
                                <span className="new__price">₹1590</span>
                            </div>
    
                            <button className="button new__button">ADD TO CART</button>
                        </article>                       
                    </div>
                </div>
            </div>
        </section>

        <section className="newsletter section container">
            <div className="newsletter__bg grid">
                <div>
                    <h2 className="newsletter__title">Subscribe Our <br /> Newsletter</h2>
                    <p className="newsletter__description">
                        Don't miss out on your discounts. Subscribe to our email 
                        newsletter to get the best offers, discounts, coupons, 
                        gifts and much more.
                    </p>
                </div>

                <form action="" className="newsletter__subscribe">
                    <input type="email" placeholder="Enter your email" className="newsletter__input" />
                    <button className="button">
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </section>
    </main>
    <footer className="footer section">
        <div className="footer__container container grid">
            <div className="footer__content">
                <h3 className="footer__title">Our information</h3>

                <ul className="footer__list">
                    <li>1234 - Peru</li>
                    <li>La Libertad 43210</li>
                    <li>123-456-789</li>
                </ul>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">About Us</h3>

                <ul className="footer__links">
                    <li>
                        <a href="#" className="footer__link">Support Center</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Customer Support</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Copy Right</a>
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Product</h3>

                <ul className="footer__links">
                    <li>
                        <a href="#" className="footer__link">Road bikes</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Mountain bikes</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Electric</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Accesories</a>
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Social</h3>

                <ul className="footer__social">
                    <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                        <i className='bx bxl-facebook'></i>
                    </a>

                    <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                        <i className='bx bxl-twitter' ></i>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                        <i className='bx bxl-instagram' ></i>
                    </a>
                </ul>
            </div>
        </div>

        <span className="footer__copy">&#169; Yukti. All rigths reserved</span>
    </footer>

    <a href="#" className="scrollup" id="scroll-up"> 
        <i className='bx bx-up-arrow-alt scrollup__icon' ></i>
    </a>



    {/* <!--=============== SWIPER JS ===============-->
    <script src="assets/js/swiper-bundle.min.js"></script>

    <!--=============== MAIN JS ===============-->
    <script src="assets/js/main.js"></script> */ }
</div>
  );
}

export default App;
