import "../assets/css/Upload.css";
import { useState, useRef } from "react";
import ImgCard from "./ImgCard";

const Upload = () => {
  const imgInput = useRef();
  const [images, setImages] = useState([]);

  const uploadImg = (e) => {
    e.preventDefault();
    imgInput.current.click();
  };

  const fileAdded = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      const imageFiles = files.filter((file) => file.type.startsWith("image"));
      imageFiles.map((image) => {
        image.id = image.name + Math.random() * 100;
        return image;
      });
      setImages([...images, ...imageFiles]);
    }
  };

  const deleteImg = (e) => {
    setImages(
      images.filter((img) => {
        return img.id !== e.target.value;
      })
    );
  };

  return (
    <section className="upload">
      <form className="imgForm" onSubmit={uploadImg}>
        <label htmlFor="imgInput" className="imgLabel">
          <input
            ref={imgInput}
            type="file"
            name="imgInput"
            id="imgInput"
            accept="image/*"
            onInput={fileAdded}
            multiple
          />
          <div id="divInputImg">
            {images.length ? (
              <p>{`${images.length} images selected`}</p>
            ) : (
              <p>Choose a file...</p>
            )}
          </div>
        </label>
        <input type="submit" value="Add!" className="submit" />
      </form>

      <ul className="images">
        {images.map((image) => {
          return <ImgCard image={image} deleteImg={deleteImg} key={image.id} />;
        })}
      </ul>
    </section>
  );
};

export default Upload;
