/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/reactjs.jsx to edit this template
 */
import React from 'react'
import {Link} from 'react-router-dom';
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'

export const NavBar= () => {
    const Marca = "{React+Vite App}";
    return(
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
              
            <div className="container-fluid">
                    
                    <div className="navbar-brand d-flex align-items-center" href="#">
                        <img className="logoVite" src={viteLogo} alt="Logo1" /><p>+</p>                    
                        <img className="logo" src={reactLogo} alt="Logo" />
                        <p>{Marca}</p>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="coll`apse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                
                              <Link className="nav-link active" aria-current="page" to={"/main1"}>Main1</Link>
                               
                            </li>               
                            <li className="nav-item">
                                
                               <Link className="nav-link" to={"/main2"}>Main2</Link>
                                
                            </li>
                            
                        </ul>
                        
                    </div>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <Link to='/user-form' className="btn btn-warning">Sign-up</Link>
                    </div>
                </div>
            </nav>
    );
    
};
