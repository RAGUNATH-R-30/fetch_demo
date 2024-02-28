var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json").then((data)=>data.json()).then((data1)=>card_build(data1))
var result = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json").then((data)=>data.json()).then((data1)=>console.log(data1))

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className ="row"


function card_build(res1){
    for(var i =0;i<res1.length;i++){
        var col=document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML =`<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${res1[i].name}</h5>
          <p class="card-text">${res1[i].capital}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}