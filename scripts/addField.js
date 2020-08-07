//  função do +novo horario duplica o setor da adição do horariro assim podendo colocar mais de um horario 
document.querySelector('#add-time')
.addEventListener("click", cloneField)

function cloneField(){
    

   const newFieldContainer = document.querySelector(".scheduleItem").cloneNode(true)

   const fields =newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value= ""
    })


   document.querySelector("#scheduleItems").appendChild(newFieldContainer)
}
