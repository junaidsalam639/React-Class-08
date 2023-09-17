import React, { useState } from 'react'
import { db, auth, storage, createUserWithEmailAndPassword, collection, addDoc, ref, uploadBytes, getDownloadURL } from '../Config/Firebase';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const account = () => {
        if (name == '' || email == '' || password == '' || image == '') {
            alert('Please Fill The Input');
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const storageRef = ref(storage, user.uid);
                    uploadBytes(storageRef, image).then((snapshot) => {
                        console.log('Uploaded a blob or file!');
                        getDownloadURL(ref(storage, user.uid))
                            .then(async (url) => {
                                try {
                                    const docRef = await addDoc(collection(db, "Practice_App"), {
                                        name: name,
                                        email: email,
                                        password: password,
                                        image: url,
                                    });
                                    console.log("Document written with ID: ", docRef.id);
                                    navigate('/login')
                                } catch (e) {
                                    console.error("Error adding document: ", e);
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                });
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='container'>
            <h1 className='fw-bold'>Account Create</h1>
            <div className="input-group my-3 px-5">
                <input type="text" className="form-control" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group my-3 px-5">
                <input type="email" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group my-3 px-5">
                <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-group my-3 px-5">
                <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <div className="input-group my-3 px-5">
                <button className='btn btn-success fw-bold' onClick={account}>Account Create</button>
            </div>
        </div>
    )
}

export default Singup

