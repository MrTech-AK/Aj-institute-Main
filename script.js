
alert(`
Welcome to AJ INSTITUTE!
We're here to support your learning journey with video lessons and resources tailored to your needs. Let's your make learning effective.
[+] Press Ok to Continue
`);

const slider = document.querySelector("#opaAdj>input");
const card = document.querySelector("#card");
const frame = document.querySelector("#frame");
slider.addEventListener("input",()=>{
   let o = slider.value/100;
   card.style.background = `rgba(255,70,100,${o})`;
   frame.style.background = `radial-gradient(at top right,rgba(100,110,215,${o}),rgba(120,140,180,${o}))`;
})

const opaAdj = document.querySelector("#opaAdj");
const nav = document.querySelector("#col_nav");

nav.addEventListener("click",()=>{
   if(opaAdj.style.opacity==1){
      opaAdj.style.opacity = 0;
      opaAdj.style.marginBottom = "-36px";
      setTimeout(()=>opaAdj.style.display="none",200);
   }
   else{
      opaAdj.style.display="block";
      setTimeout(()=>{
        opaAdj.style.opacity = 1;
        opaAdj.style.marginBottom = "16px";
      })
   }
})
