/**
 * Created by LJacobs on 4/11/2016.
 */

/*global window, console, $, jquery*/
$(function () {
    var item = $('.accordian-item'),
        content = $('.accordian-content');

    //click event
    $(item).on("click", function(e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        $(content).each(function(){
            $(this).slideUp();
            if($(this).attr('data-id') == id) {
                $(this).slideDown();
            }
        });
    });
});