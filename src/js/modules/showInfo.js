export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const msg = btn.closest('.module__info-show').nextElementSibling;
                msg.classList.add('animated', 'fadeIn');

                msg.classList.toggle('msg');
                msg.style.marginTop = '20px';
            })
        })
    }
}