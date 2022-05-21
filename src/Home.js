import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    text-decoration: none;
    h1{
        font-size: 25rem;
        font-weight: bold;
        color: #cfd1f257;
        font-family: 'Kanit', sans-serif;
        // font-family: 'IBM Plex Sans Condensed', sans-serif
 
       
    }
    h1:hover{
        color: grey;
        transition: 1s;
    }

    @media (max-width: 968px) {

        h1{
            font-size: 10rem;
            text-align: center;
        }
        h1:hover{
            color: grey;
            transition: 1s;
        }
        
    }
`

const NasaApp = () => {
    return (
        <Container>
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-5 text-align">
               <Link to="/Nasa"  style={{ textDecoration: 'none' }}><h1>API'S</h1></Link>
            </div>
          </div>
        </div>
        </Container>
    );
}


export default NasaApp;