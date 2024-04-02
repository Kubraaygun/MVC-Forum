import { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";

const ListPostController = () => {
  const [formData, setFormData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //console.log(formData)
  return (
    <ListPostView
      formData={formData}
      setShowPopup={setShowPopup}
      showPopup={showPopup}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

export default ListPostController;
