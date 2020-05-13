$( document ).ready(function(){

$(window).scroll(function() {
	var scroll = $(this).scrollTop();
	if(scroll > 0){
		$("#imgheader").css({"opacity":"1","top":"0"});
	}else if(scroll == 0){
		$("#imgheader").css({"opacity":"0","top":"-200px"});
	}
});
   
    setInterval(function(){
    	$("#car1").addClass("car1anim");
     },1500);
    setInterval(function(){
    	$("#car2").addClass("car2anim");
     },1800);
    setInterval(function(){
    	$("#car3").addClass("car3anim");
     },2200);
    setInterval(function(){
    	$("#car4").addClass("car4anim");
     },2600);
    setInterval(function(){
    	$("#car5").addClass("car5anim");
     },3000);
    setInterval(function(){
    	$("#car6").addClass("car6anim");
     },3400);
    
    var wid1 = 20;
	  var wid2 = 0;
    var wid3 = 35;
    
    setInterval(function(){
    	wid1+=0.01;
    	wid2+=0.01;
    	wid3+=0.01;
    	

    	$("#cloud3").css("left",wid3+"%");
    	$("#cloud2").css("left",wid2+"%");
    	$("#cloud1").css("left",wid1+"%");
    	if(wid1 >65 ){

    		wid1 = 0;
    	}
         if(wid2 >65 ){

    		wid2 = 0;
    	}
    	if(wid3 >60 ){

    		wid3 = 0;
    	}
    	
    },10);

      var wid4 = 55;
      setInterval(function(){
      	   wid4 -= 0.01;
      	   $("#cloud4").css("left",wid4+"%");
           if(wid4 <10 ){

    		wid4 = 55;
    	}
      },10);


      
     var scrl = 0;

      $(window).scroll(function() {
      	    
      		if($(this).scrollTop() >70){
      			$(".wrapper").css({
      				"opacity":"0.6",
      				"transition":"1.5s"
      			});
      		}else if($(this).scrollTop() <70){
      			$(".wrapper").css({
      				"opacity":"1",
      				"transition":"1.5s"
      			});
      		}console.log($(this).scrollTop());
            var a = 800;
            var c = 790;
            var s = 1000;
            var rat = -17;

            b = a- Math.round($(this).scrollTop()/3);
      	    d = c- Math.round($(this).scrollTop()/3);
      	    e = s- Math.round($(this).scrollTop()/3);

      		if($(this).scrollTop() >70 && $(this).scrollTop() <750){
      			
      			$("#mans").css("top",b);
      			$("#shadowmans").css("top",d);	
      			$(".logos").css("top",e);
      		}

           if( $(this).scrollTop() > 455 && $(this).scrollTop() < 755){
           	ratpx = rat + $(this).scrollTop()/35;
           
             	$("#rate").css("left",ratpx-4.5+"%");
             	$("#rateshadow").css("left",ratpx-4.5+"%");

           }if($(this).scrollTop() >= 755){
           		$("#rateshadow").css("opacity","1");
           }else if($(this).scrollTop() < 455){
        		   $("#rateshadow").css("opacity","0");   
           }
        });

        $(window).scroll(function() {

                  if($(this).scrollTop() > 750){
                  
                  $(".firstanim").css( "width","100%");
                
                  var sett = setTimeout(function(){
                      $(".firstanim").css( "height","1000px");
                  },800);
                
                 
            var set = setTimeout(function(){
                    $("#pilot").fadeIn();
                    $(".firstslid").css("opacity","1");
                    $(".firstanim1").css("opacity","1");
                    $("#pilotback").css("display","block");
                    $(".footbackgroundtext").css("opacity", "1");
                    $("#firsth2").css("opacity","1");
                    $("#pilot").animate({"margin-top":"-40px"},800);
                   
                  },1200); 
                }else 
                  if($(this).scrollTop() < 660){
                 
                    $("#pilot").css("display","none");
                    $("#pilotback").css("display","none");
                  }   
        });
              //plugin
            $('.owl-carousel').owlCarousel({
                
                 loop:true,
                  items:1,
                 autoplay:true,
                 autoplayTimeout:5000,
                  autoplayHoverPause:true,
                  smartSpeed: 2500,
                  animate: 'linear',
                  nav: true,

            });
           
          var bv = function (){
            $("#arrow").animate({
              right:"18%",
              top:"2760px"
          },1000,function(){
            $("#arrow").animate({
              right:"22%",
              top:"2700px"

              })
            bv()
          });};
          bv();

           $(window).scroll(function() {
            if($(this).scrollTop() > 2480){
                   $(".firstanim2").css( "width","100%");
                
                  var sett = setTimeout(function(){
                      $(".firstanim2").css( "height","590px");
                      var settIn = setTimeout(function(){
                            $(".fli2").css("opacity","1");
                             $(".titl5").css("opacity","1");
                             $(".flexcontainer1").css("opacity","1");
                             $(".flexcontainer2").css("opacity","1");
                             var setIn1 = setTimeout(function(){
                                  $(".flexcontainer1").css("top","0");
                                   $(".flexcontainer2").css("top","0");
                              },400);
                      },800);
                  },800);
                 
            } if($(this).scrollTop() <= 2280){
                       $(".flexcontainer1").css("opacity","0");
                       $(".flexcontainer2").css("opacity","0");
                       $(".flexcontainer1").css("top","-50px");
                       $(".flexcontainer2").css("top","50px");
                       $(".fli2").css("opacity","0");
                       
                       $(".titl5").css("opacity","0");
                       $(".firstanim2").css( "width","0");
                       $(".firstanim2").css( "height","0");
            }

           });
            $(window).scroll(function() {
                 if($(this).scrollTop() > 890){
                     $(".silka1").removeClass("active-silka");
                     $(".silka2").addClass("active-silka");
                 }else if($(this).scrollTop() < 890){
                     $(".silka1").addClass("active-silka");
                     $(".silka2").removeClass("active-silka");
                 }
            });
            $(window).scroll(function() {
                    
                    if($(this).scrollTop() >3500){
                          $(".firstanim3").css( "width","100%");
                
                  var sett = setTimeout(function(){
                      $(".firstanim3").css( "height","650px");

                      },800);
                     
                  var opa1 = setTimeout(function(){
                          $(".titl-top1").css("opacity","1");
                      },1800);
                  var anim = setTimeout(function(){
                     $(".titl-top1").addClass("anim");
                     },2200);
           
                  setTimeout(function(){
                      $(".owin2").css("opacity","1");
                      $(".owin2").css("margin-top","190px");
                    },2200);

                    }
                    if($(this).scrollTop() <3500){
                      clearTimeout(anim);
                    }
                    
                    if($(this).scrollTop() >4650){
                         setTimeout(function(){
                     $(".tittu").addClass("anim");
                    

                     },2200);
                    }
                    if($(this).scrollTop() >4920){

                        $(".tabone").addClass("anim2"); 
                    }
                    console.log($(this).scrollTop());
            });
         $(".owl-next").empty();
         $(".owl-prev").empty();
         $(".owl-next").append("<i class='far fa-arrow-alt-circle-right'></i>");
         $(".owl-prev").append("<i class='far fa-arrow-alt-circle-left'></i>");
            var i = 0;
            var d = setInterval(function(){ 
                        if(i == 888){
                              clearInterval(d);

                        }else{
                          i++;  
                          $(".shadyellow").text(i);
                        }
                  });
             var j = 0;
             var k = setInterval(function(){ 
                        if(j == 500){
                              clearInterval(k);

                        }else{
                          j++;  
                          $(".likes").text(j);
                        }
                },70);

             $(window).scroll(function() {
                  if($(this).scrollTop() >2850){
                      $(".silka2").removeClass("active-silka");
                      $(".silka3").addClass("active-silka");
                  }else if($(this).scrollTop() < 2850){
                      $(".silka3").removeClass("active-silka"); 
                  } 

                  if($(this).scrollTop() > 4050){
                      $(".silka3").removeClass("active-silka");
                      $(".silka4").addClass("active-silka");
                  }else if($(this).scrollTop() < 4050){
                      $(".silka4").removeClass("active-silka"); 
                  }

                  if($(this).scrollTop() > 4950){
                      $(".silka4").removeClass("active-silka");
                      $(".silka5").addClass("active-silka");
                  }else if($(this).scrollTop() < 4950){
                      $(".silka5").removeClass("active-silka"); 
                  }

                   if($(this).scrollTop() > 6150){
                      $(".silka5").removeClass("active-silka");
                      $(".silka6").addClass("active-silka");
                  }else if($(this).scrollTop() < 6150){
                      $(".silka6").removeClass("active-silka"); 
                  }           
             });

             

             $('.price > div').click(function(){
                  var atrib = $(this).attr('id');
                  $('option[data-class=' + atrib +']').attr('selected','selected');
                  if($('li.'+ atrib + 'drop').hasClass('selected')){
                    $('li.'+ atrib + 'drop').removeClass('selected');
                  }else{
                    $('li.'+ atrib + 'drop').addClass('selected');
                  }
                  if($('li.'+ atrib).hasClass('active')){
                    $('li.'+ atrib).removeClass('active');
                  }
                  else{
                    $('li.'+ atrib).addClass('active');
                  }
                  $('.names div[id='+ atrib + ']').toggleClass('white');
                  $(this).toggleClass('checked');
                  return false;
              })
                $('.prod li').click(function(){
                  var atrib = $(this).attr('class');
                  atrib = atrib.replace("active", "").trim();
                  $('option[data-class=' + atrib +']').attr('selected','selected');
                  $('option[data-class=' + atrib +']').attr('selected','selected');
                  atrib = atrib.replace("active" , "").trim();
                  $('.names div[id='+ atrib + ']').toggleClass('white');
                  $(".price div#"+atrib+"").toggleClass('checked');
                  if($('li.'+ atrib + 'drop').hasClass('selected')){
                    $('li.'+ atrib + 'drop').removeClass('selected');
                  }
                  else{
                    $('li.'+ atrib + 'drop').addClass('selected');
                  }
                  if($('li.'+ atrib).hasClass('active')){
                    $('li.'+ atrib).removeClass('active');
                  }
                  else{
                    $('li.'+ atrib).addClass('active');
                  }
                  return false;
                })
          $("[data-id='burnman '], [data-id='ee '], [data-id='boom '], [data-id='toilet ']").click(function(){
                if($(".selector").val() == 1){
                  $(".burnman, .ee, .boom, .toilet").removeClass("active");
                  $("#burnman, #ee, #boom, #toilet").removeClass("white");
                  $(".price #burnman, .price #ee, .price #boom, .price #toilet").removeClass("checked");
                  $("[data-id='burnman '], [data-id='ee '], [data-id='boom '], [data-id='toilet ']").removeClass("selected");
                  $(".selector").val("0");
                }
                else {
                  $(".burnman, .ee, .boom, .toilet").addClass("active");
                  $("#burnman, #ee, #boom, #toilet").addClass("white");
                  $(".price #burnman, .price #ee, .price #boom, .price #toilet").addClass("checked");
                  $("[data-id='burnman '], [data-id='ee '], [data-id='boom '], [data-id='toilet ']").addClass("selected");
                  $(".selector").val("1");
                }
              })
            $(".burnman, .ee, .boom, .toilet, #burnman, #ee, #boom, #toilet").click(function(){
              if($(".selector").val() == 1){
                $(".burnman, .ee, .boom, .toilet").removeClass("active");
                $("#burnman, #ee, #boom, #toilet").removeClass("white");
                $(".price #burnman, .price #ee, .price #boom, .price #toilet").removeClass("checked");
                $("[data-id='burnman '], [data-id='ee '], [data-id='boom '], [data-id='toilet ']").removeClass("selected");
                $(".selector").val("0");
              }
              else {
                $(".burnman, .ee, .boom, .toilet").addClass("active");
                $("#burnman, #ee, #boom, #toilet").addClass("white");
                $(".price #burnman, .price #ee, .price #boom, .price #toilet").addClass("checked");
                $("[data-id='burnman '], [data-id='ee '], [data-id='boom '], [data-id='toilet ']").addClass("selected");
                $(".selector").val("1");
              }
            })



            $(".down_link").click(function(){
                $(".down-container").toggleClass("toggle");

            });
            $(".selectBox").click(function(){
                $(".secect-park").toggleClass("toggle1");
            });
          
           $(".sec-ul li a").click(function(e){
              
               $(".paket0").text($(this).text());
               $(".secect-park").removeClass("toggle1");
               
            });
              $(".secect-park").blur(function blu(){
                $(".secect-park").removeClass("toggle1");
            });

              $(".selectBox1").click(function(){
                $(".sec-ok").toggleClass("sec-ok-block");
            });
              $(".sec-ok span").click(function(){
                $(this).find(".fa-check").toggleClass("fa-select");
                $(this).toggleClass("yellow-color"); 
            });


          $('#fire').fire({
            width:parseInt($(window).width() / 55),
            height:parseInt($(window).width() / 10),
            speed:60,
            fireTransparency:900,
            globalTransparency: 11,
            maxPow:8,
            minPow: 10,
            gravity:7,
            fadingFlameSpeed:1,
            yOffset: 0,
            mouseEffect:false,
            flameWidth:0,
            flameHeight:2,
            plasm:false,
            burnBorders: false,
            maxPowZone: "center",
          });

          $('#fire1').fire({
            width:parseInt($(window).width() / 55),
            height:parseInt($(window).width() / 10),
            speed:200,
            fireTransparency:80,
            globalTransparency: 0,
            maxPow:10,
            minPow: 10,
            gravity:25,
            fadingFlameSpeed:0,
            yOffset: 0,
            mouseEffect:false,
            flameWidth:0,
            flameHeight:1,
            plasm:false,
            burnBorders: false,
            maxPowZone: "center",
          });

          $(window).resize(function(){
            $('#fire, #fire1').find('canvas').remove();
          $('#fire').fire({
            width:parseInt($(window).width() / 55),
            height:parseInt($(window).width() / 10),
            speed:200,
            fireTransparency:900,
            globalTransparency: 11,
            maxPow:10,
            minPow: 10,
            gravity:7,
            fadingFlameSpeed:1,
            yOffset: 0,
            mouseEffect:false,
            flameWidth:0,
            flameHeight:2,
            plasm:false,
            burnBorders: false,
            maxPowZone: "center",
          });

          $('#fire1').fire({
            width:parseInt($(window).width() / 55),
            height:parseInt($(window).width() / 10),
            speed:200,
            fireTransparency:80,
            globalTransparency: 0,
            maxPow:10,
            minPow: 10,
            gravity:25,
            fadingFlameSpeed:0,
            yOffset: 0,
            mouseEffect:false,
            flameWidth:0,
            flameHeight:1,
            plasm:false,
            burnBorders: false,
            maxPowZone: "center",
          });
          });

  });