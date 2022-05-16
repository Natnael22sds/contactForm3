
    $("#submit").click(function(){
        var Full_name = $(' #Full name')
        var email = $("#email")
        var Grade = $("#Grade")
        if (Full_name == '' || email == '' || Grade == ''){
            swal({
                title: "Fields Empty!!",
                text: "Please check the missing field!",
                icon: "warning",
                button: "ok",
              });
        }else {
            swal({
                title: "Succesfully ",
                icon: "success",
                button: "Aww yiss!",
              });
        }
      })