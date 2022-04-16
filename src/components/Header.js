import coverArt from "../img/coverArt.jpg";
const style = {
  backgroundImage: `url(${coverArt})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
};

function Header() {
  return (
    <section className="section">
      <div style={style} className="hero is-medium coverArt">
        <div className="hero-body">
          <h1 className="title is-1 has-text-white">Jesper van Daatselaar</h1>
          <h1 className="subtitle is-2 has-text-white">
            A Dutch view on life.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
