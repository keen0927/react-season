import React from 'react'
import ReactDom from 'react-dom'
import SeosonDisplay from './SeosonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                });
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );        
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeosonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please Accept location request" />;
    }
}

ReactDom.render(
    <App/>,document.querySelector('#root')
)
