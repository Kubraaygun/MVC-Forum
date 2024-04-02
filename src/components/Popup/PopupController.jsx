import { useEffect } from "react";
import PopupView from "./PopupView";
import axiosInstance from "../../constants";

const PopupController = ({ setShowPopup, userName }) => {

useEffect(()=>{
    axiosInstance.get(`posts?user=${userName}`).then((response)=>console.log(response))
},[])

  return <PopupView setShowPopup={setShowPopup} userName={userName} />;
};

export default PopupController;
