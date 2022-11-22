import React from "react";
import axios from "axios";

// const Weather = () => {
//     return (
//         <div>
//             Weatherdwqasasas
//         </div>
//     )
// }

class Weather extends React.Component {

    async componentDidMount() {
        let data = await axios.post({
            method: 'POST',
            url: 'http://localhost:8080/get-data-by-url'
        })
    }

    render() {
        return (
            <div>Hello Vietnam</div>
        )
    }
}

export default Weather;