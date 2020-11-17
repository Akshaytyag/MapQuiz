import React, { Component } from 'react';
import validation from './validation';
import DynamicForm from './DynamicForm';

class App1 extends Component {
  render() {
    const fields = [
      {label: 'Question : ', type: 'input', name: 'firstName', value: 'Abdi'},
    
      {label: 'Options', type: 'select', data: ['Teacher', 'Software Engineer', 'Doctor', 'Lawyer'], name: 'occupation', value: 'Please Select'},
      
      
    ];
    return (
      <DynamicForm fields={fields} validation={validation} />
    );
  }
}

export default App1;
