// TODO: add code here
window.addEventListener("load", function(){
    const api_url = "https://handlers.education.launchcode.org/static/astronauts.json" ;
    async function getapi(url) {
       // Storing response
       const response = await fetch(url);
       // Storing data in form of JSON
       let data = await response.json();
       console.log(data);
       show(data);
    }
      getapi(api_url);
   
 });
 
 function show(data) {
    let list=""; 
    // Loop to access some specific datas:
    for (let items of data) {
        list += `<div class="astronaut"> 
        <div>
           <h3>${items.firstName} ${items.lastName}</h3>
           <ul>
              <li>Hours in space:${items.hoursInSpace}</li>                               
              <li>Active:${items.active}</li>
              <li>Skills:${items.skills}</li>
           </ul>
        </div>
        <img  class="avatar" src=${items.picture}>
 
     </div>`
       }
    // Setting innerHTML as list variable
    document.getElementById("container").innerHTML = list;
 }
 