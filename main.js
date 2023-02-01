const modal=document.querySelector(".modal");
const btnOpen=document.querySelector(".open-modal-btn");
const iconClose=document.querySelector(".modal__header i");
const btnClose=document.querySelector(".modal__footer button");

function toggleModal(){
    modal.classList.toggle("hide");
};
btnOpen.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
iconClose.addEventListener('click',toggleModal);
modal.addEventListener('click',function(e){
    if(e.target==e.currentTarget){
        toggleModal();
    }
});