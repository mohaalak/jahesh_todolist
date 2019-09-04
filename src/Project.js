import React from 'react';
import { OneForm } from './components/OneForm';
import { TodoApp } from './Todo';
export class Project extends React.Component {
  state = {
    projects: [{ id: 0, name: 'Test' }]
  };

  lastId = 0;
  render() {
    return (
      <div>
        <OneForm
          placeholder="Add A new Project"
          onSubmit={text =>
            this.setState({
              projects: [
                ...this.state.projects,
                { name: text, id: ++this.lastId }
              ]
            })
          }
        ></OneForm>
        {this.state.projects.map(x => (
          <div>
            <h1>{x.name}</h1>
            <TodoApp />
          </div>
        ))}
      </div>
    );
  }
}
