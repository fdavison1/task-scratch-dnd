import React from 'react';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd'
import Project from './components/Project'





class App extends React.Component {
  state = {
    projects: {
      'project-1': {
        id: 'project-1',
        title: 'project-1',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
      }
    },
    projectOrder: ['project-1'],
    tasks: {
      'task-1': { id: 'task-1', content: 'take out the garbage' },
      'task-2': { id: 'task-2', content: 'walk the cat' },
      'task-3': { id: 'task-3', content: 'charge phone' },
      'task-4': { id: 'task-4', content: 'cook dinner' }
    }
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const project = this.state.projects[source.droppableId]
    const newTaskIds = Array.from(project.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newProject = {
      ...project,
      taskIds: newTaskIds
    }
    const newState = {
      ...this.state,
      projects: {
        [newProject.id]: newProject
      }
    }
    this.setState(newState)
  }


  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >

        {this.state.projectOrder.map(projectId => {
          const project = this.state.projects[projectId]
          const tasks = project.taskIds.map(taskId => this.state.tasks[taskId])

          // return project.title
          return <Project key={project.id} project={project} tasks={tasks} />
        })}


      </DragDropContext>
    )
  }
}

export default App;
