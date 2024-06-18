const cont=document.querySelector(".container");
const image=cont.querySelectorAll(".icone");
const imgcard=cont.querySelectorAll("img");



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

image.forEach(element => {
  element.innerHTML+=`<a href="https://github.com/assinscreedFC"        target="_blank" >
                      <i class="fab fa-github "></i>
                      </a>`
  // "<img src=\"./assets/github.svg\" alt=\"\" width=\"34\"  height=\"24\" >"
  element.innerHTML+="<img src=\"./assets/share-all.svg\" alt=\"\" width=\"34\"  height=\"24\">"
});
   
imgcard.forEach(element => {

 element.src= "./assets/sasuke.jpeg" ;


});

function toggleContent() {
  var content = document.querySelector('.content-header');
  var button = document.getElementById('toggleButton');

  if (content.classList.contains('expanded')) {
      content.classList.remove('expanded');
      button.textContent = 'Learn More';
  } else {
      content.classList.add('expanded');
      button.textContent = 'Show Less';
  }
}
