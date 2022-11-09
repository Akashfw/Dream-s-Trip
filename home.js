// let image_data="https://636b7b867f47ef51e13194b8.mockapi.io/data/pro";

fetch("./home.json").then((res)=>res.json()).then((data)=>display(data.top1)).catch((err)=>console.log(err));

function display(arr){
    document.querySelector("#mid-imgdiv").innerHTML="";
    arr.forEach(elem => {
        let Div=document.createElement("div");
        let Img=document.createElement("img");
        Img.setAttribute("src", elem.img);
        let city=document.createElement("h3");
        city.innerText=elem.dis;
        let details=document.createElement("p");
        details.innerText=elem.discription;
        details.style.color="blue";
        Div.append(Img,city,details);
        document.querySelector("#mid-imgdiv").append(Div);
    });
}

fetch("./home.json").then((res)=>res.json()).then((data)=>display2(data.top2)).catch((err)=>console.log(err));

function display2(arr2){
    arr2.forEach(elem => {
        let Div=document.createElement("div");
        let Img=document.createElement("img");
        Img.setAttribute("src", elem.img);
        let city=document.createElement("h3");
        city.innerText=elem.dis;
        Div.append(Img,city);
        document.querySelector("#mid-imgdiv2").append(Div);
    });
}

fetch("./home2.json").then((res)=>res.json()).then((data)=>display3(data.bottom1)).catch((err)=>console.log(err));

function display3(arr3){
    arr3.forEach(elem => {
        let Div=document.createElement("div");
        let Img=document.createElement("img");
        Img.setAttribute("src", elem.img);
        let city=document.createElement("h3");
        city.innerText=elem.dis;
        let details=document.createElement("p");
        details.innerText=elem.discription;
        details.style.color="blue";
        Div.append(Img,city,details);
        document.querySelector("#bottom1").append(Div);
    });
}

fetch("./home2.json").then((res)=>res.json()).then((data)=>display4(data.bottom1)).catch((err)=>console.log(err));

function display4(arr3){
    arr3.forEach(elem => {
        let Div=document.createElement("div");
        let Img=document.createElement("img");
        Img.setAttribute("src", elem.img);
        let city=document.createElement("h3");
        city.innerText=elem.dis;
        Div.append(Img,city);
        document.querySelector("#bottom2").append(Div);
    });
}