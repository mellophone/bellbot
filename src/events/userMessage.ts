import { Client, Message, OmitPartialGroupDMChannel } from "discord.js";

const phantomUserId = "807627624515502121";

export const onUserMessage = async (
  message: OmitPartialGroupDMChannel<Message>,
  client: Client
) => {
  if (message.author.id === phantomUserId) {
    await message.reply("shut up");
  }
};
