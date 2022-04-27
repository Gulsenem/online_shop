const bild_box_arr =
[
    {
        id: 0,
        type: "Woman",
        color: "#C8E0CA",
    },
    {
        id: 1,
        type: "Herren",
        color: "#808080",
    },
    {
        id: 2,
        type: "Kids",
        color: "#e68b8b",
    }
];


document.getElementById("bild_box").innerHTML = bild_box_arr[0].type; 
document.getElementById("bild_box").style.backgroundColor = bild_box_arr[0].color;
/*
function change_section()
{
    step_container++;
}*/

function next()
{        

    console.log("next");
    for(let i=0; i<bild_box_arr.length; i++)
    {
            document.getElementById("bild_box").innerHTML = bild_box_arr[i].type; 
            document.getElementById("bild_box").style.backgroundColor = bild_box_arr[i].color;
            console.log(bild_box_arr[i].id);
    }

    

}


function prev()
{
    for(let k=3; k<bild_box_arr.length; k--)
    {
            document.getElementById("bild_box").innerHTML = bild_box_arr[i].type; 
            document.getElementById("bild_box").style.backgroundColor = bild_box_arr[i].color;
    }
}