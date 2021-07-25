// start of jquery/

$(document).ready(function () {
    $("#image-content1").click(function () {
        $("#content1").toggle();
        $("#image-content1").toggle();
    });
    $("#content1").click(function () {
        $("#image-content1").toggle();
        $("#content1").hide();
    });

    //id 2
    $("#image-content2").click(function () {
        $("#content2").toggle();
        $("#image-content2").toggle();
    });
    $("#content2").click(function () {
        $("#image-content2").toggle();
        $("#content2").hide();
    });
    //id 3
    $("#image-content3").click(function () {
        $("#content3").toggle();
        $("#image-content3").toggle();
    });
    $("#content3").click(function () {
        $("#image-content3").toggle();
        $("#content3").hide();
    });;

});


// portfolio
$(document).ready(function () {
    $("#one").hover(function () {
            $("#text1").animate({
                opacity: 1
            }, 60)
        }, //mouse over

        function () {
            $("#text1").animate({
                opacity: 0
            }, 50) //mouse out
        })
    //two
    $("#two").hover(function () {
            $("#text2").animate({
                opacity: 1
            }, 60)
        },

        function () {
            $("#text2").animate({
                opacity: 0
            }, 50)
        })
    //three
    $("#three").hover(function () {
            $("#text3").animate({
                opacity: 1
            }, 60)
        },

        function () {
            $("#text3").animate({
                opacity: 0
            }, 50)
        })
    //four
    $("#four").hover(function () {
            $("#text4").animate({
                opacity: 1
            }, 60)
        },

        function () {
            $("#text4").animate({
                opacity: 0
            }, 50)
        })
    //five
    $("#five").hover(function () {
            $("#text5").animate({
                opacity: 1
            }, 60)
        },

        function () {
            $("#text5").animate({
                opacity: 0
            }, 50)
        })
    //six
    $("#six").hover(function () {
            $("#text6").animate({
                opacity: 1
            }, 60)
        },

        function () {
            $("#text6").animate({
                opacity: 0
            }, 50)
        })
    //seven
    $("#seven").hover(function () {
            $("#text7").animate({
                opacity: 1
            }, 60)
        },

        function () {
            $("#text7").animate({
                opacity: 0
            }, 50)
        })
    //eight
    $("#eight").hover(function () {
            $("#text8").animate({
                opacity: 1
            }, 60)
        },

        function () {
            $("#text8").animate({
                opacity: 0
            }, 50)
        });


});


document.getElementById("submit").addEventListener("click", submitForm);
    
     function submitForm(){

        var nameInput = document.getElementById("name").value;
        var emailInput = document.getElementById("email").value;
        var messageInput = document.getElementById("message").value;

     if (nameInput === "" || emailInput === "" || messageInput === ""){
     alert("please input your data")}
     else { alert ( nameInput + " your data has been received we will be getting back to you soon if not soonest")
     
     .preventDefault();
     };

     };
