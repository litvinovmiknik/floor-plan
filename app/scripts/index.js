import '../blocks/floor-plan/floor-plan.js';
import '../blocks/popup-form/popup-form.js';
import '../blocks/popup-success/popup-success.js';

$(function() {
    $('input[name="phone"]').mask("+7 (999) 999-9999");

    let hash = $(location).attr('hash');
    if (hash.indexOf('popup') === 1) {
        let popupClassName = hash.replace(/^#/, '.');
        $(popupClassName).css('display', 'flex');
    }
});