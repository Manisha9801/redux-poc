import React  from 'react';

const ShowUserDetail = (props) => {
        return(
            <>
                 <tr>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                    <td>{props.gender}</td>
                    <td>{props.email}</td>
                    <td>{props.phoneNo}</td>
                </tr>
            </>
        );
}

export default ShowUserDetail;