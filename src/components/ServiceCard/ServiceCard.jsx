import './ServiceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = ({ icon, title, description }) => {
  const isFontAwesomeIcon = icon && icon.prefix && icon.iconName;

  return (
    <div className="service-card">
      <div className="service-icon">
        {isFontAwesomeIcon ? <FontAwesomeIcon icon={icon} /> : icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
