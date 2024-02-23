import React from "react";

interface TextHighlighterProps {
  text: string;
  color?: string;
  style?: string
}

const textHighlighter = ({
  text,
  color,
  style
}: TextHighlighterProps) => {

  if (!text) {
    return;
  }

  if (color === 'orange-primary') {
    color = 'white'
  } else if (color === 'white') {
    color = 'white'
  } else {
    color = 'orange-primary'
  }

  const regex = /{[^}]+}|[^{}]+/g;

  const matches = text.match(regex);

  if (!matches) {
    return null;
  }



  const textWithSpan = matches.map((segment, index) => {
    if (segment.startsWith("{") && segment.endsWith("}")) {
      const content = segment.slice(1, -1); // Remove os {}

      if (isHTML(content)) {
        return (
          <span key={index} dangerouslySetInnerHTML={{ __html: content }} />
        );
      } else {
        return (
          <span className={`${style} text-${color} font-bold`} key={index}>
            {content}
          </span>
        );
      }
    } else {
      return segment;
    }
  });

  return textWithSpan;
};

export default textHighlighter;

const isHTML = (str: string): boolean => {
  const regex = /<\/?[a-z][\s\S]*>/i;
  return regex.test(str);
};
