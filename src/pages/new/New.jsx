import React from 'react'
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState } from 'react';

const New = ({ inputs, title }) => {

    //useState for support IMG upload
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                //if is a "file" use "URL.createObjectURL()" and pass my/user file, if is not a file use the no-image "link"
                                file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt="user-avatar"
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                {/* make icon active for upload files (id="file") and hide text/button */}
                                <label htmlFor="file">
                                    image:<UploadFileIcon className="icon" /></label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                    //implement of useState for IMG
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>


                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}

                            {/* <div className="formInput">
                                <label>User Name</label>
                                <input type="text" placeholder="Bla_Bla name.." />
                            </div>
                            <div className="formInput">
                                <label>Name and surname</label>
                                <input type="text" placeholder="Kill Bill" />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text" placeholder="xxxx@gmail.com" />
                            </div>
                            <div className="formInput">
                                <label>Phone</label>
                                <input type="text" placeholder="+111 111 111 222 222" />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="Buba St. 216 Sofia" />
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="BG" />
                            </div> */}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New
