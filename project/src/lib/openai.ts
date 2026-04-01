import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function analyzePhoto(imageUrl: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Analyze this photograph and provide detailed feedback on composition, lighting, and technical quality. Include specific suggestions for improvement."
          },
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
    max_tokens: 1000,
  })

  return response.choices[0]?.message?.content || "Unable to analyze this image."
}

export async function generateTags(imageUrl: string): Promise<string[]> {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Generate 5-15 descriptive tags for this photograph. Include subject matter, style, mood, colors, and photographic techniques. Return only the tags as a comma-separated list, lowercase, using hyphens instead of spaces."
          },
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
    max_tokens: 200,
  })

  const content = response.choices[0]?.message?.content || ""
  return content.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
}

export async function generateCaption(imageUrl: string, style: 'instagram' | 'twitter' | 'professional' | 'casual' = 'instagram') {
  const stylePrompts = {
    instagram: "Generate an engaging Instagram caption with relevant hashtags",
    twitter: "Generate a concise Twitter/X caption under 280 characters", 
    professional: "Generate a professional, descriptive caption suitable for a portfolio",
    casual: "Generate a casual, friendly caption for social sharing"
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `${stylePrompts[style]} for this photograph. Make it engaging and authentic.`
          },
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
    max_tokens: 300,
  })

  return response.choices[0]?.message?.content || "Beautiful capture! 📸"
}

export { openai }
