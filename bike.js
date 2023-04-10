document.body.innerHTML = `<div class="heading-container">
<h1>Smart Bikes: </h1>
<img class="icon" src="https://www.revoltmotors.com/images/cosmic-black/19.png" height="250px" width="250px" ></img>
<div id="maincontainer" class="main-container"> </div>`;


const getData = async()=>{

try{
    const data=await fetch("http://api.citybik.es/v2/networks?fields=id,name,href");
    const bikes=await data.json();
    console.log(bikes);
    maincontainer.innerHTML="";
    bikes.networks.forEach(bikes => {
        displayData(bikes);
    });
} catch(error){
    console.log(error);
}
}


getData();


const displayData=(obj)=>{
maincontainer.innerHTML+= `
<div class="container">
<h3 class="blue">Bike Name: <span>${obj.name}</span></h3>
<p>Bike Network:<span>${obj.networks}</span></p>
<p>Bike Id: <span>${obj.id}</span></p>
</div> `    
}