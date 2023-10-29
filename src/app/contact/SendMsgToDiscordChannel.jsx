const discordWebhookUrl = process.env.DISCORD_WEB_HOOK_URL;

const sendToDiscord = async (formData) => {
    try {
      const message = `New contact:
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}`;

      await axios.post(discordWebhookUrl, {
        content: message,
      });

      console.log('Message sent to Discord successfully');
    } catch (error) {
      console.error('Error sending message to Discord:', error);
    }
  };