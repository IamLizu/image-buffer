const getImg = (buffer, mimeType) => {
    return `data:${mimeType};base64,${Buffer.from(buffer).toString("base64")}`;
};

module.exports = getImg;
