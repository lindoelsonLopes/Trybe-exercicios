import React from "react";

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined;
    if(value.length > 120) error = "Texto está muito grande"

    return (
    <label htmlFor="favorito">
      Diga qual é o seu Estado favorito! Do Brasil ou do React ?
        <textarea
          id="favorito" 
          name="estadoFavorito"
          value={value}
          onChange={handleChange}
        />
        <span>{error ? error : ''}</span>
    </label>
    )
  }
}

export default EstadoFavorito;