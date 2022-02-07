import React, { useState, useEffect } from "react";

const charImages = [
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2019/11/star-wars-nueva-esperanza-luke-skywalker.jpg?h=66d8ebbe&itok=AFysweOR",
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2019/09/c-3po.jpg?h=adbcd1a0&itok=GdvksfCR",
  "https://m.media-amazon.com/images/I/61srwGulapL._AC_SL1000_.jpg",
  "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg.webp",
  "https://3.bp.blogspot.com/--Oxg0f8Ypoo/VXG-vx1wrxI/AAAAAAAAC1M/zC9hJO88rQI/s1600/leia-princess-leia-organa-solo-skywalker-9301324-449-661.jpg",
  "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/86258_big.jpg",
  "http://imperialtroopers.es/personajes/0768x432/beru-lars.jpg",
  "https://www.latercera.com/resizer/NkqKmb_aiH7W09XZICt0J9u_1Rk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/FSYEHJTD4JASTO7J4CL6X5CYLU.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
  "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/12/obi-wan-kenobi.jpg?fit=2052%2C1155&ssl=1",
];

const CharacterById = (props) => {
  return (
    <img
      style={{ width: "600px" }}
      src={charImages[props.id - 1]}
      alt="Photo of SW Character."
    ></img>
  );
};
export default CharacterById;
