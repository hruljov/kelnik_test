(function( $, g ) {
   var buttonScroll = $('.button--scroll'),
       body = $('body, html'),
       sort = $('.sort__item'),
       submitButton = $('#submit');
    if ( buttonScroll.length > 0 ) {
        buttonScroll.on('click', function( e ) {
            eventScrollTop();
            e.preventDefault();
        });
    }
    sort.on('click', function( e ) {
        changeSort( $(this) );
        e.preventDefault();
    });
    submitButton.on('click', function( e ) {
        checkEmail( $(this), e );
    });
    function eventScrollTop() {
        body.animate({
            scrollTop: 0
        }, 600);
    }
    function changeSort(item) {
        var sortTopCls = 'sort__item--top',
            sortBottomCls = 'sort__item--bottom';
        if ( item.hasClass(sortBottomCls) ) {
            item.addClass(sortTopCls).
                removeClass(sortBottomCls);
        } else if(item.hasClass(sortTopCls)) {
            item.addClass(sortBottomCls).
                removeClass(sortTopCls);
        } else {
            item.addClass(sortBottomCls);
        }
    }
    function checkEmail( button, event ) {
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i,
            error = $('.textfield__error'),
            email = $('#email'),
            check = email.val().search( pattern );
        if( check !== 0 || email.val() === '' ){
            error.css('display', 'inline-block');
            setTimeout(function () {
                error.fadeOut(300);
            }, 2000);
            event.preventDefault();
        } else {
            error.fadeOut(300);
            button.submit();
        }
    }
}( jQuery, jQuery( window ) ));
