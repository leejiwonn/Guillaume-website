$(document).ready(function () {
    $('#fullpage').fullpage({
       
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage','6rdPage'],
        menu: '#menu',
        afterLoad: function (anchorLink, index) {

            //section 2
            if (index == 2) {
                //moving the image
               

            }

            //section 3
            if (anchorLink == '3rdPage') {
                //moving the image
                $('#section2').find('.intro').delay(500).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo');
            }
        }
    });

});
