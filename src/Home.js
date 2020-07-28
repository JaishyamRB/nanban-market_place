import React from 'react';
import './App.css';
import Base from './base';
import Line from './home images/Rectangle 1.png'

function Home() {
  return (
    <Base>
    
    <div className="row">
        <div className="col-5" style ={{
          position: "absolute",
          width: "632px",
          height:" 93px",
          left:" 69px",
          top: "410px"
        }}>
          <p style={{
            family: "Montserrat",
            style: "normal",
            weight: "600",
            size: "34px",
            height: "41px"
          }}>
            <h2>Focusing on the education of students from a better perspective</h2>
            Nanban marketplace a venture of Nanban, for the progress of students with the association of 250+ scholastic companies all over India. 

          </p>
          <div className="col-7"></div>
        </div>

        <div className="row">
          <div  style={{
              position: "absolute",
              width: "587px",
              height: "86px",
              left: "531px",
              top: "905px"
          }}>
            <h1  className= "text-center text-weight-bold font-Montserrat"style={{
              family: "Montserrat",
              style: "normal",
              weight: "bold",
              size: "36px",
              height: "44px",
              align: "center"
              
            }}>
            Why the Nanban marketplace for education?
              </h1>
              
              <img  src={Line} style={{
                position: "relative",
                width: "68px",
                height: "2px",
                left: "250px",
                top: "45px",
                align: "center",
                
                background: "#03942F"
              }}/>
              <p className="text-center font-Montserrat" style={{
                position: "relative",
                width: "608px",
                height: "52px",
                top: "50px",
                size: "50px",
                height: "24px"
              }}>
              Nanban marketplace's field of vision is a student outlook for a helping hand in education such as:

              </p>
              
          </div>
          
          
        </div>
    </div>
    
    </Base>
  );
}

export default Home;