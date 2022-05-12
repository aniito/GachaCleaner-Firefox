const $ = window.$;


  function purified(pronom) {
    $('body :not(script):not(style)').contents().filter(function() {
      return this.nodeType === 3;
    }).replaceWith(function() {
        if(this.nodeValue == "iel" || this.nodeValue == "Iel" || this.nodeValue == "IEl" || this.nodeValue == "IEL" || this.nodeValue == "ieL" || this.nodeValue == "iEl" || this.nodeValue == "-iel"){
            return " " + pronom;
        }
        else if(this.nodeValue == "\"IEL\""){
            return " \""+pronom.toUpperCase()+"\"";
        }else if(this.nodeValue == "\"iel\""){
          return " \""+pronom+"\"";
      }
      return this.nodeValue.replace(/\x20+(iel|IEL|Iel|ieL|iEl|IeL)/g, " "+pronom).replace(/^(iel|IEL|Iel|ieL|iEl|IeL)/g, " "+pronom).replace(/\x20+(("|')(iel|IEL|Iel|ieL|iEl|IeL)("|'))/g, " \"" + pronom + "\" ");
    
    
    });
  
    
  }

  function purifiedEcrit(pronom){
    $('body :not(script):not(style)').contents().filter(function() {
      return this.nodeType === 3;
    }).replaceWith(function() {
      if (pronom == "il"){
      return this.nodeValue.replace(/é(\.|·|\/)e /g, "é ").replace(/(\.|·|\/)e(\.|·|\/)s/g, "s").replace(/e(\.|·|\/)e/g, "e").replace(/(\.|·|\/)rice(\.|·|\/)s/g, "s").replace(/un(\.|·|\/)e/g, "un").replace(/(\.|·|\/)e /g, " ").replace(/(\.|·|\/)e$/g, " ").replace(/(\.|·|\/)fe(\.|·|\/)s/g, "s ");
      }else{
      
      return this.nodeValue.replace(/é(\.|·|\/)e /g, "ée ").replace(/(\.|·|\/)e(\.|·|\/)s/g, "es").replace(/e(\.|·|\/)e/g, "e").replace(/(eur| )(\.|·|\/)rice(\.|·|\/)s/g, "rices").replace(/un(\.|·|\/)e/g, "une").replace(/(\.|·|\/)e /g, "e ").replace(/(\.|·|\/)e$/g, "e ").replace(/(\.|·|\/)fe(\.|·|\/)s/g, "fes ");

      }
    
    });
  }


$(document).ready(function() {
  
browser.storage.local.get("protection").then((onouoff) => {
  if(onouoff.protection == undefined){
    
    browser.storage.local.set({"protection": "off"});
  
  }else if (onouoff.protection == "on"){

    browser.storage.local.get("pronom").then((result) => {
      if (result.pronom == undefined){
        browser.storage.local.set({"pronom": "il"});
        purified("il");
        console.log(result.pronom, result.value);
      
        browser.storage.local.get("purification").then((res) => {
          if (res.purification == "on" || res.purification == undefined){
            purifiedEcrit(result.pronom);
          }
        });
      
      
      
      }else{

        console.log(result.pronom);
        purified(result.pronom);

        browser.storage.local.get("purification").then((res) => {
          if (res.purification == "on"){
            purifiedEcrit(result.pronom);
          }
        });
      
      
      
      
      }
    
    
    
    
    
    
    });


    

  }

});

});


