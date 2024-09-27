export function generateAvatarColors(initials: string) {
  // Convert initials to a number
  const charCodes = initials.split("").map((char) => char.charCodeAt(0));
  const sum = charCodes.reduce((acc, code) => acc + code, 0);

  // Use the sum to seed a simple random number generator
  let rand = sum;
  const nextRand = () => {
    rand = (rand * 1103515245 + 12345) & 0x7fffffff;
    return rand / 0x7fffffff;
  };

  // Generate HSL color values for background (light color)
  const hue = Math.floor(nextRand() * 360);
  const saturation = Math.floor(60 + nextRand() * 20); // 60-80%

  // Background: high lightness
  const bgLightness = Math.floor(80 + nextRand() * 15); // 80-95%

  // Text: low lightness (darker shade of the same color)
  const textLightness = Math.floor(25 + nextRand() * 20); // 15-35%

  return {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${bgLightness}%)`,
    textColor: `hsl(${hue}, ${saturation}%, ${textLightness}%)`,
  };
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export function formatDataAsObject(
  data: {
    status: "Cancelled" | "Scheduled" | "Pending";
    count: number;
  }[],
) {
  const formattedData: any = {};
  for (const statusCount of data) {
    formattedData[statusCount.status] = statusCount.count;
  }
  return formattedData;
}
