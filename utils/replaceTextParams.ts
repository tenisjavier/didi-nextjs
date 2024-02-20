type Props = { [key: string]: any };

const replaceTextParams = (props: Props, newTextObject: Props) => {
  if (props?.title) {
    props.title = props.title.replaceAll("{param}", newTextObject.title);
  }

  if (props?.desc) {
    props.desc = props.desc.replaceAll("{param}", newTextObject.desc);
  }

  if (props?.slug) {
    props.slug = props.slug.replaceAll("{param}", newTextObject.slug);
  }

  if (props?.items) {
    props.items = props.items.map((item: any) => {
      return {
        title: item?.title?.replaceAll(
          "{param}",
          newTextObject?.content?.title
        ),
        content: replaceParamsInRichText(
          item.content,
          newTextObject?.content?.contentText
        ),
      };
    });
  }

  return props;
};

export default replaceTextParams;

function replaceParamsInRichText(object: any, newTextTest: string) {
  if (Array.isArray(object)) {
    for (let i = 0; i < object.length; i++) {
      object[i] = replaceParamsInRichText(object[i], newTextTest);
    }
  } else if (typeof object === "object") {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        object[key] = replaceParamsInRichText(object[key], newTextTest);
      }
    }
  } else if (typeof object === "string") {
    object = object.replaceAll("{param}", newTextTest);
  }

  return object;
}
