import Cards from "./Cards";

import box1 from "../img/box1.jpg";
import box2 from "../img/box2.jpg";
import box3 from "../img/box3.jpg";

const data = [
  {
    image: { src: box1, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
  {
    image: { src: box2, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
  {
    image: { src: box3, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
  {
    image: { src: box1, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
  {
    image: { src: box3, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
  {
    image: { src: box2, alt: "" },
    title: "Buren, Gelderland",
    description: "Shot with DJI Mini 2",
  },
];

function WorkSection() {
  return (
    <section className="section">
      <h1 className="title is-3">My work</h1>
      <a href="/">View all albums →</a>
      <br />
      <br />
      <Cards cardsData={data} />
    </section>
  );
}

export default WorkSection;
