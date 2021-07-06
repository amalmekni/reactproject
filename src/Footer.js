import React from "react";
import { FaPhone } from 'react-icons/fa';
import {IoMdMail} from'react-icons/io';
import {IoLogoFacebook} from'react-icons/io';
import "./App.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/201246551_531955801336718_3746295390862893942_n.png?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_ohc=QIBteSEDbOQAX9DoD5g&_nc_oc=AQk3-8mwanNkeh1cy1OmC5MKvI-VtMeVcGbi4OSvrQmIWrd8dbv6T-UfF3pL-D-ju6Bv1-AA1BvSlWGuv3GURLKo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=faaf52ad19f93f54cedbe52a4a0bee78&oe=60D896D0"alt="milouch"/>
          
          </div>
          <div className="col">
            <h4>Coordonnés</h4>
            <h1 className="lis">
              <p>Adresse : 
                  33 Avenue du Japon Montplaisir  
                  1073 Tunis</p>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Menu</h4>
            <ui className="lis">
              <div className="ac">
              <li>Acceuil</li>
              </div>
              <li>Nouvautés</li>
              <div className="hi">
              <li>A propos</li>
              </div>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="lis">
              <div className="bl">
              <li><FaPhone className="phone" /> 71 904 883</li>
              </div>
              <li><IoMdMail className="mail" /> brc@transtu.tn</li>
              <div className="l">
              <li><IoLogoFacebook className="fb"/> TRANSTU officiel</li>
              </div>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TRANSTU | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
