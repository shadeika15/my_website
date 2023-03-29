

window.addEventListener('DOMContentLoaded', event => {
    
    var now = String(window.location.href)
    //var p1 = "file:///C:/Users/Romari/OneDrive/Desktop/website/p1/index.html"
    var p2 = "file:///C:/Users/Romari/OneDrive/Desktop/website/p2/index.html"

    

    if(now!==p2)
    {

        var cart_num = 0;
        var red_num = 0;
        var blue_num = 0;
        var green_num = 0;
        var yellow_num = 0;

        //sessionStorage
        //localStorage

        sessionStorage.setItem("cart_numKey", cart_num);

        sessionStorage.setItem("red_numKey", red_num);
        sessionStorage.setItem("blue_numKey", blue_num);
        sessionStorage.setItem("green_numKey", green_num);
        sessionStorage.setItem("yellow_numKey", yellow_num);

    }
    else
    {
        updateCart();
    }
    
    
    cart_num = sessionStorage.getItem("cart_numKey");

    red_num = sessionStorage.getItem("red_numKey");
    blue_num = sessionStorage.getItem("blue_numKey");
    green_num = sessionStorage.getItem("green_numKey");
    yellow_num = sessionStorage.getItem("yellow_numKey");




    const element_red = document.getElementById("add_btn_red");
    element_red.addEventListener("click", addFunctionRed);

    function addFunctionRed() {
        cart_num++;
        sessionStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        red_num++;
        sessionStorage.setItem("red_numKey", red_num);
        document.getElementById("red").innerHTML=red_num;
    }

    const element_blue = document.getElementById("add_btn_blue");
    element_blue.addEventListener("click", addFunctionBlue);

    function addFunctionBlue() {
        cart_num++;
        sessionStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        blue_num++;
        sessionStorage.setItem("blue_numKey", blue_num);
        document.getElementById("blue").innerHTML=blue_num;
    }

    const element_green = document.getElementById("add_btn_green");
    element_green.addEventListener("click", addFunctionGreen);

    function addFunctionGreen() {
        cart_num++;
        sessionStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        green_num++;
        sessionStorage.setItem("green_numKey", green_num);
        document.getElementById("green").innerHTML=green_num;
      
    }

    const element_yellow = document.getElementById("add_btn_yellow");
    element_yellow.addEventListener("click", addFunctionYellow);

    function addFunctionYellow() {
        cart_num++;
        sessionStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        yellow_num++;
        sessionStorage.setItem("yellow_numKey", yellow_num);
        document.getElementById("yellow").innerHTML=yellow_num;
    }

    
    function updateCart(){

        document.getElementById("quantity").innerHTML=sessionStorage.getItem("cart_numKey");

        document.getElementById("red").innerHTML=sessionStorage.getItem("red_numKey");
        document.getElementById("blue").innerHTML=sessionStorage.getItem("blue_numKey");
        document.getElementById("green").innerHTML=sessionStorage.getItem("green_numKey");
        document.getElementById("yellow").innerHTML=sessionStorage.getItem("yellow_numKey");


        document.getElementById("total_quantity").innerHTML=sessionStorage.getItem("cart_numKey");
        
        document.getElementById("total").innerHTML = String(10000 * parseInt(sessionStorage.getItem("cart_numKey")));

        document.getElementById("totalAfterTax").innerHTML = String( (0.15 * 10000 * parseInt(sessionStorage.getItem("cart_numKey"))) + (10000 * parseInt(sessionStorage.getItem("cart_numKey"))) )
       

    }
    
    
    const element_purchase = document.getElementById("btnp");
    element_purchase.addEventListener("click", purchaseFunc);


    function purchaseFunc()
    {
        alert("a purchase has been made");
        document.getElementById("quantityR").innerHTML="dekie";
    }
   
    document.getElementById("quantityR").innerHTML="dekie";
    
    alert("defo");
    

});

//$(function () {
    //alert("working")
//});