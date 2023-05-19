import Konva from "konva";
import { rowlabel, seatShape, seatNumber } from "./utils";

let stage;
let layer;
let sectionCount = 0;
let seatRadius = 20;
let seatSpacing = 10;
let selectedSeatsGroup; ///

export const setupKonva = () => {
  stage = new Konva.Stage({
    container: "konva",
    width: 1500,
    height: 500,
  });

  layer = new Konva.Layer();
  selectedSeatsGroup = new Konva.Group({
    draggable: true, ///
  });

  stage.add(layer);
  layer.add(selectedSeatsGroup); ///
  layer.draw();

  return stage;
};

let selectedTableSeats = [];
let selectedSeats = [];
let seatsGroup;
export const appendSection = (
  rowsCount,
  seatCount,
  rowSortType,
  seetSortType
) => {
  seatsGroup = new Konva.Group({
    draggable: true,
  });

  let rowLabelGroup = new Konva.Group();

  let rowLabelX = 0;
  let rowLabelY = ((seatRadius * 2 + seatSpacing) * rowsCount) / 2 - 12; // position row label in the center of the section

  // array to store selected seats

  for (let i = 0; i < rowsCount; i++) {
    let startsWith = 0;
    // create row label
    const rowLabelOptions = rowlabel(
      i,
      rowLabelX,
      rowLabelY,
      seatRadius,
      seatSpacing,
      rowSortType,
      seetSortType
    );

    let rowLabel = new Konva.Text(rowLabelOptions);

    rowLabelGroup.add(rowLabel);

    for (let j = 0; j < seatCount; j++) {
      //   let seatNum = startsWith + 1; // calculate seat number starting from 0
      const seatOptions = seatShape(j, i, seatRadius, seatSpacing);
      let seat = new Konva.Circle(seatOptions);

      // add click event listener to each seat circle
      selectItem(seat);

      // create seat number text
      const seatNumberOptions = seatNumber(seat, startsWith, seetSortType);
      let seatNumberText = new Konva.Text(seatNumberOptions);

      // add seat and seat number to group
      seatsGroup.add(seat);
      seatsGroup.add(seatNumberText);
      startsWith++;
    }
  }

  // add row label group to seats group
  rowLabelGroup.position({ x: rowLabelX, y: rowLabelY });
  seatsGroup.add(rowLabelGroup);

  layer.add(seatsGroup);

  sectionCount++;
  seatsGroup.name(`section-${sectionCount}`);
  layer.draw(); ///
  return seatsGroup;
};

const selectItem = (seat) => {
  seat.on("click", () => {
    if (seat.selected) {
      // if seat is already selected, deselect it
      seat.selected = false;
      seat.fill("#007DC3");
      selectedSeats.splice(selectedSeats.indexOf(seat), 1);
    } else {
      // if seat is not selected, select it
      seat.selected = true;
      seat.fill("red");
      selectedSeats.push(seat);
    }
    // layer.batchDraw();  ///
    seat.getLayer().batchDraw();
    updateSelectedSeatsGroup();
  });
};
const updateSelectedSeatsGroup = () => {
  selectedSeatsGroup.destroyChildren();
  // const selectedGroup = new Konva.Group()
  selectedSeats.forEach((seat, index) => {
    const cloneedSeat = seat.clone({
      draggable: false,
    });
    const seatNumberOption = {
      x: cloneedSeat.x() - seatRadius / 2,
      y: cloneedSeat.y() - seatRadius / 2,
      text: seatNumber(seat, 0, "ABC").text,
      text: index + 1,
      fontSize: 14,
      fill: "white",
    };
    const seatNumberText = new Konva.Text(seatNumberOption);
    selectedSeatsGroup.add(cloneedSeat);
    selectedSeatsGroup.add(seatNumberText);
  });
  selectedSeatsGroup.position({
    x: 850,
    y: 0,
  });
  layer.batchDraw();
};

export const deleteSelectedSeats = () => {
  selectedSeats.forEach((seat) => {
    seat.destroy();
  });
  selectedSeats.length = 0;
  selectedSeatsGroup.destroyChildren();
  layer.batchDraw();
};

export const deleteSeets = () => {
  selectedSeats.forEach((seat) => {
    seat.destroy();
  });
  // clear selected seats array
  selectedSeats = [];
};

export const appendTable = (seetsCount) => {
  selectedTableSeats = [];
  let x = 80;
  let y = 80;
  let radius = 50;
  let seatRadius = 10;

  const tableGroup = new Konva.Group({
    draggable: true,
  });

  // Create the table circle
  const table = new Konva.Circle({
    x: x,
    y: y,
    radius: radius,
    fill: "white",
    stroke: "black",
    strokeWidth: 3,
  });

  // Add the table to the group
  tableGroup.add(table);

  // Create the seat circles and numbers
  const seatAngle = 360 / seetsCount;
  const seatDistance = radius + seatRadius * 1.5; // Calculate the distance between the table and seat centers

  for (let i = 0; i < seetsCount; i++) {
    const angle = i * seatAngle;
    const seatX = x + seatDistance * Math.cos((angle * Math.PI) / 180);
    const seatY = y + seatDistance * Math.sin((angle * Math.PI) / 180);

    const seat = new Konva.Circle({
      x: seatX,
      y: seatY,
      radius: seatRadius,
      fill: "white",
      stroke: "black",
      strokeWidth: 2,
    });

    selectItem(seat);
    const number = new Konva.Text({
      x: seatX - seatRadius / 2,
      y: seatY - seatRadius / 2,
      text: (i + 1).toString(),
      fontSize: seatRadius,
      fill: "black",
    });
    //=============================
    // Add the seat circle and number to the group
    tableGroup.add(seat);
    tableGroup.add(number);
  }
  layer.add(tableGroup);
  return tableGroup;
};
