import Cards from "./Cards";

import box1 from "../img/box1.jpg";
import box2 from "../img/box2.jpg";
import box3 from "../img/box3.jpg";

const data = [
  {
    id: 1,
    image: { src: box1, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
  {
    id: 2,
    image: { src: box2, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
  {
    id: 3,
    image: { src: box3, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  }
];

function RowSection() {
  return (
    <section className="section">
      <Cards cardsData={data} />
      <a href="#">View more →</a>
    </section>
  );
}

export default RowSection;
