
alert(`This is a Portfolio card made by @MrTech-AK(Github) | Akshat Kr.

- Use the Slider is to control the background opacity
- Click the three dots above the profile pic to toggle visibility of slider. 
- Follow @Akki_IzPro on Instagram
- Follow @MrTech-Ak on Github
[+] Press Ok to Continue.. 
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
