import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../assets/css/ImgCard.css";

const ImgCard = ({
  image,
  deleteImg
}) => {
  const [imgSrc, setImg] = useState("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  if (!imgSrc) {
    return;
  }

  return (
    <li className="img">
      <img className="imgPreview" src={imgSrc} alt="preview"></img>
      <p className="imgPreviewName">{image.name}</p>
      <button className="btnDelete" value={image.id} onClick={deleteImg}>
        Delete
      </button>
    </li>
  );
};

ImgCard.propTypes = {
  image: PropTypes.object,
  deleteImg: PropTypes.func,
};

export default ImgCard;
