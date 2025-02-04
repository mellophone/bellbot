import {
  ActivitiesOptions,
  ActivityType,
  PresenceData,
  PresenceUpdateStatus,
} from "discord.js";

import settings from "../data/settings.json";

const activityStatus: ActivitiesOptions = {
  name: settings.status,
  type: ActivityType.Custom,
};

const onlineStatus = PresenceUpdateStatus.DoNotDisturb;

const presenceStatus: PresenceData = {
  activities: [activityStatus],
  status: onlineStatus,
};

export default presenceStatus;
