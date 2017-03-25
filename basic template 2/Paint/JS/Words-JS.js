$(document).ready(function(){
    
    $("#submit_button").click(function(){
        $("#your_word").val();
        $("#select1").val();
        
        $.ajax({
            url: "/ajax_word/?word="+$("#input1").val()+"&lexica="+$("#select1").val()
        }).then(function(responce){
            response=toJSON(response);
            $("#definition").val(responce.word_definition); 
        });
    
    });
    
});