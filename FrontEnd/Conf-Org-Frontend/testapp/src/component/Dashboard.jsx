import React, { useState, useEffect } from 'react';
import {Button, Form, Input, Modal, Select,InputNumber} from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../style.css'; 
import api from './api'

const MailingManagementHomepage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

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
    form.resetFields();
    setShowAdditionalInput(false);
  };
  const handleSelectChange = value => {
    // Show the additional input if the user selects 'Other'
    setShowAdditionalInput(value !== 0);
  };
  //submit form
  const submit = ()=>{
    form.submit()
  }
  // submit data connect with backend api close dialog
  const onSubmit = async (values) =>{
    console.log(values)
    //await  fetch ...
    if (values.role === 0){
      delete values.role;
      delete values.status;
      delete values.area;
      delete values.rank;
      if (typeof(values.origin) === 'undefined'){
       values.origin = ""

      }
      const response = await api.post('/candidate/addCand',values).catch(error => console.error(error));
      console.log(values)
      if (response.data === "success") {
        alert('add candidate successful!');
      }
      else {
        alert("Fail to add candidate");
        // setErrorMessage('try again');
      }
    }
    else {
      console.log("role not 0")
      const candi = {};
      candi["name"]=values.name;
      candi["email"]=values.email;
      candi["org"]=values.org;
      if (typeof(values.origin) === "undefined") {
        candi["origin"]=" "
      }
      else{
        candi["origin"]=values.origin;
      }
      
      candi["difficulty"]=values.difficulty;
      candi["subscribe"]=values.subscribe;
      const responseCandi = await api.post('/candidate/addCand',candi).catch(error => console.error(error));

      const role = {};
      role['cname']=values.name;
      role['role']=values.role;
      role['status']=values.status;
      role['rank']=values.rank.toString();
      role['area']=values.area;
      console.log(candi)
      console.log(role)
      
      const responseRole = await api.post('/candidate/addRole',role).catch(error => console.error(error));
      console.log(responseCandi.data)
      console.log(responseRole.data)
      if (responseRole.data === "success") {
        alert('add role successful!');
      }
      else {
        alert("Fail to add role");
        // setErrorMessage('try again');
      }

    }
    
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
          <Button id="column1" className="button1">
            <Link to="/*">Speakers</Link> 
          </Button>
          <Button id="column1" className="button2">
            <Link to="/*">Sponsors</Link> 
          </Button>
          <Button id="column1" className="button3">
            <Link to="/*">Senior Panelist</Link> 
          </Button>
          <Button id="column1" className="button4">
            <Link to="/*">Engagement Stakeholders</Link> 
          </Button>
          <Button id="column1" className="button5">
            <Link to="/*">Potential Session Chairs</Link> 
          </Button>
        </div>
        <div className={`column ${activeButton === 'column2' ? 'active' : ''}`}>
          <Button id="column2" className="button6" onClick={open}>
            Add Candidate
          </Button>
          
        </div>
        <div className={`column ${activeButton === 'column3' ? 'active' : ''}`}>
        <Button id="column3" className="button12" onClick={() => navigate('/TemplateEdit')}>
            {/* <Link to="/template edit">Template Edit</Link>  */}
            {/* <button ></button> */}
            Template Edit
          </Button>
          <Button id="column3" className="button11">
            <Link to="/*">RSE 2023 materials</Link> 
          </Button>
          
          <Button id="column3" className="button13">
            <Link to="/marketing plan">Marketing Plan</Link> 
          </Button>
          <Button id="column3" className="button14">
            <Link to="/event schedule">Event Schedule</Link> 
          </Button>
          <Button id="column3" className="button15">
            <Link to="/email list ubscribers">Email List Subscribers</Link> 
          </Button>
        </div>
      </div>
      <Modal 
          wrapClassName="modal-wrap"
          okText="submit"
          cancelButtonProps={{ shape: 'round' }}
          okButtonProps={{ shape: 'round' }}
          width={600}
          visible={visiable}
          title="Create new Candidate" 
          onCancel={close} 
          onOk={submit}
      >
        <div className="form">
          <Form form={form} labelCol={{ span: 10 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input  candidate name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input mail!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Candidate Organization"
              name="org"
              rules={[{ required: true, message: 'Please input organization of candidate!' }]}
            >
              <Input />
            </Form.Item>
              <Form.Item
              label="Candidate Country"
              name="origin"
              // rules={[{  message: 'Please input Country of candidate!' }]}
              
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Reach Difficulty"
              name="difficulty"
              rules={[{ required: true, message: 'Please input Reach Difficulty of candidate!' }]}
            >
              <InputNumber min={1} max = {10}/>
            </Form.Item>

              <Form.Item
              label="Subscribe"
              name="subscribe"
              rules={[{ required: true, message: 'Please input subscribe status!' }]}
            >
              <Select>
                <Select.Option value="true">True</Select.Option>
                <Select.Option value="false">False</Select.Option>
              </Select>

              </Form.Item>

              <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Please select role!' }]}
            >
              <Select onChange={handleSelectChange}>
                <Select.Option value="keynote speaker">Keynote Speaker</Select.Option>
                <Select.Option value="sponser">Sponser</Select.Option>
                <Select.Option value="stakeholder">Stakeholder</Select.Option>
                <Select.Option value="session chair">Session Chair</Select.Option>
                <Select.Option value="panalist">Panalist</Select.Option>
                <Select.Option value={0}>Other</Select.Option>
              </Select>
            </Form.Item>
            {showAdditionalInput && (
            <>
              <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: 'Please select status of candidate!' }]}
              >
                <Select>
                  <Select.Option value="Accepted">Accepted</Select.Option>
                  <Select.Option value="Rejected">Rejected</Select.Option>
                  <Select.Option value='Did not Reply'>Did not Reply</Select.Option>
                  <Select.Option value="Yet to email">Yet to email</Select.Option>
                  {/* no role candidate */}
                  <Select.Option value="Subscribed">Subscribed</Select.Option> 
                </Select>
              </Form.Item>
              <Form.Item
                label="Rank"
                name="rank"
                rules={[{required:true, message: 'Please input priority rank of candidate! ' }]}
              >
                
                <InputNumber min={0} max = {10} placeholder="0 for no role" style={{width: 110}}/>
                {/* P.S. 0 for those who has no rank */}
              </Form.Item>
              <Form.Item
                label="Area"
                name="area"
                // rules={[{ required: true, message: 'Please input area of role!' }]}
              >
                <Select>
                  <Select.Option value="Potential Day 1 keynote">Potential Day 1 keynote</Select.Option>
                  <Select.Option value="Potential Day 2 keynote">Potential Day 2 keynote</Select.Option>
                  <Select.Option value="Previous Sponser">Previous Sponser</Select.Option>
                  <Select.Option value="Potential Sponser">Potential Sponser</Select.Option>
                  <Select.Option value="Panelist Asia Representative">Panelist Asia Representative</Select.Option>
                  <Select.Option value="Panelist AUNZ Representative">Panelist AUNZ Representative</Select.Option>
                  <Select.Option value="No Specified">No Specified</Select.Option>
                </Select>
              </Form.Item>
            </>
          )}


          </Form>
        </div>
      </Modal>

    </div>

  );
};

export default MailingManagementHomepage;