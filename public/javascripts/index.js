$(document).ready(function() {
    $(".children").click(function(){
        $(".children").show()
        if(shown) {
            $(".children").hide()
        }
        else {
            $(".children").show()
        }
        shown = !shown;
    })
});