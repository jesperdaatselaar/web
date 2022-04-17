import GearItem from "./GearItem";

const gear = [
  { id: 1, title: "Sony Alpha A6100", description: "Sony 16-50mm f/3.5-5.6 OSS" },
  { id: 2, title: "DJI Mini 2", description: "Sunnylife ND4-ND8-ND16-ND32" },
];

const gearItems = []

for (let i = 0; i < gear.length; i++) {
    gearItems.push(<GearItem key={gear[i].id} title={gear[i].title} description={gear[i].description}/>)    
}
function GearSection(props) {
  return (
    <section className="section">
      <h1 className="title is-3">My gear</h1>
      <div className="columns">
          {gearItems}
      </div>
    </section>
  );
}

export default GearSection;
