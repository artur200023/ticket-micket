export const rowlabel = (
  i,
  rowLabelX,
  rowLabelY,
  seatRadius,
  seatSpacing,
  sortType
) => {
  let text;
  switch (sortType) {
    case "ABC":
      text = String.fromCharCode(65 + i);
      break;
    case "123":
      text = i + 1;
      break;
    case "135":
      text = i * 2 + 1;
      break;
    case "246":
      text = (i + 1) * 2;
      break;
    default:
      break;
  }

  return {
    text,
    x: rowLabelX,
    y:
      (seatRadius * 2 + seatSpacing) * i + seatRadius + seatSpacing - rowLabelY,
    fontSize: "bold",
    fill: "black",
  };
};

export const seatShape = (j, i, seatRadius, seatSpacing) => {
  let seatFillColor = "#007DC3";
  let seatBorderColor = "black";
  return {
    x: (seatRadius * 2 + seatSpacing) * j + seatRadius + seatSpacing + 40,
    y: (seatRadius * 2 + seatSpacing) * i + seatRadius + seatSpacing,
    radius: seatRadius,
    fill: seatFillColor,
    stroke: seatBorderColor,
    strokeWidth: 2,
  };
};

export const seatNumber = (seat, startsWith, seetSortType) => {
  let seatNumber;
  switch (seetSortType) {
    case "ABC":
      seatNumber = String.fromCharCode(65 + startsWith);
      break;
    case "123":
      seatNumber = startsWith + 1;
      break;
    case "135":
      seatNumber = startsWith * 2 + 1;
      break;
    case "246":
      seatNumber = (startsWith + 1) * 2;
      break;
    default:
      break;
  }

  return {
    text: seatNumber,
    x: seat.x(),
    y: seat.y() - 6,
    fontSize: 14,
    fill: "white",
  };
};
