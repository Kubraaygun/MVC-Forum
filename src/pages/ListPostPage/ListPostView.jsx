const ListPostView = ({ formData }) => {
 // console.log(formData)
  return (
    <div className="container">
      {formData?.map((form)=>(
        <div key={form.id} className="post">
        <div className="info">
          <h3>{form.title}</h3>
          <p>{form.user}</p>
        </div>
        <p className="text">{form.text}</p>
      </div>
      ))}
    </div>
  );
};

export default ListPostView;
