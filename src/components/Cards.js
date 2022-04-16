import Card from "./Card";

function Cards(props) {
  const cards = [];
  const cardsData = props.cardsData;

  for (let i = 0; i < cardsData.length; i++) {
    cards.push(
      <Card
        image={cardsData[i].image}
        title={cardsData[i].title}
        description={cardsData[i].description}
      />
    );
  }
  return (
      <div className="columns is-multiline">{cards}</div>
  );
}

export default Cards;
