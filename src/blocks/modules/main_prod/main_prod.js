import $ from 'jquery';
import 'slick-carousel';

const MainProd = class MainProd {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_prod').slick({
                slidesToShow: 4,
                arrows: false,
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true
                    }
                    }
                ]
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainProd;