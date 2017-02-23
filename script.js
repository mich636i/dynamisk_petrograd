window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);
    visProdukt();


}

function visProduktListe(listen) {
    console.table(listen);
    listen.forEach(visProdukt);
}

function visProdukt(produkt) {
    console.log("produkt");
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
