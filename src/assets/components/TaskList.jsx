import { TaskItem } from './TaskItem'

export const TaskList = ({tasks, handleComplete, handleDelete} ) => {

  return (
    <div>
        {tasks.map(task => (
            <TaskItem
            key={task.id}
            task={task}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            />
        ))}
    </div>
  )
}