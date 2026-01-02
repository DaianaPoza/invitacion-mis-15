import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const InfoCard = ({
  title,
  text,
  imgSrc,
  imgAlt = 'Imagen de la tarjeta',
  buttonText,
  buttonHref = '#',
  buttonVariant = 'primary',
  className = '',
  style = { width: '18rem' },
  children, // opcional: por si querés meter contenido custom adentro
}) => {
  return (
    <Card className={className} style={style}>
      {imgSrc && <Card.Img variant="top" src={imgSrc} alt={imgAlt}/>}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text>{text}</Card.Text>}
        {children}
        {buttonText && (
          <Button variant={buttonVariant} href={buttonHref}>
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonVariant: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default InfoCard;

  
