import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class Image extends Component {
    render() {
        const {author, users} = this.props;

        return (
            <Fragment>
                <img
                    src={users[author].avatarURL}
                    alt={users[author].username}
                    className={'avatar'}
                />
            </Fragment>
        )
    }
}

function mapStateToProps({users}){
    return {
        users,
    }
}

export default connect(mapStateToProps)(Image);