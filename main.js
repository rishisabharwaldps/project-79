menu_list_array=["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
function getmenu(){
    var htmldta;
    htmldta="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldta=htmldta+'<li>'+ menu_list_array[i] +'</li>'
    }
    htmldta=htmldta+'</ol>'
    document.getElementById("display_menu").innerHTML=htmldta;
}

function add_item(){
    var htmldta;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
   htmldta="<section class='card'>"
   for(var i=0;i<menu_list_array.length;i++){
       htmldta=htmldta+"<div class='card'> + <img src='images/pizzaimg.png'/>"+menu_list_array[i]+'</div>'
   } 
   htmldta=htmldta="</section>"
   document.getElementById("display_addmenu").innerHTML=htmldta;
}