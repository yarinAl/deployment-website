import './App.css';

const logo = require('./images/img1.png')

function App() {
  return (
    <div>
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="https://www.linkedin.com/in/yarin-alkalai/" class="nav__logo">Linkedin</a>
                </div>
                
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <div class="nav__close" id="nav-close">
                        <i class='bx bx-x'></i>
                    </div>

                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Blog</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <section class="home" id="home">
                <div class="home__container bd-grid">
                    <div class="home__img">
                        <img src={logo} alt="" data-speed="-2" class="move"/>
                        <img src="assets/img/img2.png" alt="" data-speed="2" class="move"/>
                        <img src="assets/img/img3.png" alt="" data-speed="2" class="move"/>
                        <img src="assets/img/img4.png" alt="" data-speed="-2" class="move"/>
                        <img src="assets/img/img5.png" alt="" data-speed="-2" class="move"/>
                        <img src="assets/img/img6.png" alt="" data-speed="2" class="move"/>
                    </div>

                    <div class="home__data">
                        <h1 class="home__title">Yarin's Website<br/> Online Cv</h1>
                        <p class="home__description">Website <br/> Online Cv.</p>
                        <a href="https://github.com/yarinAl" class="home__button">My Github</a>
                    </div>
                </div>
            </section>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

        <script src="assets/js/main.js"></script>
    </div>
  );
}

export default App;
