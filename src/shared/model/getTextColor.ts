import convert from "color-convert";

export const getTextColor = (backgroundColor: string) => {
  if (backgroundColor === "rgba(0,0,0,0)") return "#000";

  const backgroundLightness = convert.hex.hsl(backgroundColor)[2];
  console.log(backgroundColor, backgroundLightness);

  const textColor = backgroundLightness <= 50 ? "#fff" : "#000";
  return textColor;
};
