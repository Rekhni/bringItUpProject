export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(e) {}
    }

    bindTriggers(container, counter, items, plusSelector) {
        container.querySelector(plusSelector).addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[items.length - 1].remove();
            }
        })
    }


    hideItems(items) {
        items.forEach((item, i, arr) => {
            item.classList.add('animated', 'fadeIn');
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems(this.newItems);
            this.hideItems(this.oldItems);
            this.bindTriggers(this.oldOfficer, this.oldCounter, this.oldItems, '.plus');
            this.bindTriggers(this.newOfficer, this.newCounter, this.newItems, '.plus');
        } catch(e){}
    }

}


