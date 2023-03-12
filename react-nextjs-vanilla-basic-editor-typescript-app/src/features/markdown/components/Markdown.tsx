/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { InlineMath } from 'react-katex'
import ReactMarkdown from 'react-markdown'
import 'katex/dist/katex.min.css'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'

import Spacer from '@/components/ui/Spacer'
import MarkdownLayout from '@/features/markdown/layouts/default'

const markdownString1 = `
# Markdown

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
`

const markdownString2 = `
# GFM

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
`

const markdownString3 = `
# TeX

x^2 + y^2 = 1 をインライン表示すると $x^2 + y^2 = 1$ になります。

$$ S=\\sum_{n=1}^\\infty a_n $$

$$\\frac{1}{2} $$

`
const Markdown = () => {
  return (
    <MarkdownLayout>
      <InlineMath>\int_0^\infty x^2 dx</InlineMath>
      <Spacer />
      <hr />
      <Spacer />
      <ReactMarkdown
        css={css`
          h1 {
            font-size: 3rem;
          }
        `}
      >
        {markdownString1}
      </ReactMarkdown>
      <Spacer />
      <hr />
      <Spacer />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownString2}
      </ReactMarkdown>
      <Spacer />
      <hr />
      <Spacer />
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {markdownString3}
      </ReactMarkdown>
    </MarkdownLayout>
  )
}

export default Markdown
