export const sortTableAscending = (moves, sort) => {
  const movesRef = [...moves];
  switch (sort) {
    case "name":
      return movesRef.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );

    case "power":
      return movesRef.sort((a, b) => a.power - b.power);

    case "type":
      return movesRef.sort((a, b) =>
        a.type > b.type ? 1 : b.type > a.type ? -1 : 0
      );
    case "class":
      return movesRef.sort((a, b) =>
        a.dataClass > b.dataClass ? 1 : b.dataClass > a.dataClass ? -1 : 0
      );

    case "accuracy":
      return movesRef.sort((a, b) => a.accuracy - b.accuracy);

    default:
      return movesRef;
  }
};

export const sortTableDescending = (moves, sort) => {
  const movesRef = [...moves];
  switch (sort) {
    case "name":
      return movesRef.sort((a, b) =>
        b.name > a.name ? 1 : a.name > b.name ? -1 : 0
      );

    case "power":
      return movesRef.sort((a, b) => b.power - a.power);

    case "type":
      return movesRef.sort((a, b) =>
        b.type > a.type ? 1 : a.type > b.type ? -1 : 0
      );
    case "class":
      return movesRef.sort((a, b) =>
        b.dataClass > a.dataClass ? 1 : a.dataClass > b.dataClass ? -1 : 0
      );

    case "accuracy":
      return movesRef.sort((a, b) => b.accuracy - a.accuracy);

    default:
      return movesRef;
  }
};
