$(document).ready(() => {
    let height = $('.bestBlock__card').outerHeight(true);
    console.log(height)

    let actualHeight = height * 3 + (height * (22/100));
    let blurHeight = height + 10 + (height * (22/100));
    console.log(actualHeight)

    $('.bestBlock__grid').css('max-height', actualHeight)
    $('.bestBlock__blurBlock').css('height', blurHeight)

    $( ".textBlock__wrap" ).tabs()

    $('.faqBlock__heading').closest('.faqBlock__item').find('.faqBlock__body').slideToggle()
    $('.faqBlock__heading').closest('.faqBlock__item--toggled').find('.faqBlock__body').slideToggle()

    $('.faqBlock__heading').click(function() {
        $(this).closest('.faqBlock__item').find('.faqBlock__body').slideToggle()
        $(this).closest('.faqBlock__item').toggleClass('faqBlock__item--toggled')
    })
})