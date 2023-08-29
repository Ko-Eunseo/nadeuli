import { TabType } from "@/types/type";
import { iconType } from "@/variables/icons";
import { UseQueryResult } from "@tanstack/react-query";

export function combineCategoriesWithIcons({
  callback,
  icons,
}: {
  callback: () => UseQueryResult<any, unknown>;
  icons: iconType[];
}): TabType[] {
  const { data } = callback();
  const categories = data?.response?.body?.items?.item || [];
  return categories?.map((category: TabType) => {
    const matchedIcon = icons.find((icon) => icon.name === category.name);
    return {
      ...category,
      icon: matchedIcon ? matchedIcon.icon : null,
    };
  });
}
