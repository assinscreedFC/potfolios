const cont=document.querySelector(".container");
const image=cont.querySelectorAll(".icone");


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
  element.innerHTML+="<img src=\"./assets/github.svg\" alt=\"\" width=\"34\"  height=\"24\" >"
  element.innerHTML+="<img src=\"./assets/share-all.svg\" alt=\"\" width=\"34\"  height=\"24\">"
});
   
