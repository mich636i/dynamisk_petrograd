window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);



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
    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;

    klon.querySelector(".data_billede").src = "/image/imgs/small/" + produkt.billede + "-sm.jpg ";

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
