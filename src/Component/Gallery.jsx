import React, { useState, useEffect } from 'react';
import { db, auth, collection, query, where, getDocs, onAuthStateChanged, getDoc, doc } from './Config/Firebase';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Card, Divider } from 'antd';
import UserProfile from './UserProfile';
const { Meta } = Card;

const Gallery = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [dataNotEqual, setdataNotEqual] = useState([]);
    const [follow1, setFollow1] = useState('Follow');
    const [followVal, setFollowVal] = useState(0);
    const [friend1, setFriend1] = useState(['Add Friend']);
    const [friendVal, setFriendVal] = useState(0);
    const [id, setId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const uid = user.uid;
                    const q = query(collection(db, 'Practice_App'), where('email', '==', user.email));
                    const querySnapshot = await getDocs(q);
                    const newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setData(newData);

                    const uid1 = user.uid;
                    const q1 = query(collection(db, 'Practice_App'), where('email', '!=', user.email));
                    const querySnapshot1 = await getDocs(q1);
                    const newData1 = querySnapshot1.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setdataNotEqual(newData1);
                } else {
                    navigate('/');
                }
            });
        };
        const unsubscribe = onAuthStateChanged(auth, fetchData);
        return () => unsubscribe();
    }, []);

    const follow = () => {
        if (follow1 == 'Follow') {
            setFollowVal(followVal + 1);
            setFollow1('Unfollow')
        } else if (follow1 == 'Unfollow') {
            setFollowVal(followVal - 1);
            setFollow1('Follow');
        }
    }

    const UserProfile = (e) => {
        localStorage.setItem('id', e);
        navigate('/userprofile')
    }

    const friend = (index, e) => {
        console.log(index, e);
        const copy = dataNotEqual[index];
        if (friend1 == 'Add Friend') {
            setFriendVal(friendVal + 1);
            setFriend1('Remove');
        }
    }

    const style = {
        width: 300,
        height: 200,
    }
    const circle = {
        width: '230px',
        height: '230px',
        objectFit: 'cover',
        borderRadius: '50%',
        objectFit: 'center'
    }
    const circle1 = {
        width: '38px',
        height: '38px',
        objectFit: 'cover',
        borderRadius: '50%',
        objectFit: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    if (data) {
        return (
            <div className='my-5'>
                {data.map((item, index) => (
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }} key={item.id}>
                        <div className="image">
                            <img src={item.image} alt="" style={circle} />
                            <h4 className='text-center py-2'>{item.name}</h4>
                        </div>
                        <div className="like" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '40%' }}>
                            <div className='text-center'>
                                <h6>Like</h6>
                                <h6>0</h6>
                            </div>
                            <div className='text-center'>
                                <h6>Follow</h6>
                                <h6>{followVal}</h6>
                            </div>
                            <div className='text-center'>
                                <h6>Friend</h6>
                                <h6>{friendVal}</h6>
                            </div>
                        </div>
                        <button className='btn btn-md my-3 btn-primary w-40' onClick={follow}>{follow1}</button>
                        <Divider />
                    </div>
                ))}
                {/* //Not Equal Users Ke lYe He  */}

                <div style={{ display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
                    {dataNotEqual.map((item, index) => (
                        <Card
                            key={item.id}
                            style={{
                                width: 300,
                                marginTop: 25,
                                marginBottom: 25,
                                height: 330,
                            }}
                            cover={
                                <img style={style}
                                    alt="example"
                                    src={item.image}
                                />
                            }
                            actions={[
                                <button onClick={() => friend(index, item.id)}>{friend1} <UserAddOutlined /> </button>,
                            ]}
                        >
                            <Meta style={{ cursor: 'pointer', textDecoration: 'underline', letterSpacing: '2px' }}
                                avatar={<Avatar src={item.image} style={circle1} />}
                                title={item.name} onClick={() => UserProfile(item.id)}
                            />
                        </Card>
                    ))
                    }
                </div>
            </div>
        );
    }
};

export default Gallery;
