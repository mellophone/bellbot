import {
  ActivitiesOptions,
  ActivityType,
  PresenceData,
  PresenceUpdateStatus,
} from "discord.js";

const activityStatus: ActivitiesOptions = {
  name: "Fetching suitcases...",
  type: ActivityType.Custom,
};

const onlineStatus = PresenceUpdateStatus.DoNotDisturb;

const presenceStatus: PresenceData = {
  activities: [activityStatus],
  status: onlineStatus,
};

export default presenceStatus;
