const posiciones = [
  {x:38,y:128},
  {x:127,y:128},
  {x:217,y:128},
  {x:307,y:128},

  {x:38,y:238},
  {x:127,y:238},
  {x:217,y:238},
  {x:307,y:238},

  {x:38,y:348},
  {x:127,y:348},
  {x:217,y:348},
  {x:307,y:348},

  {x:38,y:458},
  {x:127,y:458},
  {x:217,y:458},
  {x:307,y:458},

  {x:38,y:568},
  {x:127,y:568},
  {x:217,y:568},
  {x:307,y:568},

  {x:38,y:678},
  {x:127,y:678},
  {x:217,y:678},
  {x:307,y:678}
];

const body=document.body;

for(let i=0;i<posiciones.length;i++){

    let carta=document.createElement("div");

    carta.className="card";

    carta.style.left=posiciones[i].x+"px";
    carta.style.top=posiciones[i].y+"px";

    carta.innerHTML="🂡";

    body.appendChild(carta);

}

document.body.addEventListener("click",()=>{

document.querySelectorAll(".card").forEach((carta,i)=>{

setTimeout(()=>{

carta.classList.add("mostrar");

},i*120);

});

});
