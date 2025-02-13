import {
  EmbedBuilder,
  MessageFlags,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from "discord.js";
import { Command } from "../interfaces/Command";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the bot.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  run: async (interaction) => {
    await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

    const returnMessage = new EmbedBuilder()
      .setTitle("🏓 Pong!")
      .setDescription("Thank you for using the /ping command!")
      .setColor("Green");

    await interaction.editReply({ embeds: [returnMessage] });
    return;
  },
};
