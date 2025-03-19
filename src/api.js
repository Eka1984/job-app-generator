import axios from "axios";

export const generateApplicationLetter = async ({ name, cv, jobOffer }) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const prompt = `Generate a professional job application letter for ${name} based on the following CV: ${cv}. The job description is: ${jobOffer}.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating letter:", error);
    return "Error generating application letter.";
  }
};
