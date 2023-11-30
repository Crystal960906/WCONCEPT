$(function(){

$.ajax({
//MAKE IT YOUR SELF
    url: "./json/make_it_youres.json",
    dataType: "json",
    success : function(data){
    if(data.length>0){

        for(var i in data){
    
            $(".box3").eq(i).append('<div>'+"<img src='img/"+data[i].src+"'>"+'</div>'); 
            $(".box3").eq(i).append('<h3>'+data[i].brand_name+"<h3>");      
            $(".box3").eq(i).append('<p>'+data[i].product_name_1+"</p>");  
            $(".box3").eq(i).append('<p>'+data[i].product_name_2+"</p>");                             
            $(".box3").eq(i).append("<span>"+data[i].price+"</span>");
            $(".box3").eq(i).append("<button>"+data[i].button_1+"</button>");
            }
        }
    }
});
});


$.ajax({
//STYEL STORY
    url: "./json/style_story.json",
    dataType: "json",
    success : function(data){
    if(data.length>0){

        for(var i in data){
    
            $(".box1").eq(i).append('<div>'+"<img src='img/"+data[i].src+"'>"+'</div>'); 
            $(".box1").eq(i).append('<h3>'+data[i].title+"<h3>");      
            $(".box1").eq(i).append('<p>'+data[i].product_name_1+"</p>");  
            $(".box1").eq(i).append('<p>'+data[i].product_name_2+"</p>");                             
            }
        }
    }
});

$.ajax({
    //WHAT'S NEW
        url: "./json/what's new.json",
        dataType: "json",
        success : function(data){
        if(data.length>0){
    
            for(var i in data){
                $(".box2, .box2-1").eq(i).append('<h3>'+data[i].brand_name+"<h3>");      
                $(".box2, .box2-1").eq(i).append('<p>'+data[i].product_name_1+"</p>");  
                $(".box2, .box2-1").eq(i).append('<p>'+data[i].product_name_2+"</p>");     
                $(".box2, .box2-1").eq(i).append("<span>"+data[i].price+"</span>");                        

                }
            }
        }
    });

    $.ajax({
        //WHAT'S NEW
            url: "./json/exclusive_under.json",
            dataType: "json",
            success : function(data){
            if(data.length>0){
        
                for(var i in data){
                    $(".box4").eq(i).append('<div>'+"<img src='img/"+data[i].src+"'>"+'</div>'); 
                    $(".box4").eq(i).append('<h3>'+data[i].brand_name+"<h3>");      
                    $(".box4").eq(i).append('<p>'+data[i].product_name_1+"</p>");  
                    $(".box4").eq(i).append('<p>'+data[i].product_name_2+"</p>");     
                    $(".box4").eq(i).append("<span>"+data[i].price+"</span>");      
                    $(".box4").eq(i).append("<button>"+data[i].button+"</button>");                  
    
                    }
                }
            }
        });

        $.ajax({
            //WHAT'S NEW
                url: "./json/beautypick.json",
                dataType: "json",
                success : function(data){
                if(data.length>0){
            
                    for(var i in data){
                        $(".list  ul  li").eq(i).append('<div>'+"<img src='img/"+data[i].src+"'>"+'</div>'); 
                        $(".list  ul  li").eq(i).append('<h3>'+data[i].brand_name+"<h3>");      
                        $(".list  ul  li").eq(i).append('<p>'+data[i].product_name_1+"</p>");  
                        $(".list  ul  li").eq(i).append('<p>'+data[i].product_name_2+"</p>");    
                        $(".list  ul  li").eq(i).append('<p>'+data[i].product_name_3+"</p>");   
                        $(".list  ul  li").eq(i).append("<span>"+data[i].price+"</span>");                     

                        }
                    }
                }
            });