import { TabType } from "@/types/type";
import { iconType } from "@/variables/icons";

export function combineCategoriesWithIcons({
  category,
  icons,
}: {
  category: TabType[];
  icons: iconType[];
}) {
  return category?.map((cat: TabType) => {
    const matchedIcon = icons.find((icon) => icon.name === cat.name);
    return {
      ...cat,
      icon: matchedIcon ? matchedIcon.icon : null,
    };
  });
}
