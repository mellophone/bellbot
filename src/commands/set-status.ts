import {
  ActivityType,
  EmbedBuilder,
  MessageFlags,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from "discord.js";
import { Command } from "../interfaces/Command";
import SettingsData from "../utils/SettingsData";

export const setStatus: Command = {
  data: new SlashCommandBuilder()
    .setName("set-status")
    .setDescription("Set the bot's status.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option
        .setName("status-text")
        .setDescription("The status message you want to appear.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply({ flags: [MessageFlags.Ephemeral] });

    const statusText = interaction.options.getString("status-text", true);
    const oldStatusText = interaction.client.user.presence.activities[0].state;

    interaction.client.user.setActivity(statusText, {
      type: ActivityType.Custom,
    });

    const returnMessage = new EmbedBuilder()
      .setTitle("✅ Status Updated")
      .setDescription(
        `The bot's status was changed from "${oldStatusText}" to "${statusText}".`
      )
      .setColor("Green");

    await interaction.editReply({ embeds: [returnMessage] });

    SettingsData.update("status", statusText);
    return;
  },
};
