export const renderRunLine = () =>{
 const runLine = document.querySelectorAll('.run-line')
  runLine.forEach(item=>{
    item.insertAdjacentHTML('afterbegin',` <span class="run-line__element">Дело помощи утопающим — дело рук самих утопающих! <span
            class="circle"></span></span>
    <span class="run-line__element">Шахматы двигают вперед не только культуру, но и экономику! <span
            class="circle"></span></span>
    <span class="run-line__element">Лед тронулся, господа присяжные заседатели! <span class="circle"></span></span>`)
  })
}

export const  arrowButtonElem = () => {
  const buttonArrowEle = document.querySelectorAll('.render-button')
  buttonArrowEle.forEach(item=>{
    item.insertAdjacentHTML('afterbegin',`<svg class="arrow-btn" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="#313131"/>
    <path d="M19.4618 13.5384L27.9233 21.9999L19.4618 30.4615" stroke="white" stroke-width="2" stroke-linecap="square"/>
</svg>`)
  })
}