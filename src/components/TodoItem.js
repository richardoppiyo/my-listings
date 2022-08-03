import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    render () {

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const { id } = this.props.todo
        return (
            <li className={styles.item}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={this.props.todo.completed}
                onChange={() => this.props.handleChangeProps(id)}
              />
              <button onClick={() => this.props.deleteTodoProps(id)}>
                Delete
              </button>
              <span style={id.completed ? completedStyle : null}>
                {this.props.todo.title}
              </span>
            </li>
          )
    }
}

export default TodoItem;