// import TodoList from './views/ToDoList';
// import TodoListAntd from './views/ToDoListAntd';
import { Menu } from 'antd';

// const routes = [
//         {
//           path: "/",
//           component: <TodoList />,
//         },
//         {
//           path: "/Antd",
//           component: <TodoListAntd />,
//         },
// ];

export default function routes() {

    const items = [
        {
          label: (
            <a href={`/`} target="_blank" rel="noopener noreferrer">
              Origin
            </a>
          ),
          key: 'main',
        },
        {
            label: (
              <a href={`/Antd`} target="_blank" rel="noopener noreferrer">
                Antd
              </a>
            ),
            key: 'antd',
          },
      ];

    return (
      <>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
        </>
    );
  }