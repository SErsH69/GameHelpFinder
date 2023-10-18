const MainFaq = class MainFaq {
    constructor(){}
    openFaq() {
        document.addEventListener('DOMContentLoaded', function () {
            var faqBlocks = document.querySelectorAll('.main_faq__block');
            faqBlocks.forEach(function (block) {
                block.addEventListener('click', function () {
                    this.classList.toggle('isActive');
                });
            });
        });
    }
    init() {
        this.openFaq();
    }
}

export default MainFaq;