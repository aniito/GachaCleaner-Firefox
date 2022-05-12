
function purified(pronom) {
  let purr = document.body.getElementsByTagName("*");
  for (let i = 0; i < purr.length; i++) {
      if (purr[i].nodeType == 1 || purr[i].nodeType == 3) {
          for (let j = 0; j < purr[i].childNodes.length; j++) {
                if (purr[i].childNodes[j].nodeType == 3) {
                  if (purr[i].childNodes[j].nodeValue == "iel" || purr[i].childNodes[j].nodeValue== "Iel" || purr[i].childNodes[j].nodeValue== "IEl" || purr[i].childNodes[j].nodeValue== "IEL" || purr[i].childNodes[j].nodeValue== "ieL" || purr[i].childNodes[j].nodeValue== "iEl" || purr[i].childNodes[j].nodeValue== "-iel") {
                    purr[i].childNodes[j].nodeValue = " " + pronom;
                } else if (purr[i].childNodes[j].nodeValue == "\"IEL\"") {
                  purr[i].childNodes[j].nodeValue = " \"" + pronom.toUpperCase() + "\"";
                } else if (purr[i].childNodes[j].nodeValue == "\"iel\"") {
                  purr[i].childNodes[j].nodeValue = " \"" + pronom + "\"";
                }
                purr[i].childNodes[j].nodeValue = purr[i].childNodes[j].nodeValue.replace(/\x20+(iel|IEL|Iel|ieL|iEl|IeL)/g, " " + pronom).replace(/^(iel|IEL|Iel|ieL|iEl|IeL)/g, " " + pronom).replace(/\x20+(("|')(iel|IEL|Iel|ieL|iEl|IeL)("|'))/g, " \"" + pronom + "\" ");
                }
          }
      }

  }
      

};



function purifiedEcrit(pronom) {
    let purr = document.body.getElementsByTagName("*");
    for (let i = 0; i < purr.length; i++) {
        if (purr[i].nodeType == 1 || purr[i].nodeType == 3) {
            for (let j = 0; j < purr[i].childNodes.length; j++) {
                if (purr[i].childNodes[j].nodeType == 3) {
                    if (pronom == "il") {
                        purr[i].childNodes[j].nodeValue = purr[i].childNodes[j].nodeValue.replace(/é(\.|·|\/)e /g, "é ").replace(/(\.|·|\/)e(\.|·|\/)s/g, "s").replace(/e(\.|·|\/)e/g, "e").replace(/(\.|·|\/)rice(\.|·|\/)s/g, "s").replace(/un(\.|·|\/)e/g, "un").replace(/(\.|·|\/)e /g, " ").replace(/(\.|·|\/)e$/g, " ").replace(/(\.|·|\/)fe(\.|·|\/)s/g, "s ").replace("🏳️‍🌈", "🏳️‍🌈⃠");
                    } else {

                      purr[i].childNodes[j].nodeValue = purr[i].childNodes[j].nodeValue.replace(/é(\.|·|\/)e /g, "ée ").replace(/(\.|·|\/)e(\.|·|\/)s/g, "es").replace(/e(\.|·|\/)e/g, "e").replace(/(eur| )(\.|·|\/)rice(\.|·|\/)s/g, "rices").replace(/un(\.|·|\/)e/g, "une").replace(/(\.|·|\/)e /g, "e ").replace(/(\.|·|\/)e$/g, "e ").replace(/(\.|·|\/)fe(\.|·|\/)s/g, "fes ").replace("🏳️‍🌈", "🏳️‍🌈⃠");
                    }

                    
                }
            }
        }

    }



}


function allonsycamarades() {
  var time = 100;
  if(window.location.href.includes('twitter.com')){
    time = 5500;
  }
  setTimeout(function()
    {
    browser.storage.local.get("protection").then((onouoff) => {
        if (onouoff.protection == undefined) {

            browser.storage.local.set({"protection": "off"});

        } else if (onouoff.protection == "on") {

            browser.storage.local.get("pronom").then((result) => {
                if (result.pronom == undefined) {
                    browser.storage.local.set({"pronom": "il"});
                    purified("il");

                    browser.storage.local.get("purification").then((res) => {
                        if (res.purification == "on" || res.purification == undefined) {
                            purifiedEcrit(result.pronom);
                        }
                    });


                } else {

                    purified(result.pronom);

                    browser.storage.local.get("purification").then((res) => {
                        if (res.purification == "on") {
                            purifiedEcrit(result.pronom);
                        }
                    });


                }


            });


        }

    });
  }, time);
}

document.addEventListener("DOMContentLoaded", allonsycamarades());
