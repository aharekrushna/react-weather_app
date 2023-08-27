import Fetch from './Fetch' ;
const card = () => {
    return ( <div className="omg">
        <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
  <div className="card">
    <div className="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"className="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" />
  </div>
</a>

<a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
  <div className="card">
    <div className="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" className="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" className="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"className="character" />
  </div>
</a></div>
     );
};
export default card;