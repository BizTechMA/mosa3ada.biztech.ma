import { post } from 'axios';

const sendToDiscord = async (formData) => {
  try {
    const webhookUrl = process.env.DISCORD_WEB_HOOK_URL;
    const message = `New contact:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    await post(webhookUrl, {
      content: message,
    });
  } catch (error) {
    console.error('Error sending message to Discord:', error);
  }
};

export default { sendToDiscord };