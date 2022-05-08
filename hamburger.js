let btn_cont = document.getElementById("bars_container");
let btn_hamburger = document.getElementById("hamburger");
let is_btn_bars = true;
function hamburger()
{
    if(is_btn_bars)
     {
        btn_cont.style.display = "flex";
        btn_cont.style.animationName = "my_bars1";
        btn_hamburger.innerHTML = '<i class="far fa-times"></i>'
        is_btn_bars = false;  
     }
     else
     {
      
        btn_hamburger.innerHTML = '<i class="far fa-bars"></i>';
        btn_cont.style.animationName = "my_bars2";
        is_btn_bars = true; 
        setTimeout(
           none, 150 
        );  
        
     }

}
function none()
{
    btn_cont.style.display = "none";
}