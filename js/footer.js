$(function(){
    $('#footer_nat').change(function(){
        var tmp=$('#footer_nat>option:selected').val();
        if(tmp=='ko'){
            $('#phone').text('+82 2 3440 5876')
        }
        if(tmp=='us'){
            $('#phone').text('+1 2 3440 5876')
        }
        if(tmp=='ch'){
            $('#phone').text('+86 2 3440 5876')
        }
        if(tmp=='uk'){
            $('#phone').text('+44 2 3440 5876')
        }
        if(tmp=='ja'){
            $('#phone').text('+27 2 3440 5876')
        }
    });
});