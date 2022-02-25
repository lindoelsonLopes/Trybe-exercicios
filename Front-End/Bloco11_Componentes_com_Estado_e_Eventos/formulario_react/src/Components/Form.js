import React from "react";
import '../Form.css';

class Form extends React.Component {
  constructor() {
    super()

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      name: '',
      select: ''
    }
  }

  handleTextAreaChange(event) {
    this.setState({ estadoFavorito: event.target.value }) 
  }

    render() {
        return (
        <form className="form-content">
            <label htmlFor="favorito">
            Diga qual é o seu Estado favorito! Do Brasil ou do React ?
            <textarea
              id="favorito" 
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleTextAreaChange}
            />
            </label>

            <div> 
            <label>
                E-mail
                <input name="email" />
            </label>
            </div>

            <div>
            <label>
                Nome
                <input name="name" />
            </label>
            </div>

            <div>
            <label>
                Estado
                <select name="select">
                <option value="saoPaulo" selected>Escolher</option>
                <option value="saoPaulo" >São Paulo</option>
                <option value="saoPaulo" >Rio de Janeiro</option>
                </select> 
            </label>
            </div>

        </form>
    );
  }
}

export default Form;