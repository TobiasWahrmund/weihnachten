// ============================================================
// TOBIS WEIHNACHTSWUNSCHLISTE
//
// Pflicht: id (eindeutig), title
// Optional: description, price, url, urlLabel (Text des Links, Standard: "Zum Shop"), image
// ============================================================

const config = {
  title: "Tobis Weihnachtswünsche",
  intro: "Ein paar Ideen, worüber ich mich zu Weihnachten freuen würde."
};

const gifts = [
  {
    id: "mastering-french-cooking",
    title: "Mastering the Art of French Cooking",
    description: "Bitte im Hardcover :)",
    price: "49,23€",
    url: "https://www.amazon.com/Mastering-Art-French-Cooking-One/dp/B006D1RGKC",
    image: "https://m.media-amazon.com/images/I/81hoR1jFXOL._SL1500_.jpg"
  },
  {
    id: "mandoline",
    title: "Küchen-Mandoline",
    description: "Ist nur ein Vorschlag, aber bitte etwas aus Deutschland :)",
    price: "54,90€",
    url: "https://www.boerner.de/borner-vital-mandolin-basis-set/",
    image: "https://www.boerner.de/wp-content/uploads/2022/04/B09LMB8V21.MAIN_.jpg"
  },
  {
    id: "fallerMarmelade",
    title: "Erdbeer Fruchtaufstrich mit Waldmeistergeschmack",
    description: "1 (max. 2 Gläser)",
    price: "5,49€",
    url: "https://shop.fallerkonfitueren.de/erdbeer-fruchtaufstrich-mit-waldmeistergeschmack-330g-60-frucht/156803308138001",
    image: "https://shop.fallerkonfitueren.de/media/0f/24/47/1784836864/c5093c8d277d8dfb129ffb7114193644.jpeg?ts=1786392094"
  },
  {
    id: "zwillingMesser",
    title: "Zwilling-Messerset",
    description: "Made in Germany",
    price: "189€",
    url: "https://www.zwilling.com/de/zwilling-gourmet-7-tlg-selbstschaerfender-messerblock-schwarz-36133-210-0/36133-210-0.html",
    image: "https://www.zwilling.com/dw/image/v2/BCGV_PRD/on/demandware.static/-/Sites-zwilling-master-catalog/default/dwbf0fe8ea/images/large/36133-210-0_1.jpg?sw=651&sh=651&sm=fit"
  },
  {
    id: "superfestGlaeser",
    title: "Superfest Gläser",
    description: "Sie werden nicht mehr hergestellt, aber ich hätte gerne welche :) Vielleicht kennt ja jemand jemanden, der jemanden kennt... damals waren die Gläser ja weitverbreitet.",
    price: "",
    url: "https://de.wikipedia.org/wiki/Superfest",
    urlLabel: "Mehr zu Superfest",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Superfest-glas-025-2020.jpg/960px-Superfest-glas-025-2020.jpg"
  },
  {
    id: "vorratsDose",
    title: "Vorratsdose",
    description: "Die Version in 20cm",
    price: "24,90€",
    url: "https://www.otto.de/p/kitsch-kitchen-vorratsdose-blechdose-metall-el-restaurante-1-tlg-sealife-ca-10x15cm-oder-11x20cm-S0GLM0O4/?variationId=S5Q7LTGF6STG#",
    image: "https://i.otto.de/i/otto/3068fc60-3a8c-4525-a8b8-463e38b7dc44?h=520&w=551&sm=clamp&upscale=true&fmt=auto"
  }
];
