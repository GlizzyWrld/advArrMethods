$(function(){
console.log("Let's get ready to party with jQuery!")
})

$('article img').addClass('image-center');

$('article p').last().remove();

$('#title').css('font-size', Math.random() * 100);

$('ol').append($('<li>', {text: 'Hey I just added this!'}));

$("aside").empty().append($("<p>", {text: "Sorry about that list"}));

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

  $("img").on('click', function (e) {
    $(e.target).remove();
  });

  $("h2").css('text-align', 'center')

$("#submit").on("click", function(e){
    e.preventDefault();
    let movie = $(".user-input").eq(0).val();
    let rating = $(".user-input").eq(1).val();
    if ($(".user-input").eq(0).val() && $(".user-input").eq(1).val()) {
        $("ul").append('<li>' + `${movie} was rated a ${rating} out of 10` + '<input type="button" id= "delete" value="X"/></li>');

        $("#delete").on("click", function(){
            $(this).parent().remove();
        })
    
    }
    else {
        alert('empty input!')
    }

})