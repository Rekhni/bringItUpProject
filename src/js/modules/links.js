export default class Links {
    constructor() {
        this.modules = document.querySelectorAll('.module');
        this.links = document.querySelectorAll('.card');
    }

    init() {
        this.modules[0].style.display = 'none';
        const hash = window.location.hash;
        if(hash) {
            this.slideIndex = +hash.replace('#', '');
            this.modules[this.slideIndex - 1].style.display = 'block';
        }
    }
}