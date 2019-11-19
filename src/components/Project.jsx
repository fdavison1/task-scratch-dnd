import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
margin: 8px
border: 1px solid lightgray
border-radius: 2px`
const Title = styled.h3`
padding: 8px`
const TaskList = styled.div`
padding: 8px`

export default class Project extends React.Component {
    state = {}
    render() {
        return (
            <Container>
                <Title>{this.props.project.title}</Title>

                <Droppable droppableId={this.props.project.id}>
                    {(provided) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>

        )
    }
}