import {Button, Checkbox, Form, Input, Modal} from "antd";
import {useEffect, useState} from "react";

const AddTaskModal = ({visible, onOk, setVisiable, setTask, taskList}: any) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout]: any = useState('horizontal');
    const [checkList, setCheckList]: any = useState([]);
    const [taskFormat, setTaskFormat]: any = useState({
        "title": "",
        "description": "",
        "status": "doing",
        "checkList": []
    });

    useEffect(() => {
        setCheckList([]);
        setTaskFormat({
            "title": "",
            "description": "",
            "status": "doing",
            "checkList": []
        })
    }, [visible])

    const submit = () => {
        taskFormat.checkList = [...checkList];
        setTaskFormat({...taskFormat})
        taskList.push(taskFormat)
        console.log(`AddTaskModal.tsx:29 = `, taskList);
        setTask({...taskList});
    }

    const visiableOff = () => {
        setVisiable(false);
    }
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {span: 4},
                wrapperCol: {span: 14},
            }
            : null;
    return (
        <>
            <Modal title="할 일 추가" open={visible} onOk={onOk} onCancel={visiableOff}>
                <div style={{justifyContent: 'center'}}>
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{layout: formLayout}}
                        style={{width: '100%'}}
                        // onValuesChange={onFormLayoutChange}
                    >
                        <Form.Item label="제목 : ">
                            <Input placeholder="Task Name" onChange={(e) => taskFormat.title = e.target.value}/>
                        </Form.Item>
                        <Form.Item label="설명 : ">
                            <Input placeholder="Description" onChange={(e) => taskFormat.description = e.target.value}/>
                        </Form.Item>
                        <Button type={'primary'} style={{float: 'right', margin: '1.5rem'}}
                                onClick={() => {
                                    console.log('checkList = ', setCheckList([...checkList, {
                                        title: '',
                                        status: 'doing'
                                    }]))
                                }}>+</Button>
                        {checkList.map((i: any, index: number) => (
                            <div key={Math.random()} style={{marginTop: '1rem'}}>
                                <Checkbox onChange={(e) => {
                                    checkList[index] = {
                                        ...checkList[index] || {},
                                        status: e.target.checked ? 'done' : 'doing'
                                    }
                                }} defaultChecked={checkList[index].status === 'done'}>
                                    <Input placeholder={'할 일 입력'} onChange={(e) => {
                                        const obj = {
                                            title: e.target.value,
                                            status: 'doing'
                                        };
                                        checkList[index] = {...obj};
                                    }} defaultValue={checkList[index].title || ''}/>
                                </Checkbox>
                            </div>
                        ))}
                        <Form.Item>
                            <Button type="primary" onClick={submit}>Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )

}

export default AddTaskModal;