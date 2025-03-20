import axios from "axios";

export const generateApplicationLetter = async ({
  tone,
  name,
  company,
  cv,
  jobTitle,
  coverLetterTo,
  jobOffer,
}) => {
  try {
    const response = await axios.post("http://localhost:5000/generate-letter", {
      tone,
      name,
      company,
      cv,
      jobTitle,
      coverLetterTo,
      jobOffer,
    });

    return response.data.coverLetter;
  } catch (error) {
    console.error("Error generating letter:", error);
    return "Error generating application letter.";
  }
};
