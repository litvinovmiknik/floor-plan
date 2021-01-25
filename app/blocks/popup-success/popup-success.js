$(function() {
    let $success = $('.popup-success');

    $('.popup-form__form').on('submit', function(e) {
        $('.popup-form').hide();
        $success.css('display', 'flex');
        e.preventDefault();
    });

    $success
        .on('click', function() {
            $(this).hide();
        })
        .on('click', '.popup-success__container', function(e) {
            e.stopPropagation();
        });
});