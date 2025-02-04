import { readFileSync, writeFileSync } from "fs";

const settingsFilePath = "./src/data/settings.json";

export default class SettingsData {
  static update = (setting: string, value: string) => {
    const file = JSON.parse(readFileSync(settingsFilePath).toString());
    file[setting] = value;
    writeFileSync(settingsFilePath, JSON.stringify(file, null, 1));
  };
}
