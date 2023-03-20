import "../assets/css/Upload.css";
import { useState, useRef } from "react";
import ImgCard from "./ImgCard";

function Upload() {
  const imgInput = useRef();
  const [images, setImages] = useState([]);

  const uploadImg = (e) => {
    e.preventDefault();
    imgInput.current.click();
  }

  const fileAdded = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      const imageFiles = files.filter((file) => file.type.startsWith("image"));
      setImages([...images, ...imageFiles]);
    }
  }

  const deleteImg = (e) => {
    setImages(
      images.filter((img, i) => {
        return i != e.target.value;
      })
    );
  }

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
            {images.length ?
              <p>{`${images.length} images selected`}</p>
              :
              <p>Choose a file...</p>
            }
          </div>
        </label>
        <input type="submit" value="Add!" className="submit" />
      </form>

      <ul className="images">
        { images.map((image, i) => {
              return (
                <ImgCard
                  i={i}
                  image={image}
                  deleteImg={deleteImg}
                  key={i}
                />
              );
            })
        }
      </ul>
    </section>
  );
}

export default Upload;
