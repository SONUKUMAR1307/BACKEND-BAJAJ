exports.isNumeric = (value) => {
    return !isNaN(value);
  };
    exports.getHighestLowercaseAlphabet = (alphabets) => {
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));
    if (lowercaseAlphabets.length === 0) return [];
    return [lowercaseAlphabets.sort().reverse()[0]];
  };
  