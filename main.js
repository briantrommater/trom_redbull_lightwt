//this makes sure doc loaded b4 doing stuff
$(document).ready(function(){

    //ajax call to get json data from url
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        
           dataType: 'json',
            //callback fx with a loop to get data and put in flexbox
            success: function(response) { 
            "<div id='flex-container'>"
            for (var i = 0; i < response.products.length; i++) {
                $('.row').append("<div class='images'>" + 
                "<img src=" + response.products[i].images[0].src + 
                "</div>" + "<div class='product'>" + 
                response.products[i].title + 
                "</div>" + "<div class='description'>" + 
                response.products[i].body_html + "</div>");
            }
                //code below will mess up since multiply rows
                // $('.row').append("<div class='product'>" + response.products[i].title + "</div>");
                // $('.row').append("<div class='images'>" + "<img src=" + response.products[i].images[0].src + "</div>");
                // $('.row').append("<div class='description'>" + response.products[i].body_html + "</div>");
                // }
            "</div>"
            }
         
        });
    
      
    
    });

    