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
                    link_href: "produkt.html",
                },
                {
                    link_name: "Beuty",
                    link_href: "produkt.html",
                },
                {
                    link_name: "Shuhe",
                    link_href: "produkt.html",
                },
                {
                    link_name: "Jeans",
                    link_href: "produkt.html",
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
                link_name: "Tshirt",
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
const menu_a = document.getElementById("menu"); 
menu_a.getElementsByTagName("a")[0].classList.toggle("active");  


function change_container(move_to) // gruba göra kontaineri üytgedyar
{
    if(move_to >= bild_box_arr.length) {move_to = 0};
    if(move_to < 0) {move_to = bild_box_arr.length -1};

    step_container = move_to;

    for(let i=0; i<bild_box_arr.length; i++)
    {
        if(move_to == bild_box_arr[i].id)
        {
            document.getElementById("text_type").innerHTML = bild_box_arr[i].type; 
            document.getElementById("image").style.backgroundImage = bild_box_arr[i].image;
  
                
            for(let a=0; a<bild_box_arr[i].menu_links.length; a++)
            {  
                menu_a.getElementsByTagName("a")[a].innerHTML = bild_box_arr[i].menu_links[a].link_name; 
                menu_a.getElementsByTagName("a")[a].href = bild_box_arr[i].menu_links[a].link_href; 
                console.log(bild_box_arr[i].menu_links[a].link_name + " = " + bild_box_arr[i].menu_links[a].link_href);      

            }


        }

    }
}
///////////////////////////////////////////////////////////

   let kreisPG=document.getElementById("kreis_pg");
    let k = kreisPG.querySelectorAll("div");
    k.forEach(div => {
        div.addEventListener('click', function () {
            k.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');        
        });
    }); 


///////////////////////////////////////////////////////////

let menu = document.getElementById("menu");
let ab = menu.querySelectorAll("a");
ab.forEach(a => {
    a.addEventListener('click', function () {
        a.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
}); 
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


    //wifi kod   
    //GHzYF4k2qFmqLh2y