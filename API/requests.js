import React, { Components } from 'react';
import axios from 'axios';
import { ENDPOINTS } from './endpoints';

export default class Requests extends Component{
    constructor(props) {
        super(props);

    this.state = {
        posts: []
    }
    }

    componentDidMount() {
        axios.get('https://610cfee166dd8f0017b76f7a.mockapi.io/users')
        .then(Response => {
            console.log(Response)
            this.setState({posts: Response.data})
        })
        .catch(Error => {
            console.log(Error)
        })
    }

    render() {
        const { posts } = this.state;
        return(
            <View>
                Works
            </View>
        )
    }

}
