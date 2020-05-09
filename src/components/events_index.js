import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {readEvents} from "../actions";

class EventsIndex extends Component {
    componentDidMount() {
        this.props.readEvents();
    }

    renderEvents(){
        return (
            _.map(
                this.props.events,
                event => (
                    <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.title}</td>
                        <td>{event.body}</td>
                    </tr>
                )
            )
        )
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderEvents()}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({events: state.events})

const mapDispatchToProps = ({readEvents})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
