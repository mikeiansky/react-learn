import {Component} from "react";


class Info extends Component {

    back = ()=>{
        console.log('info back')
    }

    forward = ()=>{
        console.log('info forward')
    }

    render() {
        return (
            <div>
                Hello Info
            </div>
        )
    }

}

export default Info