import { Component } from "react";

class TvShow extends Component {
  render() {    
    const {tvShow} = this.props;    

      return (
        <article>
          <h2>{tvShow.name}</h2>
          <img src={tvShow.image} alt={tvShow.name} />
          <p>Gênero: {tvShow.genre}</p>
          <p>Personagens: {tvShow.characters.map((character) => {
            return <strong>{`${character} | `}</strong>
        })}</p>
      </article>
          
      )
  }
}

export default TvShow;