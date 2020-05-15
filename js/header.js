$(function(){
    // submenu event
    $('#submenu_btn,.nav>ul>li:first-child').click(function(){
        var submenuHeight=$('.submenu').height();
       //  console.log(submenuHeight);
        var submenuBottom=$('.submenu').css('bottom');
        // console.log(submenuBottom);
        if(submenuBottom=='80px'){
           close_sub_menu();
          $('.submenu').css('bottom','-'+submenuHeight+'px');
        }else{
          $('.submenu').css('bottom','100%');
        }
      });
    //  subwatch event
    watchPaddingTop();  
    $('#clock_btn').click(function(){
      watchPaddingTop();
    });
    $(window).resize(function(){
        var subwatchBottom=$('.subwatch').css('bottom');
        if(subwatchBottom!='80px'){
          watchPaddingTop();
          fsubwatchBottom();
        }
      });
   $('#clock_btn').click(function(){
    var subwatchBottom=$('.subwatch').css('bottom');
     if(subwatchBottom=='80px'){
      close_sub_menu()
      fsubwatchBottom();
     }else{
       $('.subwatch').css('bottom','100%');
     }
   });
   function fsubwatchBottom(){
    var subwatchHeight=$('.subwatch').height();
    $('.subwatch').css('bottom','-'+subwatchHeight+'px');
   }

   function watchPaddingTop(){
      var imgWidth=$('.watches img').width()
      //  console.log(imgWidth);
      $('.watches').css('padding-top',imgWidth*1.5+'px');
   }
   
    // search event
    $('#search_btn').click(function(){
        var tmp=$('.search_form').css('display');
        if(tmp=='none'){
          $('.submenu').css('bottom','100%');
          $('.subwatch').css('bottom','100%');
          $('.search_form').css('display','flex');
          $('#search01').focus();
        }else if(tmp=='flex'){
          $('.search_form').css('display','none');
          $('#search01').blur();
        }
      });
    //   login event
    $('#login_open_btn').click(function(){
        $('.login_form').show();
      });
      $('#close_btn').click(function(){
        $('.login_form').hide();
      });
      $('.iwc_join>ul>li').click(function(){
        $('.iwc_join>ul>li').removeClass('active');
        $(this).addClass('active');
      });
      $('.iwc_join>div>input').focus(function(){
        $('.iwc_join>div>input').prev().removeClass('active');
        $(this).prev('label').addClass('active');
      });
      $('.iwc_join>div>input').focusout(function(){
        $('.iwc_join>div>input').prev().removeClass('active');
      });
      $('.iwc_join>div>input').focus(function(){
        $('.iwc_join>div>input').removeClass('active');
        $(this).addClass('active');
      });
      $('.iwc_join>div>input').focusout(function(){
        $('.iwc_join>div>input').removeClass('active');
      });
      $('input[value="LOG IN"]').click(function(){
        var userId=$('#user_id').val();
        console.log(userId);
        var userPass=$('#user_pass').val();
        console.log(userPass);
        if(userId==''||userPass==''){
          $('.iwc_join>div>input').css('border-bottom-color','red')
          $('.iwc_join>div>input').prev().css('color','red')
          $('.iwc_join>div').addClass('active');
          $('#user_id').focus();
        }
      });
    //   lang box event
    $('.lang_container>h4').click(function(){
        $(this).next().slideToggle(200);
     });
     $('.lang_container>ul>li').click(function(){
       var natLang=$(this).children().text();
       $(this).parent().prev().text(natLang);
       $(this).parent().slideUp(200);
     });
     $('#lang_btn').click(function(){
       $('.lang_box').toggle();
       $('.rotate_sim').toggleClass('active');
     });
    //  close function
    function close_sub_menu(){
    $('.subwatch').css('bottom','100%');
    $('.submenu').css('bottom','100%');
    $('.search_form').css('display','none');
    }
});