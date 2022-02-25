import React from "react";

class Inputs extends React.Component {
    render() {
      const { label, type, name, value, handleChange } = this.props
  
      return (
        <div> 
        <label>{label}<input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
        </label>       
        </div>
      )
    }
  }
  
  export default Inputs;