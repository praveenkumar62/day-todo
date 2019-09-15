import React, {Component} from 'react'
import '../css/Addtodocss.css'


class AddTodo extends Component {
    state ={
        desc: '',
        author: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.receiveData(this.state);
        this.setState({
            desc: '',
            author: ''
        })
    }

    render() {
        
        return(
            <div className="container-add">
                <form>
                    <div className="form-group">
                        <input type="text" name="desc" id="add-desc" className="form-control" placeholder="What you want to achieve today..." onChange={this.handleChange} value={this.state.desc} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="author" id="add-author" className="form-control" placeholder="Who believes in you ?"  onChange={this.handleChange}value={this.state.author} />
                    </div>
                    <button type="submit" className="btn btn-add" onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo
