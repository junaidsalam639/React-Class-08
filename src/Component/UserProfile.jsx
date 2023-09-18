import React, { useEffect, useState } from 'react';
import { db, getDoc, doc } from './Config/Firebase';
import { Card , Divider } from 'antd';
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [data, setData] = useState({});
    const id = localStorage.getItem('id');
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "Practice_App", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [id]);

    const circle = {
        width: '230px',
        height: '230px',
        objectFit: 'cover',
        borderRadius: '50%',
        objectFit: 'center'
    }


    return (
        <div className='my-3'>
            <button className='btn btn-primary mx-3' onClick={() => navigate('/gallery')}><LeftOutlined />Back</button>
            {
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
                    <div className="image">
                        <img src={data.image} alt="" style={circle} />
                        <h4 className='text-center py-2'>{data.name}</h4>
                    </div>
                    <div className="like" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '40%' }}>
                        <div className='text-center'>
                            <h6>Like</h6>
                            <h6>0</h6>
                        </div>
                        <div className='text-center'>
                            <h6>Follow</h6>
                            <h6>0</h6>
                        </div>
                        <div className='text-center'>
                            <h6>Friend</h6>
                            <h6>0</h6>
                        </div>
                    </div>
                    <button className='btn btn-md my-3 btn-primary w-40'>follow</button>   
                    <Divider />
                </div>
            }
            </div>
    )
}
            export default UserProfile;
