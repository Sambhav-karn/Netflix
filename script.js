$('#movieSlider').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  dots: false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})


let allquestion = document.querySelectorAll(".faqQuestion");
allquestion.forEach((v,index)=>{
    v.addEventListener("click",()=>{
        v.nextElementSibling.classList.toggle("h-[auto]")
        v.nextElementSibling.classList.toggle("scale-y-100")
        v.nextElementSibling.classList.toggle("p-[20px]")
        v.children[1].classList.toggle("rotate-45")

        allquestion.forEach((el,i)=>{
            if(i!=index){
                el.nextElementSibling.classList.remove("h-[auto]","scale-y-100","p-[20px]")
                el.children[1].classList.remove("rotate-45")
            }
        })
    })
})