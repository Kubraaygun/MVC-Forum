import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";

const AddPostController = () => {
  const formModel = new AddPostModel();

  const [form, setForm] = useState(formModel.state);
  //Key:Hangi inputa yazıldığı  bilgisi
  //Value: Inputun içeriği için aldım
  const onInputChange = (key, e) => {
    console.log(key, e);
    setForm({ ...form });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
