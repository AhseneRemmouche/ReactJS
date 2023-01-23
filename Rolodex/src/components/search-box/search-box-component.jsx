import { Component } from "react";

class SearchBox extends Component {
    
  render() {
    console.log(this.props)
    const searchField = this.props
  
    return (
      < div >
    <input
                    className={this.props.className}
                    type='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                /> 
      </div >
    )
  }
}

export default SearchBox;