import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
//import register from './login';
//import login from './Form/login';
const Home = () => (
    <React.Fragment>
        <Helmet>
            <title>ReactTest - App</title>
        </Helmet>
        <div id="home-wrap">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube 48px"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li>
                            <Link className="play-button" to="/play/instructions">Play</Link>
                        </li>
                    </ul>
                </div>
                 <div className="auth-container">
                    <Link className="auth-buttons" id="login-button" to="/login">Add MCQ</Link>
                     <Link className="auth-buttons" id="register-button" to="/register">Add Simple Question</Link> 
                </div> 
            </section>
        </div>
    </React.Fragment>
    
);

export default Home;
