let swIMG = ["img/chibi1.png", "img/chibi2.png", "img/chibi3.png", "img/chibi4.png", "img/chibi5.png"];



let swip_img_box = document.getElementById("swip_img_box");
function create_img_div()
{
        for(let img=0; img<swIMG.length; img++)
    {
        let img_div = document.createElement("div");
        img_div.classList.add("img");
        img_div.style.backgroundImage = "url('" + swIMG[img] + "')";
        swip_img_box.appendChild(img_div);
        
        img_div.addEventListener("click", function()
        {
            let mainBild = document.getElementById("mainBild");

            mainBild.src = swIMG[img];
        })
    }

}
create_img_div();



//change swip_img_box
let step_sw = 0;

function swip(move)
{
    
    if(move>swIMG.length){move=0}
    if(move<0){move=swIMG.length}
    
    
}