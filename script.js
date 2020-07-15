let APIKEY = "4sxWhKytR71eGgiihMx5A3X2YO25figQ";

 document.addEventListener("DOMContentLoaded", init);
 function init() {
   document.getElementById("btnSearch").addEventListener("click", ev => {
     ev.preventDefault();
     let search = document.getElementById("search").value.trim();
     let limit = 15;
     let url = `https://api.giphy.com/v1/gifs/search?api_key=4sxWhKytR71eGgiihMx5A3X2YO25figQ&q=${search}&limit=${limit}&offset=5&rating=g&lang=en`;
     console.log(url);
     fetch(url)
       .then(response => response.json())
       .then(content => {

         for (var index=0; index<limit; index++){
           let imgtag = document.createElement("figure");
         let img = document.createElement("img");
           img.src = content.data[index].images.downsized.url;
         img.alt = content.data[index].title;
         imgtag.appendChild(img);
         let show = document.querySelector(".container");
         show.insertAdjacentElement("afterbegin", imgtag);
         document.querySelector("#search").value = "";
         }

       });
   });
 }
