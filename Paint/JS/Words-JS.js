$(document).ready(function(){
    
    $("#submit_button").click(function(){
        $("#input1").val();
        $("#select1").val();
        
        $.ajax({
            url: "/ajax_word/?word="+$("#input1").val()+"&lexica="+$("#select1").val()
        }).then(function(responce){
            response=toJSON(response);
            $("#result123").val(responce.word_definition); 
        });
    
    });
    
});