const cont=document.querySelector(".container");
const image=cont.querySelectorAll(".icone");
const imgcard=cont.querySelectorAll(".image");



// async function setTEmps(code,svgContainer) {
    
//     try{
//       const    response    =    await fetch(`./assets/${code}`)
      
//         if (!response.ok) {
//           throw new Error("Network response was not ok " + response.statusText);
//         }
//         const svgContent = await response.text();
//         svgContainer.forEach((element) => {
//             element.innerHTML += svgContent;
//             console.log(element);
//         });
//     }
//      catch(error) {
//         console.error("Erreur lors du chargement du SVG:", error);
//       }
//     } setTEmps("github.svg",image);
//     setTEmps("share-all.svg",image);

// image.forEach(element => {
//   element.innerHTML+=`<a href="https://github.com/assinscreedFC"        target="_blank" >
//                       <i class="fab fa-github "></i>
//                       </a>`
//   // "<img src=\"./assets/github.svg\" alt=\"\" width=\"34\"  height=\"24\" >"
//   element.innerHTML+="<img src=\"./assets/share-all.svg\" alt=\"\" width=\"34\"  height=\"24\">"
// });
   
imgcard.forEach(element => {
let gims =element.queryselrctor("img");
 gims.src= "./assets/sasuke.jpeg" ;


});

function toggleContent() {
  let content = document.querySelector('.content-header');
  let button = document.getElementById('toggleButton');

  if (content.classList.contains('expanded')) {
      content.classList.remove('expanded');
      button.textContent = 'Learn More';
  } else {
      content.classList.add('expanded');
      button.textContent = 'Show Less';
  }
}

function toggleCard() {
  let content = document.querySelector('.container');
  let spane=document.querySelectorAll(".codepen-button");

  if (content.classList.contains('expandeddude')) {
      content.classList.remove('expandeddude');
      spane[0].style.display="block";
      spane[1].style.display="none";
  } else {
      content.classList.add('expandeddude');
      spane[1].style.display="block";
      spane[0].style.display="none";
  }
}
