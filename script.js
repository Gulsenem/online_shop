const bild_box_arr =
[
    {
        id: 0,
        type: "Woman",
        image: "url('img/people.jpg')",
        menu_links: 
            [
                {
                    link_name: "New",
                    link_href: "#",
                },
                {
                    link_name: "Beuty",
                    link_href: "#",
                },
                {
                    link_name: "Shuhe",
                    link_href: "#",
                },
                {
                    link_name: "Jeans",
                    link_href: "#",
                }
                  
            ]

            
    },
    {
        id: 1,
        type: "Herren",
        image: "url('img/mens-tshirts.jpg')",
        menu_links: 
        [
            {
                link_name: "New",
                link_href: "#",
            },
            {
                link_name: "Anzüge",
                link_href: "#",
            },
            {
                link_name: "Join Life",
                link_href: "#",
            }
        ]
    },
    {
        id: 2,
        type: "Kids",
        image: "url('img/kid.jpg')",
        menu_links: 
        [
            {
                link_name: "Girl",
                link_href: "#",
            },
            {
                link_name: "Boy",
                link_href: "#",
            },
            {
                link_name: "Baby Girl",
                link_href: "#",
            },
            {
                link_name: "Baby Boy",
                link_href: "#",
            }
        ]
    }
];


let step_container = 0;

function change_container(move_to) // gruba göra kontaineri üytgedyar
{
    if(move_to >= bild_box_arr.length) {move_to = 0};
    if(move_to < 0) {move_to = bild_box_arr.length -1};

    step_container = move_to;
    //console.log(move_to);


    for(let i=0; i<bild_box_arr.length; i++)
    {
        if(move_to == bild_box_arr[i].id)
        {
            document.getElementById("text_type").innerHTML = bild_box_arr[i].type; 
            document.getElementById("image").style.backgroundImage = bild_box_arr[i].image;
                
            for(let a=0; a<bild_box_arr[i].menu_links.length; a++)
            {  
                let links = document.createElement("a");          
                links.innerHTML = bild_box_arr[i].menu_links[a]; 
                document.getElementById("menu").appendChild(links);

                if (document.getElementById("menu").hasChildNodes()) {
                console.log("bar");
                while (document.getElementById("menu").hasChildNodes()) {
                    document.getElementById("menu").removeChild(document.getElementById("menu").firstChild);
                  }
                }  
                



                let circle = document.createElement("div");
                circle.classList.add("kreis");
                document.getElementById("kreis_pg").appendChild(circle);
                
                console.log(bild_box_arr[i].menu_links[a]);      
                
              


            }


        }
    }
}
///////////////////////////////////////////////////////////
/*
let kreis=document.getElementsByClassName('kreis');
kreis[0].classList.toggle("active");






for(let k=0; k<kreis.length; k++)
{
    kreis[k].addEventListener("click", ()=>{
        kreis[k].classList.toggle("active");
    });
}

let menu_link = document.getElementsByTagName("a");

for(let l=0; l<menu_link.length; l++)
{
    menu_link[l].addEventListener("click", ()=>{
        menu_link[l].classList.toggle("active");
        
    });
}
/******scroll container********/
 //didn't work
   /*  function srl() {
        if (document.documentElement.scrollTop > 50) {
            document.getElementById("myP").className = "test";
          } else {
            document.getElementById("myP").className = "";
          }
        console.log("scrolled");
      };
      

      document.body.addEventListener('scroll',()=>{
        
        document.getElementById("id2").style.display = "block";
      })
    *////////


    
    