const Table = ({ seats, handleChangeSeats, setTable }) => {
  return (
    <>
      <div className="section_opts">
        <input type="number" value={seats} onChange={handleChangeSeats} />
        <button onClick={setTable}>Submit</button>
      </div>
    </>
  );
};

export default Table;
