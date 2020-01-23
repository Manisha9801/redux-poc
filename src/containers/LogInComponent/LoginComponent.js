import React,{ Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setUserDetails} from './../../actions/userActions';

class LoginComponent extends Component {
    state = {
        userName : '',
        userPassword : '',
        userNameError : '',
        userPasswordError : ''
    }

    /**
     * function to test if user has input valid data or not
     * @param {*} event 
     */
    handleErrorCheck = (event) => {
        let name = event.target.id;
        let value = event.target.value;
        if(name === 'userName') {
            let msg = this.checkEmailValidity(value) ? '' : 'Invalid User Name';
            this.setState({userNameError : msg})
        }else if(name === 'userPassword'){
            let msg = value.length <5 ? 'Invalid Password Strength' : '';
            this.setState({userPasswordError : msg})
        }
    }

    /**
     * method to check the validity of email
     * @param {*} email 
     */
    checkEmailValidity(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /**
     * function to update the state as per user input.
     */
    handleChange = (event) => {
        this.setState({[event.target.id] : event.target.value});
    }

    /**
     * function to disable submit button as per requirement.
     */
    checkAvailability = () => {
        return this.state.userName === '' || this.state.userPassword === '' || this.state.userNameError !== '' || this.state.userPasswordError !== '';
    }
    
    /**
     * handler for submiting the login request
     */
    handleSubmit = () => {
        if(this.state.userName === 'hruday@gmail.com' && this.state.userPassword === 'hruday123') {
            const payload = {
                userName : 'hruday@gmail.com',
                userPassword : 'hruday123'
            }
            this.props.setUserDetails('SET_USER_DETAILS',payload);
            this.props.history.push('/dashboard');
        }else{
            alert('user name and password invalid !!!!')
        }
    }

    render(){
        return(
            <>
                Name : <input type="text" value={this.state.userName} id="userName" onChange={(e) => this.handleChange(e)} onBlur={(e) => this.handleErrorCheck(e)} /><br />
                {this.state.userNameError.length>0 ? <p style={{color : "red"}}>{this.state.userNameError}</p>:null}<br />
                Password : <input type="password" value={this.state.userPassword} id="userPassword" onChange={(e) => this.handleChange(e)} onBlur={(e) => this.handleErrorCheck(e)}/><br/>
                {this.state.userPasswordError.length>0 ? <p style={{color : "red"}}>{this.state.userPasswordError}</p>:null}<br />
                <button onClick={() => this.handleSubmit()} disabled={this.checkAvailability()}>LogIn</button>
            </>
        );
    }

}

/**
 * for getting store state in form of props
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        userDetails : state.userDetails
    }
}

/**
 * accessing dispatch from store
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch=>{
    return bindActionCreators({setUserDetails}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);