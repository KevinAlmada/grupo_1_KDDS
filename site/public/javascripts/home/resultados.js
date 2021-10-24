window.addEventListener("load", () => {
    window.sr = ScrollReveal() ;

    var slideUp = {
        distance: '50%',
        origin: 'bottom',
        opacity : "1",
         scale: 0.90 
    }
    sr.reveal(".cardsearch",slideUp)

    /* let cardsearch = document.querySelectorAll(".cardsearch")
    for (const prod of cardsearch) {
    console.log(prod)} */ 
})