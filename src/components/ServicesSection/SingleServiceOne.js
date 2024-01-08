import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";



const SingleServiceOne = ({ service = {} }) => {
  const { title, image, icon, href, text } = service;
  return (
    <div className="services-one__single">
      <div className="services-one__img">
        <Image src={require(`../../assets/images/services/${image}`).default.src} alt="" style={{height:"250px"}} />
      </div>
      <div className="services-one__content">
        <div className="services-one__title-box" >
          <div className="services-one__title-icon">
            <span className={icon}></span>
          </div>
          <h3 className="services-one__title"  >
          
              <TextSplit  text={title} />
        
          </h3>
        </div>
        <p className="services-one__text" style={{ textAlign: 'justify' }}>{text}</p>
        {/* <div className="services-one__bottom">
          <Link href={href} className="services-one__read-more">
            Read More
          </Link>
          <Link href={href} className="services-one__arrow">
            <span className="icon-right-arrow"></span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SingleServiceOne;
