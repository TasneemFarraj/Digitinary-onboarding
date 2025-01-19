import React from "react";
import "../Style/Card.scss";

interface CardProps {
  logo: string;
  title: string;
  description: string;
  email:string;
}

const Card: React.FC<CardProps> = ({ logo, title, description,email }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={logo} alt={`${title} logo`} className="card-logo" />
      </div>
      <div className="card-content">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="email">{email}</p>

      </div>
    </div>
  );
};

export default Card;
