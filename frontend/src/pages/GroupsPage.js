import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar'
import './Pages.css'
import GroupsTable from '../components/tables/GroupsTable';

export default class GroupsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            groups: [],
            isLoaded: false
        }
    }

    componentDitMount() {
        //this.groupsTableUpdate()
        this.state({groups: [{name: "Tuna Universitária do Minho", initials: "TUM",imageURL:"https://tumimage.com"}] })
    }

    groupsTableUpdate() {
        console.log("TODO: update function")
    }

    handleGroupEdit(item) {
        console.log(item)
    }

    handleGroupRemove(item) {
        console.log(item)
    }

    handleAddGroup() {
        console.log("add")
    }

    render() {
        return(
        <div className="home">
            <Navbar isAdmin="true"/>
                <div className="page-container">
                    <GroupsTable 
                        groups={this.state.groups}
                        handleGroupEdit={this.handleGroupEdit}
                        handleGroupRemove={this.handleGroupRemove}
                        handleAddGroup={this.handleAddGroup}
                    />
                </div>
        </div>   
        );
    }

}
