import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ShowUserDetail from './../../components/showUserDetail/showUserComponent';
import {setUserList} from './../../actions/userActions'

class DashBoardComponent extends Component {
    
    /**
     * fetching data from json file
     */
    componentDidMount = () => {
        this.props.setUserList();
    }

    render() {
        let userList = this.props.users.userList.length ?  this.props.users.userList.map((data,key) => {
                return <ShowUserDetail key={key} name={data.name} age={data.age}  gender={data.gender}  email={data.email} />
        }) : null;
    
        return(
                <>
                {userList && userList.length ? 
                 <table>
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {userList}
                </tbody>
                </table>  : 
                <p>No data available</p>
                }
                </>
        );
    }
}

/**
 * accessing the state of store
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        users : state.userDetails
    }
}

/**
 * accessing dispatch from store
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setUserList},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DashBoardComponent);