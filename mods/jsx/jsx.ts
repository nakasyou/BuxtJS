// LuxtのJSX実装

type IntrinsicElementProps = Record<string, any> & {
  children?: JSX.Element[],
  dangerouslySetInnerHTML?: {
    __html: string,
  }
}
/**
 * LuxtのJSXの型。
 * JSXのElement
 */
export interface Node {
  type: Component | string
  props: Record<string, any> & {
    children?: any[]
  }
}
declare global {
  namespace JSX {
    type Element = NodeLike
    interface IntrinsicElements {
      [elemName: string]: IntrinsicElementProps
    }
    interface ElementChildrenAttribute {
      children: any
    }
  }
}
export type Component = (props: any) => JSX.Element | Promise<JSX.Element>

/**
 * Create element
 */
export const h = (
  type: Component | string,
  props: Record<string, string>,
  ...children: NodeSet
): JSX.Element => {
  return {
    type,
    props: {
      ...props,
      children,
    },
  }
}
type NodeLike = Node | string | number | boolean | null | void

interface FragmentProps {
  children: NodeSet
}
/**
 * JSX Fragmant
 */
export const Fragment = (props: FragmentProps): JSX.Element => {
  return {
    type: "_luxt_fragment",
    props,
  }
}

export interface LuxtJSXLuxtData {
  headStrings: string[]
}
const escapeChars: Record<string,string> = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&#39;",
    '"': "&#34;",
 }
export const escapeHTML = (text: string): string => {
  return text.replaceAll(/[&<>"']/g, char => escapeChars[char]);
}
const emptyTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]
/**
 * Convert Luxt JSX Element to html string
 * @example
 * ```ts
 * const Component = <>
 *   <div>Hello world!!</div>
 * </>
 * const luxtData: LuxtJSXLuxtData = {
 *   headStrings: []
 * }
 * console.log(renderToString(<Component />, luxtData))
 * // → <div>Hello world!!</div>
 * console.log(luxtData)
 * // → { headStrings: [] }
 * ```
 */
export const renderToString = async (element: JSX.Element | JSX.Element[], luxtData: LuxtJSXLuxtData): string => {
  if (element instanceof Array) {
    // これがNodeの集合である
    return (await Promise.all(element.map(async (node: NodeLike) => {
      return await renderToString(node, luxtData)
    }))).join("")
  } else {
    // これは一つのNodeである
    if (!element.type) {
      // これはNodeではない
      return escapeHTML(String(element))
    } else if (typeof element.type === "function") {
      // これはcomponentである
      const resultNode: JSX.Element = await element.type(element.props)
      return await renderToString(resultNode, luxtData)
    } else if (element.type[0]+element.type[1]+element.type[2]+element.type[3]+element.type[4]+element.type[5] === "_luxt_") {
      // これはLuxtのための予約タグである
      switch (element.type) {
        case "_luxt_fragment":
          return (await Promise.all(element.props.children.map(async (node: NodeLike) => {
            return await renderToString(node, luxtData)
          }))).join("")
        case "_luxt_pushHead": {
          luxtData.headStrings.push(element.props.string)
          return ""
        }
      }
    } else {
      const excludeProps = ["dangerouslySetInnerHTML", "children"]
      // これはタグである
      const propsString = Object.entries(element.props || {}).filter(([key,_value]) => !excludeProps.includes(key)).map(([key, value]) => {
        return `${key}="${value}"`
      }).join(" ")
      if (emptyTags.includes(element.type)) {
        return `<${element.type}${propsString ? " "+propsString : ""} />`
      }
      const childText = element.props.dangerouslySetInnerHTML?.__html ||
        (element.props?.children ? await renderToString(element.props.children, luxtData) : "")
      return `<${element.type}${propsString ? " "+propsString : ""}>${childText}</${element.type}>`
    }
  }
}
