import React from "react";

class Select extends React.Component {
    render() {
      const { label, options, name, value, handleChange } = this.props
  
      return (
        <div> 
        <label>{label}</label>
        <select
          name={name}
          value={value}
          onChange={handleChange}
        >
         <option value=''></option>
         {options.map(option => 
         <option key={option} value={option}>{option}</option>
        )}
        </select>       
        </div>
      )
    }
  }
  
  export default Select;

//   <div>
//   <label>
//       Estado
//       <select
//       name="select"
//       value={this.state.name}
//       onChange={this.handleChange}
//     >
//       <option value="Escolher" selected>Escolher</option>
//       <option value="São Paulo" >São Paulo</option>
//       <option value="Rio de Janeiro" >Rio de Janeiro</option>
//       </select> 
//   </label>
//   </div>