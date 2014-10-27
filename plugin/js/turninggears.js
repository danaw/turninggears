(function($){
    $.fn.turningGears = function() {
// Control the spinning cogs.
$(document).ready(function() 
{    
    var height = $(document).height();
            
    $(document).scroll(function() 
    {
        // Current scroll position. Rotates based on user scrolling up or down.
        currentScrollPosition = $(document).scrollTop();
        degrees = currentScrollPosition/height * 360; // Multiply by 360 to get full 360 rotation.        
        neg = 360 - degrees;
        
        $('.cog-boy-1').css('transform', 'rotate(' + degrees + 'deg)');
        $('.cog-boy-2').css('transform', 'rotate(' + neg + 'deg)');
        $('.cog-boy-3').css('transform', 'rotate(' + degrees + 'deg)');
        $('.cog-boy-4').css('transform', 'rotate(' + neg + 'deg)');
        $('.cog-girl-1').css('transform', 'rotate(' + degrees + 'deg)');
        $('.cog-girl-2').css('transform', 'rotate(' + neg + 'deg)');
        $('.cog-girl-3').css('transform', 'rotate(' + degrees + 'deg)');
        $('.cog-girl-4').css('transform', 'rotate(' + neg + 'deg)');
        
    });
});
}
$().turningGears();
})(jQuery);
