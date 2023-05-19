const Section = ({
  sectionRowsRow,
  onChange,
  selectChange,
  sortTypeOptions,
  sectionRowsSeat,
  onChangeInput,
  onChangeSeat,
  sectionRowsType,
  sortSeatType,
  setSection,
}) => {
  return (
    <>
      <div className="section_opts">
        <div className="select_block">
          <div className="select">
            <input type="number" value={sectionRowsRow} onChange={onChange} />
            <select name="" id="" onChange={selectChange}>
              {sortTypeOptions}
            </select>
          </div>
          <div className="select">
            <input
              type="number"
              value={sectionRowsSeat}
              onChange={onChangeInput}
            />
            <select
              name=""
              id=""
              onChange={onChangeSeat}
              value={sectionRowsType}
            >
              {sortSeatType}
            </select>
          </div>
          <button onClick={setSection}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Section;
