
$(document).ready(function(){
    // Hide div by setting display to none

    // Show div by removing inline display none style rule
    $("#level1_ka_one1").click(function(){
        $(".list-groupltwo").hide();
        $("#list-group2").show();
    });
    
    $("#level1_ka_one2").click(function(){
        $(".list-groupltwo").hide();
        $("#list-group3").show();
    });

    
    $("#level2_ka_1").click(function(){
        $(".many-tbody").hide();
        $("#one-one").show();
    });


    $("#level2_ka_2").click(function(){
        $(".many-tbody").hide();
        $("#one-two").show();
    });

    

    
});