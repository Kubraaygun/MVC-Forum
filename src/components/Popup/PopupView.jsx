const PopupView = ({ setShowPopup, userName, data }) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{userName}</span> Kullanıcının Gönderileri
          </h4>
          <button onClick={() => setShowPopup(false)}>Kapat</button>
        </div>
        <div className="post">
            <h2>title</h2>
            <p>text</p>
        </div>
      </div>
    </div>
  );
};

export default PopupView;
