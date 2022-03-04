import React from "react";
import '../Form.css';
import EstadoFavorito from "./EstadoFavorito";
import Inputs from "./Inputs";
import Select from "./Select";

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
          <EstadoFavorito
            value={this.state.estadoFavorito}
            handleChange={this.handleChange}
          />    
          <Inputs
            label="Nome"
            name="name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
          /> 
          <Inputs
            label="E-mail"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />               
          <Select
            name="estadoFavorito"
            label="Estado"
            value={this.state.estadoFavorito}
            handleChange={this.handleChange}
            options={['São Paulo', 'Rio de Janeiro', 'Pernambuco', 'Minas Gerais']}
          />

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