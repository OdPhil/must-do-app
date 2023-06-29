import styles from './TaskItem.module.css';

const TaskItem = ({task}) => {
  return (
    <li className={styles.task}>
        <div className="task-group"></div>
    </li>
  )
}

export default TaskItem