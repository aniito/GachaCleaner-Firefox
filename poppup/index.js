
document.getElementById("actif").addEventListener("click", onoff);
function onoff(){

    var actif = document.getElementById("actif");
    if(actif.checked){
        document.querySelector('#protect').classList.add('hidden');    
        localStorage.setItem("protection", "off");
        browser.storage.local.set({"protection": "off"});
    }else{
        document.querySelector('#protect').classList.remove('hidden');
        localStorage.setItem("protection", "on");
        browser.storage.local.set({"protection": "on"});
        
    }


    
    
}

if (localStorage.getItem("protection") == "" || localStorage.getItem("protection") == null || localStorage.getItem("protection") == undefined || localStorage.getItem("protection") == 0){
    localStorage.setItem("protection", "off");
    document.querySelector('#protect').classList.add('hidden');    
    document.getElementById("protection").checked = true;
    browser.storage.local.set({"protection": "off"});

} else {
    if(localStorage.getItem("protection") == "on"){
        document.getElementById("actif").checked = false;
        
    }else{
        document.getElementById("actif").checked = true;
        
    }
    onoff();
}

document.getElementById("pronom").addEventListener("click", pronom);

function pronom(){
    
    var pronom = document.getElementById("pronom");
    if(pronom.checked){
        localStorage.setItem("pronom", "elle");
        browser.storage.local.set({"pronom": "elle"});
    }else{
        localStorage.setItem("pronom", "il");
        browser.storage.local.set({"pronom": "il"});
    }
    
}

if (localStorage.getItem("pronom") == "" || localStorage.getItem("pronom") == null || localStorage.getItem("pronom") == undefined || localStorage.getItem("pronom") == 0){
    localStorage.setItem("pronom", "il");
    browser.storage.local.set({"pronom": "il"});
} else {
    if(localStorage.getItem("pronom") == "il"){
        document.getElementById("pronom").checked = false;
        browser.storage.local.set({"pronom": "il"});
    }else{
        document.getElementById("pronom").checked = true;
        browser.storage.local.set({"pronom": "il"});
    }
    pronom();
    
}





function pronom(){
    
    var pronom = document.getElementById("pronom");
    if(pronom.checked){
        localStorage.setItem("pronom", "elle");
        browser.storage.local.set({"pronom": "elle"});
    }else{
        localStorage.setItem("pronom", "il");
        browser.storage.local.set({"pronom": "il"});
    }
    
}


function purification(){
    var purification = document.getElementById("purification");
    if(purification.checked){
        localStorage.setItem("purification", "off");
        browser.storage.local.set({"purification": "off"});
    }else{
        localStorage.setItem("purification", "on");
        browser.storage.local.set({"purification": "on"});
    }
}

document.getElementById("purification").addEventListener("click", purification);

if (localStorage.getItem("purification") == "" || localStorage.getItem("purification") == null || localStorage.getItem("purification") == undefined || localStorage.getItem("purification") == 0){
    localStorage.setItem("purification", "on");
    browser.storage.local.set({"purification": "on"});
} else {
    if(localStorage.getItem("purification") == "on"){
        document.getElementById("purification").checked = false;
        browser.storage.local.set({"purification": "on"});
    }else{
        document.getElementById("purification").checked = true;
        browser.storage.local.set({"purification": "off"});
    }
    purification();
    
}



