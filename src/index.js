import React from 'react'
import ReactDom from 'react-dom'
import SeosonDisplay from './SeosonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
        };
    }


    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return (
            <div>
                Latitude: {this.state.lat}
            </div>
        )
    }
}

ReactDom.render(
    <App/>,document.querySelector('#root')
)
