import "./Home.css";
import { Link } from "react-router-dom";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const Home = () => {
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__left">
          <div className="home__left-text">
            <h1>
              Discover your favorite <span>phorographer</span>
            </h1>
            <p>
              Laqtah is a program that serve the photographer to make thire
              hobbies as work and easy to reach
            </p>
          </div>
          <div className="home__left-btns">
            <button>get started</button>
            <button>create now</button>
          </div>
        </div>
        <div className="home__right">
          <img src={require("../../images/homeImg.jpg")} alt="HomeImage" />
        </div>
      </div>
      <div className="home__bot">
        <div className="home__bot-title">
          <h1>Top Artists</h1>
          <Link to="/portress">View all</Link>
        </div>
        <div className="home__bot-artists">
          <ArtistCard username={"Jane_cooper"} eth={"10.20"} />
          <ArtistCard username={"Arlene_McCoy"} eth={"10.19"} />
          <ArtistCard username={"Cody_Fisher"} eth={"10.05"} />
          <ArtistCard username={"Wade_Warren"} eth={"10.05"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
