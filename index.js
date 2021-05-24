console.log("hello");

let source = "bbc-news";
let apikey = "aa957a51faef445c9d685a965b694242";

let accordion = document.getElementById("accordion");

//initializing xhr object
const xhr = new XMLHttpRequest();

//making a get request
xhr.open(
  "GET",
  `https://gnews.io/api/v3/topics/world?token=ac9ffb50b4cf9f3ffec9d01dbc536d2e`,
  true
);

//after sending the request what you want after that
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let str = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
           <div class="card-header" id="heading${index}">
             <h2 class="mb-0">
               <button
                 class="btn btn-link btn-block text-left"
                 type="button"
                 data-toggle="collapse"
                 data-target="#collapse${index}"
                 aria-expanded="true"
                 aria-controls="collapse${index}"
               >
    
               <b style="color:black;">${element.source.name}</b>  <i><small style="color:black;">${element.publishedAt} </small></i>
               </button>
             </h2>
           </div>
 
           <div
             id="collapse${index}"
             class="collapse "
             aria-labelledby="heading${index}"
             data-parent="#accordion"
           >
             <div class="card-body">
               ${element.title}. <a href = " ${element.url}" target = "_blank" >READ MORE HERE</a>
             </div>
           </div>
         </div>
         `;
      str += news;
    });
    accordion.innerHTML = str;
  } else {
    console.log("AN ERROR OCCURED");
  }
};

xhr.send();
