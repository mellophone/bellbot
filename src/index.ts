import { Client } from "discord.js";
import { validateEnv } from "./utils/validateEnv";
import { onReady } from "./events/ready";
import { onInteraction } from "./events/interaction";
import { IntentOptions } from "./config/intentOptions";
import "dotenv/config";
import { onUserMessage } from "./events/userMessage";

(async () => {
  if (!validateEnv()) return;
  const client = new Client({ intents: IntentOptions });

  client.on("ready", async () => await onReady(client));

  client.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction, client)
  );

  client.on(
    "messageCreate",
    async (message) => await onUserMessage(message, client)
  );

  await client.login(process.env.TOKEN);
})();
