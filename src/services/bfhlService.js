const processData = (data) => {
  const evenNumbers = [];
  const oddNumbers = [];
  const alphabets = [];
  const specialCharacters = [];
  let sum = 0;

  data.forEach((item) => {
    if (typeof item === "string" && /^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else if (!isNaN(item)) {
      const num = Number(item);
      if (num % 2 === 0) {
        evenNumbers.push(String(num));
      } else {
        oddNumbers.push(String(num));
      }
      sum += num;
    } else {
      specialCharacters.push(item);
    }
  });

  const allChars = data
    .filter((item) => typeof item === "string" && /^[a-zA-Z]+$/.test(item))
    .join("");

  const reversedAlphabets = [...allChars].reverse();
  let concatString = "";
  reversedAlphabets.forEach((char, index) => {
    if (index % 2 !== 0) {
      concatString += char.toLowerCase();
    } else {
      concatString += char.toUpperCase();
    }
  });

  return {
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets,
    special_characters: specialCharacters,
    sum: String(sum),
    concat_string: concatString,
  };
};

module.exports = {
  processData,
};
