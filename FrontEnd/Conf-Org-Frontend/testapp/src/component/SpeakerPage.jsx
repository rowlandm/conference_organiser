
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Form, Input, Modal, Select,InputNumber,Space} from 'antd';
import { Table, Typography } from 'antd';


import api from './api'

function SpeakerPage (){
    const { Title } = Typography;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const columns = [
        {
          title: 'Rank',
          dataIndex: 'rank',
          key: 'rank',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'cname',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: 'Organization',
            dataIndex: 'org',
            key: 'org',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
      ];

      
    
      useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await api.get('/candidate/candidates/keynote-speaker').catch(error => console.error(error));
            // console.log(reponse)
            setData(response.data); // Assuming the response body directly contains the array of data
          } catch (error) {
            console.error('Failed to fetch data: ' + error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []); // The empty array ensures this effect runs only once after the component mounts


    return (
        <div style={{ padding: '20px', maxWidth: 900, margin: '0 auto'
    }}>
            <h1 >Mailing Mangement Homepage</h1>
        <Title level={4}>Speaker page</Title>
        <Table columns={columns} dataSource={data} loading={loading}  />
      </div>
    );
};

export default SpeakerPage;


