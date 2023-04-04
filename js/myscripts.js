

window.addEventListener('DOMContentLoaded', event => {
    
    //var now = String(window.location.href)
    //alert(now);

    ////var p2 = "file:///C:/Users/Romari/OneDrive/Desktop/website/p2/index.html"
    var p2 = "https://shadeika15.github.io/my_website/p2/index.html"

    if(now!==p2)
    {

        var cart_num = 0;
        var black_num = 0;
        var pink_num = 0;
        var green_num = 0;
        var orange_num = 0;

        localStorage.setItem("cart_numKey", cart_num);

        localStorage.setItem("black_numKey", black_num);
        localStorage.setItem("pink_numKey", pink_num);
        localStorage.setItem("green_numKey", green_num);
        localStorage.setItem("orange_numKey", orange_num);

    }
    else
    {
        updateCart();
    }
    
    
    cart_num = localStorage.getItem("cart_numKey");

    black_num = localStorage.getItem("black_numKey");
    pink_num = localStorage.getItem("pink_numKey");
    green_num = localStorage.getItem("green_numKey");
    orange_num = localStorage.getItem("orange_numKey");


    const element_black = document.getElementById("add_btn_black");
    element_black.addEventListener("click", addFunctionBlack);

    function addFunctionBlack() {
        cart_num++;
        localStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        black_num++;
        localStorage.setItem("black_numKey", black_num);
        document.getElementById("black").innerHTML=black_num;
    }

    const element_pink = document.getElementById("add_btn_pink");
    element_pink.addEventListener("click", addFunctionPink);

    function addFunctionPink() {
        cart_num++;
        localStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        pink_num++;
        localStorage.setItem("pink_numKey", pink_num);
        document.getElementById("pink").innerHTML=pink_num;
    }

    const element_green = document.getElementById("add_btn_green");
    element_green.addEventListener("click", addFunctionGreen);

    function addFunctionGreen() {
        cart_num++;
        localStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        green_num++;
        localStorage.setItem("green_numKey", green_num);
        document.getElementById("green").innerHTML=green_num;
      
    }

    const element_orange = document.getElementById("add_btn_orange");
    element_orange.addEventListener("click", addFunctionorange);

    function addFunctionorange() {
        cart_num++;
        localStorage.setItem("cart_numKey", cart_num);
        document.getElementById("cart").innerHTML=cart_num;
        orange_num++;
        localStorage.setItem("orange_numKey", orange_num);
        document.getElementById("orange").innerHTML=orange_num;
    }

    function updateCart(){

        document.getElementById("quantity").innerHTML=localStorage.getItem("cart_numKey");

        document.getElementById("black").innerHTML=localStorage.getItem("black_numKey");
        document.getElementById("pink").innerHTML=localStorage.getItem("pink_numKey");
        document.getElementById("green").innerHTML=localStorage.getItem("green_numKey");
        document.getElementById("orange").innerHTML=localStorage.getItem("orange_numKey");

        document.getElementById("total_quantity").innerHTML=localStorage.getItem("cart_numKey");
        document.getElementById("total").innerHTML = String(10000 * parseInt(localStorage.getItem("cart_numKey")));
        document.getElementById("totalAfterTax").innerHTML = String( (0.15 * 10000 * parseInt(localStorage.getItem("cart_numKey"))) 
        + (10000 * parseInt(localStorage.getItem("cart_numKey"))) )
       

        document.getElementById("quantityP").innerHTML=localStorage.getItem("cart_numKey");

        document.getElementById("blackP").innerHTML=localStorage.getItem("black_numKey");
        document.getElementById("pinkP").innerHTML=localStorage.getItem("pink_numKey");
        document.getElementById("greenP").innerHTML=localStorage.getItem("green_numKey");
        document.getElementById("orangeP").innerHTML=localStorage.getItem("orange_numKey");

        document.getElementById("total_quantityP").innerHTML=localStorage.getItem("cart_numKey");
        document.getElementById("totalP").innerHTML = String(10000 * parseInt(localStorage.getItem("cart_numKey")));
        document.getElementById("totalAfterTaxP").innerHTML = String( (0.15 * 10000 * parseInt(localStorage.getItem("cart_numKey"))) 
        + (10000 * parseInt(localStorage.getItem("cart_numKey"))) )

    }
    
});
