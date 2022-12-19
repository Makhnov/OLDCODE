const isLong = (string) => {
  if (string.length >= 6) {
    console.log("It is a long string.");
  } else {
    console.log("It is not a long string.");
  }
};

isLong("Java");
isLong("Javascript");
