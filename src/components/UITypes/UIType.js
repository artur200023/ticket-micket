import Section from "./section";
import Table from "./table";
import Poligon from "./poligon";

export const UIType = ({
  type,
  sectionRows,
  onChange,
  selectChange,
  sortTypeOptions,
  sectionRowsSeat,
  onChangeInput,
  onChangeSeat,
  sectionRowsType,
  sortSeatType,
  setSection,
  seats,
  handleChangeSeats,
  setTable,
}) => {
  switch (type) {
    case "section":
      return (
        <Section
          sectionRowsRow={sectionRows}
          onChange={onChange}
          selectChange={selectChange}
          sortTypeOptions={sortTypeOptions}
          sectionRowsSeat={sectionRowsSeat}
          onChangeInput={onChangeInput}
          onChangeSeat={onChangeSeat}
          sectionRowsType={sectionRowsType}
          sortSeatType={sortSeatType}
          setSection={setSection}
        />
      );
    case "table":
      return (
        <Table
          seats={seats}
          handleChangeSeats={handleChangeSeats}
          setTable={setTable}
        />
      );
    case "poligon":
      return <Poligon />;
    default:
      return null;
  }
};
