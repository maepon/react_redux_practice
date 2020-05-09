import React from 'react';
import PropTypes from 'prop-types';

function App() {
    const profiles = [
        {name: '太郎',age: 10},
        {name: '花子',age: 8},
        {name: '名無し', age: 12},
        ];

    return (
        <React.Fragment>
            {
                profiles.map(
                    (profile, index) => {
                        return <User name={profile.name} age={profile.age} key={index}/>
                    }
                )
            }
        </React.Fragment>
    );
}

const User = (props) => {
    return (
        <div>Hi! {props.name} 年齢 {props.age}歳！</div>
    )
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};

export default App;
