const openai = require("openai");

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const client = new openai.OpenAI(configuration);

exports.handler = async (event) => {
  try {
    if (!event.body) {
      throw new Error("Missing request body");
    }

    const body = JSON.parse(event.body);
    const symptoms = body.symptoms;

    if (!symptoms) {
      throw new Error("Missing 'symptoms' field in request body");
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a health assistant that helps users understand possible causes of symptoms.",
        },
        {
          role: "user",
          content: `These are my symptoms: ${symptoms}`,
        },
      ],
    });

    const response = completion.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    console.error("Lambda error:", error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
