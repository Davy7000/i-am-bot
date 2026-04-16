async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Aller follow notre chaine",
                    body: "㊝모ＡＩＭＢＯＴ？？？☯︎",
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029Vb86RiUBfxo9UMVNJ71m`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;
