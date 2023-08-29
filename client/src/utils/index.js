import { surpriseMePrompts } from "../constants/";
import FileSarver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export function downloadImage(_id, photo) {
  FileSarver.saveAs(photo, `download-${_id}.jpg`);
}