import React, {Component} from 'react';
import AddMovie from './AddMovie'

class WantToWatch extends Component {
    constructor(){
        super();

        this.state = {
            movies: []
        }
    }


    render(){
        return(
            <main>
                <AddMovie addMovie={this.props.addMovie} />
                <div className="watchlist">
                    {this.props.watchlist}
                </div>
            </main>
        )
    }
}

export default WantToWatch