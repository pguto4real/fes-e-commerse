function openMenu(){
    document.body.classList += " menu--open"
}
function closeMenu(){
    document.body.classList.remove("menu--open")
}
const loadSnippet = (targetDivClass)=>{

    const targetEl = document.querySelector(".nav")
   
    fetch (`${targetDivClass}.html`)
    .then(res=>{
        
        if(res.ok){
            return res.text();
        }
    })
    .then(htmlSnippet=>{
     
        targetEl.innerHTML = htmlSnippet
    })
}

window.addEventListener('onload', loadSnippet('nav'));
// const updateSize = ()=>{
//     let window_width = window.innerWidth
//     if(window_width < 768){
//         console.log(window_width)

//         const nodeList = document.querySelector(".book__img");
//         console.log()
//         let nodeList1 = document.querySelectorAll('.book__wrapper')
// for (let i = 0; i < nodeList1.length; i++) {
  
//     nodeList1[i].style.width = nodeList.clientWidth+'px'
// //   .backgroundColor = "red";
// }
//     }
// }
// 