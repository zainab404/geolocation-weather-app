import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    // ^^^ we are subclassing React.Component
    // constructor(props){
    //     // constructor class is required to initialize State 
    //     super(props);
    //     // ^^^required when creating constructor class
    //     this.state = { lat: null, errorMessage: '' };
    //         // ^^^ this lat is now a "state property"
    // }
    state = {lat: null, errorMessage: ""}; 
    // LINE 15 ^ REPLACES THE ENTIRE CONSUTRCTOR CLASS
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // ^^^this getCurrentPosition method takes two arguments, ones a success variable and ones a failure variable

            (position) => this.setState({lat: position.coords.latitude}),
                // ^^^WE CALL SETSTATE TO UPDATE THE OBJECT WHEN 
                // THE GETCURRENTPOSITION FINDS YOUR LOCATION!!!
                
            (err) => this.setState({ errorMessage: err.message })   
        );
    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Loader message="Please Accept Location Request"/>;
    }
    //render (below) is a requirment when defining class components in react
    // the function is to return some jsx, we're never going to make a network request or find a user's location
    // it is just for returning and displaying jsx
    render() {
        return (
            <div className="border white">
                {this.renderContent()}
            </div>
        )
    }
};
// ^^^this render method is considered "conditional rendering"

ReactDOM.render(
    <App />, document.querySelector('#root')
)