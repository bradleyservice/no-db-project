import React, {Component} from 'react';

class AddMovie extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            year: '',
            genre: '',
            posterImg: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd = (e) => {
        const {title, year, genre, posterImg} = this.state;
        e.preventDefault();
        this.props.addMovie(title, year, genre, posterImg);
    }

    render(){
        return (
            <form className='form' onSubmit={this.handleAdd}>
                <input name='title' placeholder='Movie Title'
                onChange={e => this.handleChange(e)}/>
                <input name='year' placeholder='Release Year'
                onChange={e => this.handleChange(e)}/>
                <input name='genre' placeholder='Genre'
                onChange={e => this.handleChange(e)}/>
                <input name='posterImg' placeholder='Poster Image Link'
                onChange={e => this.handleChange(e)}/>
                <button type='submit'>Add Movie</button>
            </form>
        )
    }
}

export default AddMovie