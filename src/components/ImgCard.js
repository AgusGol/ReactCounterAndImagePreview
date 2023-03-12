import { useEffect, useState } from "react";
import "../assets/css/ImgCard.css";

function ImgCard({ image, i, namePreview, deleteImg }) {
  const [img, setImg] = useState("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.addEventListener("loadend", () => {
        setImg(reader.result);
      });
      reader.readAsDataURL(image);
    }
  });

  return img !== "" ? (
    <li className="img" key={i}>
      <img key={i + img} className="imgPreview" src={img} alt="preview"></img>
      <p className="imgPreviewName" key={i + namePreview}>
        {image.name}
      </p>
      <button className="btnDelete" value={i} onClick={deleteImg} key={i + 100}>
        Delete
      </button>
    </li>
  ) : (
    ""
  );
}

export default ImgCard;
