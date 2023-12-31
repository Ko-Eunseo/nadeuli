import { TagType } from "@/types/type";
import { TagBox, TagList } from "../styles";
import { colors } from "@/styles/colors";
import SelectTagItem from "@/components/molecules/tag/RenderTag";

interface CustomTagType {
  locations: TagType[];
  contentTypes: TagType[];
  mates: TagType[];
}

const CustomTags = ({ locations, contentTypes, mates }: CustomTagType) => {
  const renderTag = (
    data: TagType[],
    label: string,
    bg: keyof typeof colors
  ) => {
    return data?.map(({ id, code, name }) => {
      return (
        <SelectTagItem
          key={code + name}
          label={label}
          name={name}
          bg={bg}
          code={code || id}
        />
      );
    });
  };

  return (
    <TagBox>
      <TagList>
        {mates && renderTag(mates, "who", "yellow")}
        {locations && renderTag(locations, "where", "green")}
        {contentTypes && renderTag(contentTypes, "what", "pink")}
      </TagList>
    </TagBox>
  );
};

export default CustomTags;
