const Poligon = ({ text, handleChangeText }) => {
  return (
    <>
      <div className="section_opts">
        <input
          className="poligon_inp"
          value={text}
          onChange={handleChangeText}
        />
        <button className="submit">Submit</button>
      </div>
    </>
  );
};

export default Poligon;
