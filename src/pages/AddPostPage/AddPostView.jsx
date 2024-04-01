const AddPostView = ({ handleSubmit, onInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Gönderi Ekle</h2>
      <fieldset>
        <label> Kullanıcı Adı: </label>
        <input
          type="text"
          placeholder="Kullanıcı Adı Giriniz.."
          onChange={(e) => onInputChange("user", e)}
        />
      </fieldset>

      <fieldset>
        <label> Başlık: </label>
        <input type="text" placeholder="Başlık Giriniz.."  onChange={(e) => onInputChange("title", e)}
     />
      </fieldset>

      <fieldset>
        <label> Kullanıcı Adı: </label>
        <textarea type="text" placeholder="Açıklama Giriniz.. " />
      </fieldset>

      <button>Gönder</button>
    </form>
  );
};

export default AddPostView;
