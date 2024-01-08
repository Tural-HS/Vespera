import React from "react";
import { Image } from "react-bootstrap";
import ContactForm from "../Contact/ContactForm";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
// import CommentOne from "./CommentOne";

const Compliance = ({ news = {} }) => {
  const {
    image,
    subtitle,
    date,
    comments,
    title,
    text,
    text2,
    text3,
    text4,
    text5,
text6,
text7,
text8,
text9,
text10,
text11,
    tags,
    socials,
    pagination,
    inputs,
  } = news;

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={image.src} alt="" />
      </div>
      <div className="news-details__content">
        {/* <p className="news-details__sub-title">{subtitle}</p> */}
        {/* <ul className="list-unstyled news-details__meta">
          <li>
            <Link href="/blog-details">
              <i className="far fa-clock"></i> {date}
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <Link href="/blog-details">
              <i className="far fa-comments"></i> {comments.length} Comments
            </Link>
          </li>
        </ul> */}
        <h3 className="news-details__title" style={{ textAlign: 'justify' }}>{title}</h3>
        <p className="news-details__text-1" style={{ textAlign: 'justify' }}>{text}</p>
        <ul className="news-details__text-2">
            <h3 style={{ textAlign: 'justify' }}>Regulatory Adherence:</h3>
        <li style={{ textAlign: 'justify' }}>
        {text2}
        </li>
        </ul>
        <ul className="news-details__text-2">
            <h3 style={{paddingTop:"20px", textAlign: 'justify'}}>Anti-Money Laundering (AML):</h3>
        <li style={{ textAlign: 'justify' }}>
        {text3}
        </li>
        <li style={{ textAlign: 'justify' }}>
        {text4}
        </li>
        </ul>
        <ul className="news-details__text-2">
            <h3 style={{paddingTop:"20px", textAlign: 'justify'}}>Ethical Trading Practices:</h3>
        <li style={{ textAlign: 'justify' }}>
        {text5}
        </li>
        <li style={{ textAlign: 'justify' }}>
        {text6}
        </li>
        </ul>
        <ul className="news-details__text-2">
            <h3 style={{paddingTop:"20px" ,textAlign: 'justify'}}>Data Protection and Privacy:</h3>
        <li style={{ textAlign: 'justify' }}>
        {text7}
        </li>
        <li style={{ textAlign: 'justify' }}>
        {text8}
        </li>
        </ul>
        <ul className="news-details__text-2">
            <h3 style={{paddingTop:"20px" ,textAlign: 'justify'}}>Contractual Compliance:</h3>
        <li>
        {text9}
        </li>
        <li>
        {text10}
        </li>
        </ul>
        <p style={{paddingTop:"20px" , textAlign: 'justify'}}>{text11}</p>

      </div>
      {/* <div className="news-details__bottom">
        <p className="news-details__tags">
          <span>Tags</span>
          {tags.map((tag, i) => (
            <a href="#" key={i}>
              {tag}
            </a>
          ))}
        </p>
        <div className="news-details__social-list">
          {socials.map(({ id, href, icon }) => (
            <a key={id} href={href}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div> */}
      {/* <div className="news-details__pagenation-box">
        <ul className="list-unstyled news-details__pagenation">
          {pagination.map((text, i) => (
            <li key={i}>
              <TextSplit text={text} />
            </li>
          ))}
        </ul>
      </div> */}
      {/* <CommentOne comments={comments} /> */}
      {/* <div className="comment-form">
        <h3 className="comment-form__title">Leave a Comment</h3>
        <ContactForm inputs={inputs} btnText="Submit comment" />
      </div> */}
    </div>
  );
};

export default Compliance;
