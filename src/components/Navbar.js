import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/textform">TextForm</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"> About</Link>
          </li>
          
        
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>  */}
        <div className="d-flex">
            <div className="bg-primary mx-1 rounded" onClick={()=>{props.toogleMode('primary')}} style={{width:'30px',height:'30px'}}>   </div>
           
            <div className="bg-success mx-1 rounded" onClick={()=>{props.toogleMode('success')}} style={{width:'30px',height:'30px'}}>   </div>
            
            <div className="bg-danger mx-1 rounded" onClick={()=>{props.toogleMode('danger')}} style={{width:'30px',height:'30px'}}>   </div>
            
            <div className="bg-info mx-1 rounded" onClick={()=>{props.toogleMode('info')}} style={{width:'30px',height:'30px'}}>   </div>
            <div className="bg-dark mx-1 rounded" onClick={()=>{props.toogleMode('dark')}} style={{width:'30px',height:'30px'}}>   </div>
            <div className="bg-light mx-1 rounded" onClick={()=>{props.toogleMode('light')}} style={{width:'30px',height:'30px'}}>   </div>
      
      </div>
                {/* <div className="form-check form-switch  ">
          <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==='light'?'#0a2137':'light'} `}htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
                </div> */}
      </div>
    </div>
  </nav>
  )
};

Navbar.propTypes = {
    title: PropTypes.string
  };
  Navbar.defaultProps={
    title:'TextUtils'

  }