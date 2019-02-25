import React from 'react'
import ReactDom from 'react-dom'
import SeosonDisplay from './SeosonDisplay';

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         lat: null,
    //     };

    //     window.navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             this.setState({
    //                 lat: position.coords.latitude
    //             });
    //         },
    //         (err) => console.log(err)
    //     );        
    // }

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

    componentDidUpdate() {
        console.log('just update')
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeosonDisplay lat={this.state.lat} />
        }

        return <div>Loading!</div>;
    }
}

ReactDom.render(
    <App/>,document.querySelector('#root')
)
