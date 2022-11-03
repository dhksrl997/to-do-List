import {Card} from "antd";

const TaskInfomation = ({title, content}: any) => {
    return (
        <Card title={title} size="small" style={{margin: '5px', textAlign: 'left'}}>
            {content}
        </Card>
    )
}

export default TaskInfomation;