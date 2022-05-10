let swIMG = ["url('img/chibi1.png')", "url('img/chibi2.png')", "url('img/chibi3.png')", "url('img/chibi4.png')", "url('img/chibi5.png')"];


let swip_img_box = document.getElementById("swip_img_box");

for(let img=0; img<swIMG.length; img++)
{
    let img_div = document.createElement("div");
    img_div.classList.add("img");
    img_div.style.backgroundImage = swIMG[img];
    swip_img_box.appendChild(img_div);
    
    img_div.addEventListener("click", function()
    {
        let mainBild = document.getElementById("mainBild");
        main_Bild.style.src = this.style.backgroundImg;
    })
}