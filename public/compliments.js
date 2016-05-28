// $(document).ready(function(){

  // var menu_items = $(".sub_main_navigation");
  // menu_items.hover(function(){
  //   $(this).children("a").addClass("hover");
  //   $(this).children("li").show();
  // }, function(){
  //   $(this).children("a").removeClass("hover");
  //   $(this).children("ul").hide();
  // });

  var menu = $(".main_navigation");
  menu.on({
    mouseleave: function(){
			$(this).children("ul").hide();
    }, 
    click: function(){
        $(this).children("ul").toggle();
    } 
	});

  var backgroundColors = [
    '#0080ff',
    '#ffbf00',
    '#01df3a',
    '#ff0080',
    '#9966ff',
    '#ff0033',

    '#f0bf00',
    '#01903a',
    '#f00080',
    '#99660f',
    '#0f0033',

    '#f0f00f',
    '#f00f80',
    '#9f660f',
    '#0ff033',

    '#0050ff',
    '#ff5f00',
    '#01d93a',
    '#f90080',
    '#6966ff',
    '#ff0093',
	];

	var randBGColor = function(){
		randColorIndex = Math.floor(Math.random()*(backgroundColors.length-1)+1);
		randColor = backgroundColors[randColorIndex];
		$("*").css("background-color", randColor)
		console.log("changed color")
	}

	randBGColor(); 

// });   