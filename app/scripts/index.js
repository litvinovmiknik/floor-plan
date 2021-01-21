$(function() {
    $('.floor-plan__pointer').click(function() {
        $(this).parents('.row').find('.floor-plan__pointer').removeClass('floor-plan__pointer--active');
        $(this).addClass('floor-plan__pointer--active');

        let room = $(this).text();
        $(this).parents('.row').find('.apartment-desc__room').text(room);
        
        let area = $(this).data('area');
        $(this).parents('.row').find('.apartment-desc__area').text(area);

        let src = $(this).parents('.row').find('.apartment-plan__img').attr('src');
        let arr = src.split('/');
        arr.pop();
        let imgName = room + 'k' + '-' + area + '.jpg';
        arr.push(imgName);
        let newSrc = arr.join('/');
        $(this).parents('.row').find('.apartment-plan__img').attr('src', newSrc);
    });
});