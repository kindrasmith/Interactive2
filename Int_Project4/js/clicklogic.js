$(document).ready(function(){

  $("#title1 .actor").click(function(){
    var pass1 = $("#title1 p").html();
      $(this).val(pass1);
  });

  $("#title2 .actor").click(function(){
    var pass2 = $("#title2 p").html();
      $(this).val(pass2);
  });

  $("#title3 .actor").click(function(){
    var pass3 = $("#title3 p").html();
      $(this).val(pass3);
  });

  $("#title4 .actor").click(function(){
    var pass4 = $("#title4 p").html();
      $(this).val(pass4);
  });

  $("#title5 .actor").click(function(){
    var pass5 = $("#title5s p").html();
      $(this).val(pass5);
  });

  $("#title1s .actor").click(function(){
    var pass1s = $("#title1s p").html();
      $(this).val(pass1s);
  });

  $("#title2s .actor").click(function(){
    var pass2s = $("#title2s p").html();
      $(this).val(pass2s);
  });

  $("#title3s .actor").click(function(){
    var pass3s = $("#title3s p").html();
      $(this).val(pass3s);
  });

  $("#title4s .actor").click(function(){
    var pass4s = $("#title4s p").html();
      $(this).val(pass4s);
  });

  $("#title5s .actor").click(function(){
    var pass5s = $("#title5s p").html();
      $(this).val(pass5s);
  });

  $("#title6s .actor").click(function(){
    var pass6s = $("#title6s p").html();
      $(this).val(pass6s);
  });

  $("#title7s .actor").click(function(){
    var pass7s = $("#title7s p").html();
      $(this).val(pass7s);
  });

  $("#title8s .actor").click(function(){
    var pass8s = $("#title8s p").html();
      $(this).val(pass8s);
  });

  $("#title9s .actor").click(function(){
    var pass9s = $("#title9s p").html();
      $(this).val(pass9s);
  });

  $("#title10s .actor").click(function(){
    var pass10s = $("#title10s p").html();
      $(this).val(pass10s);
  });

  $("#title11s .actor").click(function(){
    var pass11s = $("#title11s p").html();
      $(this).val(pass11s);
  });

  $("#title12s .actor").click(function(){
    var pass12s = $("#title12s p").html();
      $(this).val(pass12s);
  });

  $("#title13s .actor").click(function(){
    var pass13s = $("#title13s p").html();
      $(this).val(pass13s);
  });

  $("#title14s .actor").click(function(){
    var pass14s = $("#title14s p.lead-actor").html();
      $(this).val(pass14s);
  });



// SHOW NOMINEES

    $(".st1").click(function(){
        $(".addnom1").toggleClass("shownom");
    });

    $(".st2").click(function(){
        $(".addnom2").toggleClass("shownom");
    });

    $(".st3").click(function(){
        $(".addnom3").toggleClass("shownom");
    });

    $(".st4").click(function(){
        $(".addnom4").toggleClass("shownom");
    });

    $(".st5").click(function(){
        $(".addnom5").toggleClass("shownom");
    });

    $(".st6").click(function(){
        $(".addnom6").toggleClass("shownom");
    });


    $("#b1").click(function(){
      var id1=	$(".vmodule1 .activeradio").val();
      var name= $("#name").val();
        $(".vmodule1 .actortext").empty().html(id1);
        $(".vmodule1 .persontext").empty().html(name);
        $(".vmodule1").addClass("ivoted");
    });

    $("#b2").click(function(){
      var id1=	$(".vmodule2 .activeradio").val();
      var name= $("#namestormy").val();
        $(".vmodule2 .actortext").empty().html(id1);
        $(".vmodule2 .persontext").empty().html(name);
        $(".vmodule2").addClass("ivoted");
    });

    $("#b3").click(function(){
      var id1=	$(".vmodule3 .activeradio").val();
      var name= $("#namestormy2").val();
        $(".vmodule3 .actortext").empty().html(id1);
        $(".vmodule3 .persontext").empty().html(name);
        $(".vmodule3").addClass("ivoted");
    });

    $("#b4").click(function(){
      var id1=	$(".vmodule4 .activeradio").val();
      var name= $("#namekush").val();
        $(".vmodule4 .actortext").empty().html(id1);
        $(".vmodule4 .persontext").empty().html(name);
        $(".vmodule4").addClass("ivoted");
    });

    $("#b5").click(function(){
      var id1=	$(".vmodule5 .activeradio").val();
      var name= $("#nameivanka").val();
        $(".vmodule5 .actortext").empty().html(id1);
        $(".vmodule5 .persontext").empty().html(name);
        $(".vmodule5").addClass("ivoted");
    });

    $("#b6").click(function(){
      var id1=	$(".vmodule6 .activeradio").val();
      var name= $("#namemichael").val();
        $(".vmodule6 .actortext").empty().html(id1);
        $(".vmodule6 .persontext").empty().html(name);
        $(".vmodule6").addClass("ivoted");
    });

    $(".submit").click(function(){
        $(this).addClass("dimthisbutton");
    });



});
