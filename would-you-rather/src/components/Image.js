import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class Image extends Component {
    render() {
        const {author, users, user} = this.props;

        return (
            <Fragment>
                {!!user && !!user.user
                    ? <img
                        src={users[author].avatarURL}
                        alt={users[author].username}
                        className={'avatar'}
                    />
                    : null
                }

            </Fragment>
        )
    }
}

function mapStateToProps({users, user}){
    return {
        users,
        user
    }
}

export default connect(mapStateToProps)(Image);