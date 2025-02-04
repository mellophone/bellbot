import { Client, Message, OmitPartialGroupDMChannel } from "discord.js";

const phantomUserId = "807627624515502121";

export const onUserMessage = async (
  message: OmitPartialGroupDMChannel<Message>,
  client: Client
) => {
  if (message.author.id === client.user?.id) {
    return;
  }

  if (message.author.id === phantomUserId && Math.random() < 0.01) {
    await message.reply("shut up");
  }

  if (message.content === "aw yeah") {
    await message.reply({
      files: ["./src/assets/aw_yeah.mp3"],
    });
  }
};
