const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');
acordeonTriggers.forEach((triger)=> {
  triger.addEventListener('click',()=>{
    const acordeon = triger.parentElement;
    const isOpen = acordeon.classList.contains('open');
    if(isOpen){
      acordeon.classList.remove('open');
    }else{
      acordeon.classList.add('open');
    }

  });
});