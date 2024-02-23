import { Fragment } from "react"
import textHighlighter from "./textHighlighter"


const textBreak = (text: string, color?: string) => {

  return text.split('\\n').map((item, index) => {
    return (
      <Fragment key={index}>
        <span>
          {textHighlighter({
            text: item,
            color
          })}
        </span>
        <br />
      </Fragment>
    )
  })
}

export default textBreak