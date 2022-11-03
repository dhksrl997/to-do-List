import {Button, Space} from "antd";
import TaskInfomation from "./TaskInfomation";
import {useEffect, useState} from "react";
import AddTaskModal from "./AddTaskModal";
import TaskList from '../TaskList.json';

const MyTask = () => {
    const [task, setTask]: any = useState(localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task') || '').Task : [...TaskList.Task]);
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify({"Task": task}));
    }, [task])

    const cardStyle: any = {
        border: '3px solid black',
        textAlign: 'center',
        borderRadius: '20px',
        width: '100%'
    };

    const openModal = () => {
        setShowNewTaskModal(true);
    }

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h1>My Tasks !</h1>
            </div>
            <div style={{width: '80%', margin: 'auto'}}>
                <Space direction='vertical' size="middle" style={cardStyle}>
                    <Button type={'primary'} style={{float: 'right', margin: '1.5rem'}} onClick={openModal}>+</Button>
                    {task.map((i: any) => (
                        <TaskInfomation key={Math.random()} title={i.title} content={i.description}/>
                    ))}
                </Space>
            </div>
            <AddTaskModal visible={showNewTaskModal} onOk={() => console.log('on ok')}
                          setVisiable={setShowNewTaskModal} setTask={setTask} taskList={task}/>
        </>
    );
}

export default MyTask;