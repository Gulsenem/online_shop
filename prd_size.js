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
