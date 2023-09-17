import React, { useState, useEffect } from 'react';
import { db, auth, collection, query, where, getDocs, onAuthStateChanged } from './Config/Firebase';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = auth.currentUser;

                if (user) {
                    const q = query(collection(db, 'Practice_App'), where('email', '==', user.email));
                    const querySnapshot = await getDocs(q);
                    const newData = querySnapshot.docs.map(doc => doc.data());
                    setData(newData);
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const unsubscribe = onAuthStateChanged(auth, fetchData);

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.email}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
