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

  //put values

  if (newTextObject.image && !props?.image && !props.bgImage) {
    props.image = newTextObject.image;
  }
  if (newTextObject.bgImage && !props.bgImage) {
    props.bgImage = newTextObject.bgImage;
  }
  if (newTextObject.btnText && !props?.btnText) {
    props.btnText = newTextObject.btnText;
  }
  if (newTextObject.btnLink && !props?.btnLink) {
    props.btnLink = newTextObject.btnLink;
  }

  if (
    newTextObject?.ctaSections &&
    ![
      props?.ctaSection,
      props?.cards,
      props?.slides,
      props?.images,
      props?.imagesMobile,
    ].every((field) => !field)
  ) {
    props.ctaSection = newTextObject?.ctaSections || [];
  }

  if (newTextObject?.items && props?.items?.length === 0) {
    props.items = newTextObject?.items || [];
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
