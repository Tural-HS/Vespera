import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const Missions_One = ({ service = {} }) => {
  const { title, image, icon, href, text } = service;

  return (
    <div className="missions-one__single">
      <div className="missions-one__img">
        <Image src={require(`@/images/services/${image}`).default.src} alt="" style={{height:"200px"}} />
      </div>
      <div className="missions-one__content">
        <div className="missions-one__title-box" >
          <div className="missions-one__title-icon">
            <span className={icon}></span>
          </div>
          <h3 className="missions-one__title"  >
            {/* <Link href={href}> */}
              <TextSplit  text={title} />
            {/* </Link> */}
          </h3>
        </div>
        <p className="missions-one__text" style={{ textAlign: 'justify' }}>{text}</p>
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

export default Missions_One;
