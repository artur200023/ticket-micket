import { useEffect, useState } from "react";
import {
  appendSection,
  appendTable,
  deleteSeets,
  deleteSelectedSeats,
  setupKonva,
} from "./konvaHelpers";
import { UIType } from "../UITypes/UIType";
const Konva = () => {
  const [importType, setImportType] = useState(null);
  const [sectionRows, setSectionRows] = useState({
    rows: 5,
    rowSortType: "ABC",
    seats: 10,
    seatSortType: "123",
  });
  const [seats, setSeats] = useState(0);
  const [text, setText] = useState("");

  const onChange = (e) => {
    const newSection = { ...sectionRows, rows: e.target.value };
    setSectionRows(newSection);
  };

  const onChangeSelect = (e) => {
    const newSection = { ...sectionRows, rowSortType: e.target.value };
    setSectionRows(newSection);
  };

  const sortTypes = [
    { key: "ABC" },
    { key: "123" },
    { key: "135" },
    { key: "246" },
  ];

  const sortTypeOptions = sortTypes.map((type, index) => (
    <option value={type.key} key={index}>
      {type.key}
    </option>
  ));

  const sortSeatType = sortTypes.map((type, index) => (
    <option value={type.key} key={index}>
      {type.key}
    </option>
  ));

  const onChangeInput = (e) => {
    const newSection = { ...sectionRows, seats: e.target.value };
    setSectionRows(newSection);
  };

  const onChangeSeat = (e) => {
    const newSection = { ...sectionRows, seatSortType: e.target.value };
    setSectionRows(newSection);
  };

  const handleChangeSeats = (e) => {
    setSeats(parseInt(e.target.value));
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const setSection = () => {
    appendSection(
      sectionRows.rows,
      sectionRows.seats,
      sectionRows.rowSortType,
      sectionRows.seatSortType
    );
  };

  const setTable = () => {
    appendTable(seats);
  };

  useEffect(() => {
    setupKonva();
  }, []);
  return (
    <>
      <div className="venue_page">
        <div className="venue_container">
          <div id="konva"></div>
        </div>
        <div className="action">
          <div className="action_btns">
            <button onClick={() => setImportType("section")}>
              Seated Section
            </button>
            <button onClick={() => setImportType("poligon")}>
              Polygon Shape
            </button>
            <button onClick={() => setImportType("table")}>Table</button>
          </div>
          <UIType
            type={importType}
            sectionRows={sectionRows.rows}
            onChange={onChange}
            onChangeSelect={onChangeSelect}
            onChangeInput={onChangeInput}
            onChangeSeat={onChangeSeat}
            sortTypeOptions={sortTypeOptions}
            sortSeatType={sortSeatType}
            setSection={setSection}
            seats={seats}
            handleChangeSeats={handleChangeSeats}
            setTable={setTable}
            text={text}
            handleChangeText={handleChangeText}
            sectionRowsSeat={sectionRows.seats}
            sectionRowsType={sectionRows.seatSortType}
          />
          <button className="delete" onClick={deleteSeets}>
            Delete
          </button>
          {/* <button onClick={deleteSelectedSeats}> Delete select item</button> */}
          
        </div>
      </div>
    </>
  );
};

export default Konva;
