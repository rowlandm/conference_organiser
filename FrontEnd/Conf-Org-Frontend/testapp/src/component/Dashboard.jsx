import React, { useState, useEffect } from 'react';
import {Form, Input, Modal, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../style.css'; 

const MailingManagementHomepage = () => {
  const [activeButton, setActiveButton] = useState(null);

  const navigate = useNavigate();
  const [visiable, setVisiable] = useState(false);
  const [form] = Form.useForm();
  // open dialog
  const open = () => {
    setVisiable(true);
  };
  //close dialog
  const close = () => {
    setVisiable(false);
  };
  //submit form
  const submit = ()=>{
    form.submit()
  }
  // submit data connect with backend api close dialog
  const onSubmit = (values) =>{
    console.log(values)
    //await  fetch ...
    form.resetFields();
    close()
  }

  useEffect(() => {
    const handleHover = (button) => {
      setActiveButton(button);
    };

    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('mouseenter', () => handleHover(button.id));
      button.addEventListener('mouseleave', () => handleHover(null));
    });

    return () => {
      document.querySelectorAll('.button').forEach(button => {
        button.removeEventListener('mouseenter', () => handleHover(button.id));
        button.removeEventListener('mouseleave', () => handleHover(null));
      });
    };
  }, []);

  return (
    <div className="homepage">
      <h1 className="title">Mailing Management Homepage</h1>
      
        <p>This is the homepage of your Conference Organizer application. 
          you can use the button below to choose jumping to different pages.</p>
        {/* Correct the onClick event handler to use an arrow function */}
        
      <div className="button-container">
        <div className={`column ${activeButton === 'column1' ? 'active' : ''}`}>
          <button id="column1" className="button1">
            <Link to="/*">Speakers</Link> 
          </button>
          <button id="column1" className="button2">
            <Link to="/*">Sponsors</Link> 
          </button>
          <button id="column1" className="button3">
            <Link to="/*">Senior Panelist</Link> 
          </button>
          <button id="column1" className="button4">
            <Link to="/*">Engagement Stakeholders</Link> 
          </button>
          <button id="column1" className="button5">
            <Link to="/*">Potential Session Chairs</Link> 
          </button>
        </div>
        <div className={`column ${activeButton === 'column2' ? 'active' : ''}`}>
          <button id="column2" className="button6">
            <Link to="/*">Add Speakers</Link> 
          </button>
          <button id="column2" className="button7">
            <Link to="/*">Add Sponsors</Link> 
          </button>
          <button id="column2" className="button8">
            <Link to="/*">Add Panelist</Link> 
          </button>
          <button id="column2" className="button9">
            <Link to="/*">Add Stakeholders</Link> 
          </button>
          <button id="column2" className="button10">
            <Link to="/*">Add Session Chairs</Link> 
          </button>
        </div>
        <div className={`column ${activeButton === 'column3' ? 'active' : ''}`}>
        <button id="column3" className="button12" onClick={() => navigate('/TemplateEdit')}>
            {/* <Link to="/template edit">Template Edit</Link>  */}
            {/* <button ></button> */}
            Template Edit
          </button>
          <button id="column3" className="button11">
            <Link to="/*">RSE 2023 materials</Link> 
          </button>
          
          <button id="column3" className="button13">
            <Link to="/marketing plan">Marketing Plan</Link> 
          </button>
          <button id="column3" className="button14">
            <Link to="/event schedule">Event Schedule</Link> 
          </button>
          <button id="column3" className="button15">
            <Link to="/email list ubscribers">Email List Subscribers</Link> 
          </button>
        </div>
      </div>
      <Modal 
          wrapClassName="modal-wrap"
          okText="提交"
          cancelButtonProps={{ shape: 'round' }}
          okButtonProps={{ shape: 'round' }}
          width={600}
          visible={visiable}
          title="新建用户" 
          onCancel={close} 
          onOk={submit}
      >
        <div className="form">
          <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: 'Please input  username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="用户邮箱"
              name="mail"
              rules={[{ required: true, message: 'Please input mail!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="部门"
              name="depart"
              rules={[{ required: true, message: 'Please input depart!' }]}
            >
              <Select>
                <Select.Option value={1}>市场部</Select.Option>
                <Select.Option value={2}>财务部</Select.Option>
                <Select.Option value={3}>研发部</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </Modal>

作者：布列瑟农的星空
链接：https://juejin.cn/post/7031508533820686350
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    </div>

  );
};

export default MailingManagementHomepage;