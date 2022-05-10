let pr_size = ["34", "36", "38", "40", "42", "44", "46"];

let prd_sz = document.getElementById("prd_size");
let size_value = document.getElementById("size_value");
size_value.innerHTML = pr_size[0];

for(let pS=0; pS<pr_size.length; pS++)
{
    let btn = document.createElement("button");
    btn.innerHTML = pr_size[pS];
    prd_sz.appendChild(btn);
    
    btn.addEventListener("click", function(){
        size_value.innerHTML = this.innerHTML;
        this.classList.add("aktiv");
    });
}

let pr_color = ["red", "blue", "green", "yellow", "pink", "gray"];

let prd_color = document.getElementById("prd_color_child");

for(let pC=0; pC<pr_color.length; pC++)
{
    let color_div = document.createElement("div");
    color_div.classList.add("prd_colorType");
    color_div.style.backgroundColor = pr_color[pC];
    prd_color.appendChild(color_div);
    
    color_div.addEventListener("click", function()
    {
        let main_image = document.getElementById("prd_mainImage");
        main_image.style.backgroundColor = this.style.backgroundColor;
    })
}