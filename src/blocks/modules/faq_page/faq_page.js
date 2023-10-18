const FaqPage = class FaqPage {
    constructor(){}
    openFaq() {
        document.addEventListener('DOMContentLoaded', function () {
            var faqBlocks = document.querySelectorAll('.faq_page__block');
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

export default FaqPage;