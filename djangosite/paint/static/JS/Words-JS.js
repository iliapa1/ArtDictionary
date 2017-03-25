$(document).ready(function() {

    $("#submit_button").click(function() {
        $("#input1").val();
        $("#select1").val();

        $.ajax({
            url: "/ajax_word/?word="+$("#input1").val()+"&lexica="+$("#select1").val()
        }).then(function(response){
            //response=JSON.parse(response);
            //console.log(response);
            $("#definition").val(response.word_definition);
        });

    });

});
