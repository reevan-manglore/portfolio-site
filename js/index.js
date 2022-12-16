const body = document.querySelector("body");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#navigation-menu");
const menuItems = Array.from(document.querySelectorAll("#navigation-menu > ul >li "));

hamburgerMenu.addEventListener("click",(e)=>{
   hamburgerMenu.classList.toggle("hamburger-btn-open");
   menu.classList.toggle("menu-open");
   if(menu.classList.contains("menu-open")){
   // disable  body scroll when menu is open;
      body.style.overflow = "hidden";
   }
   else{
        // make body scroll again;
        body.style.overflow = "auto";
   }
});

for(const item of menuItems){
   item.addEventListener("click",()=>{
      menuItems.
         forEach(e=>e.classList.contains("nav-link-active")?
                     e.classList.remove("nav-link-active")
                     :null);
                     
      item.classList.add("nav-link-active");
      if(hamburgerMenu.classList.contains("hamburger-btn-open")){
         hamburgerMenu.classList.remove("hamburger-btn-open");
         // make body scroll again;
         body.style.overflow = "auto";
      }

      if(menu.classList.contains("menu-open")){
         menu.classList.remove("menu-open");
      }
   });
}

const observer = new IntersectionObserver((entries)=>{
   //toogle navabar active  links based on which section is currently visible in page
   entries.forEach(i=>{
      if(i.isIntersecting){
         const itm = document.
                     querySelector(`a[href="#${i.target.id}"]:not(a[href="#"])`)?.
                     parentElement;
         itm?.classList?.add("nav-link-active");
        
      }
      else{
         const itm = document.
                     querySelector(`a[href="#${i.target.id}"]:not(a[href="#"])`)?.
                     parentElement;
         itm?.classList?.remove("nav-link-active");
      }

   });
},{
   threshold:0.3,
  
});

document.querySelectorAll("section").forEach(e=>observer.observe(e));




