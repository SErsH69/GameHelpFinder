import $ from 'jquery';
import 'slick-carousel';

const MainOtz = class MainOtz {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_otz').slick({
                slidesToShow: 4,
                arrows: true,
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

export default MainOtz;