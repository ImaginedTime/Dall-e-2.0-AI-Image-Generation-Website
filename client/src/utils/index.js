import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {

    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    let randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) {
        randomPrompt = getRandomPrompt(prompt);
    }

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}