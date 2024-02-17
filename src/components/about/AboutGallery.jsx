import PropTypes from 'prop-types';
const AboutGallery = ({img}) => {
  return (
    <div>
      <img className='img-gallery' src={img} alt="Church Images" />
    </div>
  )
}
AboutGallery.propTypes = {
    imgUrl: PropTypes.string.isRequired
}.isRequired

export default AboutGallery
