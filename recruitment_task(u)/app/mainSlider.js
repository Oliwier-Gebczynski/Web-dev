const images = ["main_bg1.png", "main_bg2.png", "main_bg3.png"];
    
$(function () {
        let i = 0;
        $("#main").css("background-image", "url(sources/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#main").fadeOut("slow", function () {
                $(this).css("background-image", "url(sources/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
    });