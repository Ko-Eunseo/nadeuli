import Tag from "@/components/atoms/tags/Tag";
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
  //@todo: tag click & drag event: select item 지정
  const renderTag = (
    data: TagType[],
    label: string,
    bg: keyof typeof colors
  ) => {
    return data.map(({ id, code, name }) => {
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
        {renderTag(mates, "who", "yellow")}
        {renderTag(locations, "where", "green")}
        {renderTag(contentTypes, "what", "pink")}
      </TagList>
    </TagBox>
  );
};

export default CustomTags;
