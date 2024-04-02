const PopupView = ({ setShowPopup,userName }) => {
  return (
    <div className="wrapper">
        <div className="popup">
            <div className="btn-wrap">
                <h4><span>{userName}</span>kullanicinin gonderileri</h4>
                <button onClick={()=>setShowPopup(false)}>Kapat</button>
            </div>
        </div>
    </div>
  )
};

export default PopupView;
