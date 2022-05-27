import { CalendarToday, LocationSearching, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import './user.css';
import { MailOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://ta.azureedge.net/p/images/usuarios/l/iKLuAWdZ10jM8PA5O9CmSJJjcDeW_1Sw0.jpg/600x600cut/" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Douv Mayard</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">douvm0330</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">17.03.1993</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+54 9 227 0504</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">wadlydugue@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">B.aires - Argentine</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" 
                                    placeholder='Douv Mayard'  
                                    className='userUpdateInput' 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" 
                                    placeholder='Douv Mayard'  
                                    className='userUpdateInput' 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" 
                                    placeholder='+54 9 341 227 0504'  
                                    className='userUpdateInput' 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" 
                                    placeholder='wadlydugue@gmail.com'  
                                    className='userUpdateInput' 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" 
                                    placeholder='Bs.Aires - Argentine'  
                                    className='userUpdateInput' 
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://i.pinimg.com/280x280_RS/18/b9/07/18b9077ef76e9549007e667d2a89d619.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id='file' style={{display: 'none'}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
