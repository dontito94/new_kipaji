var React = require('react');
var ReactDOM = require('react-dom');
var TodoItem = require('./todoItem');
var AddItem = require('./AddItem');
require('./css/index.css');


class Clock extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
     date: new Date(),
     todos:['washing','eating','sexing'],
     age:30
   };

  }
  render() {
    var todos = this.state.todos;
    todos = todos.map(function (item,index) {
      return(
  <TodoItem key={index} item={item}  />
      );

    });
       var ager = setTimeout(function () {
      this.setState({
        age:35
      });
    }.bind(this),5000);
    return (
      <div>
        <h1 onClick={this.clicked}>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>{this.state.todos[2]} when am {this.state.age}</h2>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />


      </div>
    );
  }//render

  //custome a function

 clicked(){
  console.log("clicked");
}
onDelete(item){
       var updatedTodos = this.state.todos.filter(function(val, index){
           return item !== val;
       });
       this.setState({
         todos: updatedTodos
       });
   }

   onAdd(item){
       var updatedTodos = this.state.todos;
       updatedTodos.push(item);
       this.setState({
           todos: updatedTodos
       })
   }

}

//nesting component

//put component into a html page

ReactDOM.render(<Clock mssg="i like eating"/>,document.getElementById('todo-wrapper'));
