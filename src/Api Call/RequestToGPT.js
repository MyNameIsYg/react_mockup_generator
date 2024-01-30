// generateLayoutFromDescription.js
import axios from 'axios';

const extractJsxCode = (apiResponse) => {
    const regex = /```jsx([\s\S]+?)```/; // Regex to match JSX code between backticks
    const match = apiResponse.match(regex);
  
    if (match && match[1]) {
      return match[1].trim();
    } else {
      console.error('No JSX code found in the API response');
      return null;
    }
  };

const generateLayoutFromDescription = async (description) => {
  const prompt = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: `Use components like that for RMGHeader, RMGText, RMGInput, RMGButton, RMGImage and create a JSX snippet for ${description}` }
    ]
  };

  try {
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      prompt,
      {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('OpenAI Response:', openaiResponse);
    console.log('OpenAI My Response:', openaiResponse.data.choices[0].message.content);
    // Assuming the AI returns a string that is a JSON representation
    const result = extractJsxCode(openaiResponse.data.choices[0].message.content);
    console.log('Result:', result);
    return result;
  } catch (error) {
    console.error('Error in getting response from OpenAI:', error.response?.data || error.message);
    throw error;
  }
};

export default generateLayoutFromDescription;
