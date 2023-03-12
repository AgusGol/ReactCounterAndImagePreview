import { useEffect, useState } from "react";
import "../assets/css/ImgCard.css";

function ImgCard({ image, i, deleteImg }) {
  const [img, setImg] = useState("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.addEventListener("loadend", () => {
        setImg(reader.result);
      });
      reader.readAsDataURL(image);
    }
  }, [image]);

  return img !== "" ? (
    <li className="img">
      <img className="imgPreview" src={img} alt="preview"></img>
      <p className="imgPreviewName">
        {image.name}
      </p>
      <button className="btnDelete" value={i} onClick={deleteImg}>
        Delete
      </button>
    </li>
  ) : (
    ""
  );
}

export default ImgCard;
