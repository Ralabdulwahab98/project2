import React from 'react';


export default class UserAccount extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            newItem: '',
            toggleEdit:'none',

        };
    }

    nameChange = (e) => { 
        this.setState({  newItem: e.target.value, });
        // e.target.value=''   
    }
    onClick = (e) => {
        this.setState({ toggleEdit:'display' }); 
    }
    onClickSave = (e) => {
        this.setState({ toggleEdit:'none' }); 
        console.log( 'onClickSave' ,this.props.username , this.state.newItem)
        this.props.editUser(this.props.username , this.state.newItem)
    }




    render() {
        console.log('<UserAccount/> name= ', this.props.username)
        console.log('<UserAccount/> tags =', this.props.history)
        return (
            <div className='UserAccount'>
                <h1> Hi {this.props.username} </h1>
                
                    <p>Edit  <span className="glyphicon glyphicon-edit"
                    onClick = {this.onClick} ></span>
                    </p>


                 <div className={`div-Edit-${this.state.toggleEdit}`}>

                    <input
                        type='text'
                        placeholder=' new username'
                        onChange={this.nameChange} ></input>


                        <button className="btn btn-info ">
                            <span className="glyphicon glyphicon-check"
                            onClick = {this.onClickSave} ></span>
                        </button>


                </div>

            </div>
        );
    }


}