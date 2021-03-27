window.addEventListener("keydown", aumenta)

function aumenta(event) {
  if(event.key === "t"){
    document.documentElement.classList.toggle("textomaior")
}
}


let botaoDarkMode = document.querySelectorAll("a")
let contador = 0
botaoDarkMode.forEach((botao) => {
})

function acionaDarkMode () {
   contador ++
   if(contador %2==0){
    document.body.classList.toggle("dark-mode")
    botaoDarkMode[3].innerText ="DarkMode"
   } else{
      document.body.classList.toggle("dark-mode")
    botaoDarkMode[3].innerText ="LightMode"
   }
}
 botaoDarkMode[3].addEventListener("click", acionaDarkMode)

 function IniciaNavTab(){
 const tabMenu = document.querySelectorAll(".js-tabmenu li");
 const tabContent = document.querySelectorAll(".js-tabcontent section");

 function activeTab(index) {
   tabContent.forEach((section) => {  
       section.classList.remove("ativo")
   });
   tabContent[index].classList.add("ativo") 
 }
   tabMenu.forEach((itemMenu, index) => {  
      itemMenu.addEventListener("click", () => {
          activeTab(index);          
      });
   });
}
IniciaNavTab()

function initAccordion(){
   const accordionList = document.querySelectorAll(".jsAccordionList dt")
   
   function activeAccordion () {
       this.classList.toggle("ativo");
       this.nextElementSibling.classList.toggle("ativo");
   }
       
   
   
   accordionList.forEach((item) => {
       item.addEventListener("click",activeAccordion);
   })
   }
   
initAccordion()

function initScrollSuave() {
const linksInternos = document.querySelectorAll(".js-menu a[href^='#'")

linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection)
})


function scrollToSection (event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href) 
    
    section.scrollIntoView({   
        behavior: "smooth", 
        block: "start" 
    });
   }
}

initScrollSuave()

function initAnimacaoScroll(){

   window.addEventListener("scroll", animaScroll)
   
   const sections = document.querySelectorAll(".js-scroll")
   const windowMetade = window.innerHeight * 0.75
   function animaScroll(){
       sections.forEach((section) => {
           const sectionTop = section.getBoundingClientRect().top;
           const isSectionVisible = (sectionTop - windowMetade) < 0;
           if(isSectionVisible){
               section.classList.add("ativo")
           } else 
               section.classList.remove("ativo")
       })
   }
   
   animaScroll()
   }

   initAnimacaoScroll()
   