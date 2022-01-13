// import { Component } from 'react'
// import withRouter from '../lib/withRouter'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// 1)
const Appointment = () => {

    const params = useParams()
    console.log(params)

    const [details, setDetails] = useState(null)

    // in params we see an 'appointmentId' property!

    // I got the ID from the URL! now it's time to fetch info about that specific appointment...
    // componentDidMount is not available here, we're in a functional component...
    // but we can use another hook, called useEffect()
    useEffect(() => {
        // put here the code please :)

        const fetchData = async () => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/agenda/' + params.appointmentId)
                if (response.ok) {
                    let data = await response.json()
                    console.log('DATA', data)
                    // now I want to safely store these details in my state!
                    setDetails(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        // we had to declare the async fetch function inside the callback, because the callback
        // itself can not be asynchronous in a useEffect hook :(

    }, [])

    return (
        <div>
            <h1>APPOINTMENT DETAILS</h1>
            {
                details && (
                    <div>
                        <h3>NAME: {details.name}</h3>
                        <h3>DATE: {details.time}</h3>
                        <h3>DESCRIPTION: {details.description}</h3>
                    </div>
                )
            }
        </div>
    )
}

export default Appointment

// 2)
// class Appointment extends Component {

//     state = {
//         details: null
//     }

//     componentDidMount = async () => {

//         const appointmentId = this.props.router.params.appointmentId

//         try {
//             let response = await fetch('https://striveschool-api.herokuapp.com/api/agenda/' + appointmentId)
//             if (response.ok) {
//                 let data = await response.json()
//                 console.log('DATA', data)
//                 // now I want to safely store these details in my state!
//                 this.setState({
//                     details: data
//                 })
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     render() {

//         // this component now, thanks to the withRouter function, is getting MORE PROPS than before!
//         // we have now location, params and navigate from the PROPS!
//         console.log(this.props.router.params.appointmentId)

//         return (
//             <div>
//                 <h1>APPOINTMENT DETAILS</h1>
//                 {
//                     this.state.details && (
//                         <div>
//                             <h3>NAME: {this.state.details.name}</h3>
//                             <h3>DATE: {this.state.details.time}</h3>
//                             <h3>DESCRIPTION: {this.state.details.description}</h3>
//                         </div>
//                     )
//                 }

//             </div>
//         )
//     }
// }

// export default withRouter(Appointment)

// we're being brought here because we clicked on one of the appointments
// here we're getting the ID of the appointment in the address bar!
// I want to grab it, do a fetch with that ID and receive the details for that appointment
// then I want to store those details in the state of this component so I can render them
// in the JSX
// for grabbing that ID I need useParams hook from react-router-dom
// but we have a class component! :(
// 2 options!
// 1) I can convert this class component to a function, so I can use useParams()
// 2) use the withRouter wrapper