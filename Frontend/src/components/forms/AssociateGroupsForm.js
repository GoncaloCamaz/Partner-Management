import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { makeStyles } from '@material-ui/core';
import Checkbox from '../controls/Checkbox';

const useStyles = makeStyles(({
    button: {
        color: '#fff',
        background: 'rgb(26, 23, 89)',
        '&:hover': {
            background: "#1888ff"
          }
    }
}))

function InitializeGroups(groups, associateGroups)
{
    var content = []
    groups.forEach(item => content.push(associateGroups.includes(item.initials) 
        ? {name: item.initials, checked: true} 
        : {name: item.initials, checked: false}))

    return content
}

export default function AssociateGroupsForm(props) {
    const classes = useStyles()

    const groups = props.groups
    const associateGroups = props.recordForEdit.groups
    const content = InitializeGroups(groups, associateGroups)
    const [columnsSelected, setColumnsSelected] = useState(content)    
    
    const handleSubmit = _event => {
        const selected = columnsSelected.filter(item => item.checked === true)
                                        .map(item => {return item.name})
        let associateWithGroups = {...props.recordForEdit, groups: selected}
        props.addOrEdit(associateWithGroups)
    }

    const handleChange = (event) => {

        const nameOfGroup = event.target.name
        const contentOnState = columnsSelected
        var newContent = []

        for(const i in contentOnState)
        {
            if(contentOnState[i].name === nameOfGroup)
            {
                newContent.push({name: contentOnState[i].name, checked: !contentOnState[i].checked})
            }
            else
            {
                newContent.push({name: contentOnState[i].name, checked: contentOnState[i].checked})
            }
        }
        setColumnsSelected(newContent)
    }

    return (
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <FormGroup>
                        {columnsSelected.map((item, index) => ( 
                            <FormControlLabel key={index}
                                control={<Checkbox value={item.checked} name={item.name} onChange={handleChange}/>}
                                label={item.name}
                            />
                            ))
                        }
                    </FormGroup>
                    <div>
                        <Controls.Button
                            className={classes.button}
                            type="submit"
                            text="Atualizar" 
                            onClick={handleSubmit}/>
                    </div>
                </Grid>
            </Grid>
    )
}