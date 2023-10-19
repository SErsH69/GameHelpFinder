import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import MainProd from '../blocks/modules/main_prod/main_prod.js';
import MainOtz from '../blocks/modules/main_otz/main_otz.js';
import MainFaq from '../blocks/modules/main_faq/main_faq.js';
import FaqPage from '../blocks/modules/faq_page/faq_page.js';
import Footer from '../blocks/modules/footer/footer.js';
import Modals from '../blocks/modules/modals/modals.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        header: new Header({
            isMobileMenuOpened: false,
        }),
        mainProd: new MainProd(),
        mainOtz: new MainOtz(),
        mainFaq: new MainFaq(),
        faqPage: new FaqPage(),
        footer: new Footer(),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        })
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.header.init();
        this.mainProd.init();
        this.mainOtz.init();
        this.mainFaq.init();
        this.faqPage.init();
        this.footer.init();
        this.modals.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
});