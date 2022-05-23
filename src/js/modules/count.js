export function countFn(countItems) {

    countItems.forEach(countItem => {
        const count = countItem.querySelector('.input__count');
        const plus = countItem.querySelector('.btn__plus');
        const minus = countItem.querySelector('.btn__minus');

        function incrementHandler() {
            let val = parseInt(count.value) + 1;
            checkMaxAndMin(val);
        }

        function decrementHandler() {
            let val = parseInt(count.value) - 1;
            checkMaxAndMin(val);
        }

        function countInput() {
            let val = parseInt(count.value);
            checkMaxAndMin(val);
        }

        function checkMaxAndMin(val) {
            if (val >= 10) {
                count.value = 10;
            } else if (val <= 0) {
                count.value = 0;
                countHidden()
            } else {
                count.value = val;
                countShow()
            }
        }

        // вызов функций для элементов count
        minus.addEventListener('click', decrementHandler);
        plus.addEventListener('click', incrementHandler);
        count.addEventListener('input', countInput);


        function countShow() {
            count.classList.remove('hidden');
            minus.classList.remove('hidden');
        }
        function countHidden() {
            count.classList.add('hidden');
            minus.classList.add('hidden');
        }
    });
}