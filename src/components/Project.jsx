import React from 'react'
import Task from './Task'

export default class Project extends React.Component{
    state = {
        tasks: {
            'task-1': {id: 'task-1', content: 'take out the garbage'},
            'task-2': {id: 'task-2', content: 'walk the cat'}, 
            'task-3': {id: 'task-3', content: 'charge phone'},
            'task-4': {id: 'task-4', content: 'cook dinner'}
        }
    }
    render(){
        return (
            <div>
                
                
                
                project
                <Task/>
                
                
                
                
                
                </div>
        )
    }
}