import React from "react";
import '../Form.css';

class Form extends React.Component {
  constructor() {
    super()

    // this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      name: '',
      select: '',
      validar: 'false'
    }
  }

//   handleTextAreaChange(event) {
//     this.setState({ estadoFavorito: event.target.value }) 
//   }

//   handleEmailChange(event) {
//     this.setState({ email: event.target.value }) 
//   }

// event handlers genéricos

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
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
              onChange={this.handleChange}
            />
            </label>

            <div> 
            <label>
                E-mail
                <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
            />
            </label>
            </div>

            <div>
            <label>
                Nome
                <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </label>
            </div>

            <div>
            <label>
                Estado
                <select
                name="select"
                value={this.state.name}
                onChange={this.handleChange}
              >
                <option value="Escolher" selected>Escolher</option>
                <option value="São Paulo" >São Paulo</option>
                <option value="Rio de Janeiro" >Rio de Janeiro</option>
                </select> 
            </label>
            </div>

            <div>
            <label>
                <input
                type="checkbox"
                name="validar"
                value={this.state.name}
                onChange={this.handleChange}
                />
                Gostou
            </label>
            </div>

        </form>
    );
  }
}

export default Form;