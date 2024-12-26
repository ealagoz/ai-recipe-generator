import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMT = `You are an assistant that receives a list of igredients that a user
has and suggest a recipe they could make with some or all of the igredients. You donot need
to use every ingredient they mention in your recipe. The recipe can include additional 
ingredients they didnot mention, but try not to include too many extra ingredients. Format 
your response in markdown to make easier to render to a web page`;

const HF_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_HF_API_KEY;
const huggingface = new HfInference(HF_ACCESS_TOKEN);
export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const msg = await huggingface.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMT,
        },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you would
                recommend I make`,
        },
      ],
      max_tokens: 500,
    });
    return msg.choices[0].message.content;
  } catch (err) {
    console.log(err.message);
  }
}
