import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./ImageUpload.css";

import firebase from "firebase";
import { db, storage } from "../firebase";

const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    var storageRef = storage.ref();
    var uploadTask = storageRef.child(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function....
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function....
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: url,
            username: username,
          });
          console.log("Done Upload");
          setProgress(0);
          setCaption("");
          setImage(null);
        });
      }
    );
  };

  return (
    <div className="imageupload">
      <div className="imageupload__actual">
        <progress
          className="imageupload__progress"
          value={progress}
          max="100"
        />
        <input
          type="text"
          placeholder="Enter a caption..."
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
        <input type="file" onChange={handleChange} />
        <Button disabled={!caption && !image} onClick={handleUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
