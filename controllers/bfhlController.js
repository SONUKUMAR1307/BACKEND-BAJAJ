const { isNumeric, getHighestLowercaseAlphabet } = require('../utils/helperFunctions');

// POST method handler
exports.postData = (req, res) => {
  try {
    // Extract data, user_id, email, and roll_number from request body
    const { data, user_id, email, roll_number } = req.body;

    // Validate required fields
    if (!data || !user_id || !email || !roll_number) {
      return res.status(400).json({
        is_success: false,
        message: 'Missing required fields: data, user_id, email, or roll_number.',
      });
    }

    // Separate numbers and alphabets from the data array
    const numbers = data.filter(isNumeric);
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    // Get the highest lowercase alphabet from the alphabets array
    const highest_lowercase_alphabet = getHighestLowercaseAlphabet(alphabets);

    // Construct the response
    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_lowercase_alphabet,
    };

    // Send the response
    res.status(200).json(response);
  } catch (error) {
    // Handle error
    res.status(500).json({
      is_success: false,
      message: 'An error occurred while processing the request.',
    });
  }
};

// GET method handler
exports.getData = (req, res) => {
  // Hardcoded response
  const response = {
    operation_code: 1,
  };

  // Send the response
  res.status(200).json(response);
};
