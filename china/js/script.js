
function display(){
  
    let priceEl = document.getElementById("priceTable");
     priceEl.style.display='none';

     let includeEl = document.getElementById("include");
     includeEl.style.display='none';
}



function itinerary(){
    let itineraryEl = document.getElementById("itineraryContent");
    itineraryEl.style.display='block';

    let priceEl = document.getElementById("priceTable");
    priceEl.style.display='none';

    let includeEl = document.getElementById("include");
    includeEl.style.display='none';
}

function price(){
    let itineraryEl = document.getElementById("itineraryContent");
    itineraryEl.style.display='none';

    let includeEl = document.getElementById("include");
    includeEl.style.display='none';

     let priceEl = document.getElementById("priceTable");
     priceEl.style.display='block';
}

function include(){
    let includeEl = document.getElementById("include");
    includeEl.style.display='block';

    let priceEl = document.getElementById("priceTable");
    priceEl.style.display='none';
    
    let itineraryEl = document.getElementById("itineraryContent");
    itineraryEl.style.display='none';
}

function langueFr(){
    document.getElementById("fr").style.display = 'none';
    document.getElementById("en").style.display = 'block';
}

function langueEn(){
    document.getElementById("fr").style.display = 'block';
    document.getElementById("en").style.display = 'none';
}