let container=document.querySelector('.container')
let input=document.getElementById('input')

let btn=document.getElementById('btn')
               
let div=document.querySelector("task task1")


btn.addEventListener('click' ,function(eo){
  eo.preventDefault()
  let newdiv=`<div class="task task1">
<span class="icon-star-empty  icon"></span>     
<p> <br> ${input.value} <br>     </p>
<div class="angry">
    <sapn class="icon-box-remove icon"></sapn>

    <span class="icon-angry2 icon"></span>
</div>



</div>

` 

    container.innerHTML+=newdiv
    
})
container.addEventListener('click', function(eo){

  
  if (eo.target.className =="icon-box-remove icon") {
    eo.target.parentElement.parentElement.remove()
  }
  else if(eo.target.className=="icon-angry2 icon"){
let heart=`<span class="icon-heart"></span>`

    eo.target.classList.add("dd")
    eo.target.parentElement.innerHTML +=heart
    eo.target.parentElement.querySelectorAll('p').classList.add('nn')
  }
  else if(eo.target.className=="icon-star-empty  icon"){
    eo.target.classList.add("orange")
    container.prepend(eo.target.parentElement)
  }
})
 /*finish hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh*/
