const Footer = class Footer {
    constructor(){}
    openMenu() {
        document.addEventListener('DOMContentLoaded', function () {
            // Function to handle the click event
            function handleMenuClick(event) {
                var target = event.target;
    
                // Check if the clicked element is an anchor tag inside a menu item
                if (target.matches('.footer__menu > ul > li')) {
                    // Check if the window width is 1023 pixels or less
                    if (window.innerWidth <= 1023) {
                        // Prevent the default behavior of the anchor tag (e.g., prevent navigation)
                        // event.preventDefault();
    
                        // Remove or add the 'isActive' class to the parent menu item
                        target.closest('li').classList.toggle('isActive');
                    }
                }
            }
    
            // Attach the click event listener to the document
            document.addEventListener('click', handleMenuClick);
        });
    }
    init() {
        this.openMenu();
    }
}

export default Footer;