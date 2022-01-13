import { Component } from "react"
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        appointments: [],
        isLoading: true
    }

    componentDidMount = async () => {
        // a lifecycle method happening just after the initial render
        // this is the ideal place for a network call, like a fetch!
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/agenda/')
            if (response.ok) {
                let data = await response.json()
                console.log('DATA', data)
                this.setState({ // is asynchronous!
                    appointments: data,
                }, () => {
                    console.log(this.state.appointments) // <-- this is guaranteed to be executed after the setState
                })
                setTimeout(() => {
                    this.setState({
                        isLoading: false
                    })
                }, 500)
                // console.log(this.state.appointments) // sometimes this can be still the initial value!
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <h1>HOME COMPONENT</h1>
                {
                    this.state.isLoading && <h3>...LOADING...</h3>
                }
                {
                    !this.state.isLoading && this.state.appointments.map(appointment => (
                        <div key={appointment._id}>
                            <Link to={'/agenda/' + appointment._id}>{appointment.name}</Link>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Home

// I want to load Home on '/'