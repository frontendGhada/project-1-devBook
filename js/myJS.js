var scrollbutton = $("#scroll-top");
scrollbutton.click(function()
                   {
                    $("html,body").animate({scrollTop:0},600);
                   });