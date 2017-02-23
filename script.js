window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    visProdukt();
}

function visProdukt() {
    // Klon produktliste
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
    //indsæt data i klon

    //append klon til .produktliste
    document.querySelector(".produktliste").appendChild(klon);
}






//senere

//
//$.getJSON("link ... ", {
//    id: produktId
//}, viMmodalprodukt);
//
//function visModalProdukt(produkt) {
//    console.log("vis modal for", produkt);
//
//    //find modal_template - klon den
//    var klon = document.querySelector("#modal_template").content.cloneNode(true);
//
//    //put data i klon
//
//    //sletter der der står i modal-content
//    document.querySelector(".modal-centent").innerHTML = "";
//
//    //append klon til
//    document.querySelector(".modal-content").appendChild(klon);
//}
