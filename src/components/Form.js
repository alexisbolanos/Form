import React, { Component } from 'react';

class Form extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsable: '',
      description: '',
      priority: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsable: '',
      description: '',
      priority: 'low'
    });
  }

  handleInputChange(e) { //Se ejecuta cada vez que haya un cambio en inputext
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Category"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              
              />
          </div>
         
          <div className="form-group"> 
          <input
              type="text"
              name="priority"
              className="form-control"
              value={this.state.priority}
              onChange={this.handleInputChange}       
              />
           
          </div>
        
          <button type="submit" className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
          </button>
        </form>
      </div>
    )
  }

}

export default Form;