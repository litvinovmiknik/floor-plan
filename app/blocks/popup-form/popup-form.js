$(function() {
    let $popup = $('.popup-form');

    $('.apartment-desc__button').on('click', function() {
        let $row = $(this).parents('.row');

        let section = $row.find('.floor-plan__section').text();
        let room = $row.find('.apartment-desc__room').text();
        let area = $row.find('.apartment-desc__area').text();

        $('.popup-form__section').val(section);
        $('.popup-form__room-value').val(room);
        $('.popup-form__area-value').val(area);

        $popup.css('display', 'flex');
    });

    $popup
        .on('click', function() {
            $(this).hide();
        })
        .on('click', '.popup-form__form', function(e) {
            e.stopPropagation();
        });
});