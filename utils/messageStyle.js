import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝑻𝒘𝒊𝒍𝒊𝒈𝒉𝒕_𝑲𝒊𝒏𝒈☯❥",
        body: "㊝모ＡＩＭＢＯＴ？？？☯︎",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
