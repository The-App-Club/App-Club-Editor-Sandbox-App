/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Editor } from '@tiptap/react'
import {
  ArrowArcLeft,
  ArrowArcRight,
  CheckSquare,
  Code,
  CodeSimple,
  HighlighterCircle,
  ListBullets,
  ListNumbers,
  Quotes,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextBolder,
  TextHOne,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextStrikethrough,
} from 'phosphor-react'

import useEditorContent from '@/features/editor-recoil/hooks/useEditorContent'
import { commands } from '@/features/editor-recoil/stores/command'

const Toolbar = ({ editor }: { editor: Editor }) => {
  const { cursor } = useEditorContent()
  const handleToggleHeadingOne = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleHeading({ level: 1 })
    editor.commands.focus(cursor)
  }

  const handleToggleHeadingTwo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleHeading({ level: 2 })
    editor.commands.focus(cursor)
  }

  const handleToggleHeadingThree = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleHeading({ level: 3 })
    editor.commands.focus(cursor)
  }

  const handleUndo = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Omit restoring history cursor position
    e.stopPropagation()
    e.preventDefault()
    editor.commands.undo()
  }

  const handleRedo = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Omit restoring history cursor position
    e.stopPropagation()
    e.preventDefault()
    editor.commands.redo()
  }

  const handleToggleQuotes = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleBlockquote()
    editor.commands.focus(cursor)
  }

  const handleToggleBulletList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleBulletList()
    editor.commands.focus(cursor)
  }
  const handleToggleOrderedList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleOrderedList()
    editor.commands.focus(cursor)
  }

  const handleToggleCodeBlock = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleCodeBlock()
    editor.commands.focus(cursor)
  }

  const handleToggleBold = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleBold()
    editor.commands.focus(cursor)
  }

  const handleToggleCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleCode()
    editor.commands.focus(cursor)
  }

  const handleToggleItalic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleItalic()
    editor.commands.focus(cursor)
  }

  const handleToggleStrike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleStrike()
    editor.commands.focus(cursor)
  }

  const handleToggleHightlight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleHighlight()
    editor.commands.focus(cursor)
  }

  const handleSetTextAlignCenter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.setTextAlign('center')
    editor.commands.focus(cursor)
  }

  const handleSetTextAlignLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.setTextAlign('left')
    editor.commands.focus(cursor)
  }
  const handleSetTextAlignRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.setTextAlign('right')
    editor.commands.focus(cursor)
  }

  const handleSetTextAlignJustify = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.setTextAlign('justify')
    editor.commands.focus(cursor)
  }

  const handleToggleTaskList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    editor.commands.toggleTaskList()
    // console.log(`cursor`, cursor)
    // https://github.com/ueberdosis/tiptap/issues/3411
    // editor.commands.focus(cursor)
  }

  const isAllInactive = editor
    ? commands.every((d) => !!editor.isActive(d.name, d.attributes))
    : true

  const canUndo = !editor ? false : editor.can().undo()
  const canRedo = !editor ? false : editor.can().redo()

  // https://github.com/ueberdosis/tiptap/blob/main/demos/src/Examples/Formatting/React/index.jsx#L40-L51
  return (
    <div className='flex flex-wrap gap-2'>
      <button
        type='button'
        onClick={handleToggleTaskList}
        css={css`
          color: ${editor.isActive('taskList') ? '#000000' : '#e3e3e3'};
        `}
      >
        <CheckSquare size={32} />
      </button>

      <button
        type='button'
        onClick={handleToggleHightlight}
        css={css`
          color: ${editor.isActive('highlight') ? '#000000' : '#e3e3e3'};
        `}
      >
        <HighlighterCircle size={32} />
      </button>

      <button
        type='button'
        onClick={handleSetTextAlignLeft}
        css={css`
          color: ${editor.isActive({ textAlign: 'left' })
            ? '#000000'
            : '#e3e3e3'};
        `}
      >
        <TextAlignLeft size={32} />
      </button>

      <button
        type='button'
        onClick={handleSetTextAlignCenter}
        css={css`
          color: ${editor.isActive({ textAlign: 'center' })
            ? '#000000'
            : '#e3e3e3'};
        `}
      >
        <TextAlignCenter size={32} />
      </button>

      <button
        type='button'
        onClick={handleSetTextAlignRight}
        css={css`
          color: ${editor.isActive({ textAlign: 'right' })
            ? '#000000'
            : '#e3e3e3'};
        `}
      >
        <TextAlignRight size={32} />
      </button>

      <button
        type='button'
        onClick={handleSetTextAlignJustify}
        css={css`
          color: ${editor.isActive({ textAlign: 'justify' })
            ? '#000000'
            : '#e3e3e3'};
        `}
      >
        <TextAlignJustify size={32} />
      </button>

      <button
        type='button'
        onClick={handleToggleStrike}
        css={css`
          color: ${editor.isActive('strike') ? '#000000' : '#e3e3e3'};
        `}
      >
        <TextStrikethrough size={32} />
      </button>

      <button
        type='button'
        onClick={handleToggleItalic}
        css={css`
          color: ${editor.isActive('italic') ? '#000000' : '#e3e3e3'};
        `}
      >
        <TextItalic size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleCode}
        css={css`
          color: ${editor.isActive('code') ? '#000000' : '#e3e3e3'};
        `}
      >
        <Code size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleBold}
        css={css`
          color: ${editor.isActive('bold') ? '#000000' : '#e3e3e3'};
        `}
      >
        <TextBolder size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleCodeBlock}
        css={css`
          color: ${editor.isActive('codeBlock') ? '#000000' : '#e3e3e3'};
        `}
      >
        <CodeSimple size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleOrderedList}
        css={css`
          color: ${editor.isActive('orderedList') ? '#000000' : '#e3e3e3'};
        `}
      >
        <ListNumbers size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleBulletList}
        css={css`
          color: ${editor.isActive('bulletList') ? '#000000' : '#e3e3e3'};
        `}
      >
        <ListBullets size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleQuotes}
        css={css`
          color: ${editor.isActive('quotes') ? '#000000' : '#e3e3e3'};
        `}
      >
        <Quotes size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleHeadingOne}
        css={css`
          color: ${editor.isActive('heading', { level: 1 })
            ? '#000000'
            : '#e3e3e3'};
        `}
      >
        <TextHOne size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleHeadingTwo}
        css={css`
          color: ${editor.isActive('heading', { level: 2 })
            ? '#000000'
            : '#e3e3e3'};
        `}
      >
        <TextHTwo size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleHeadingThree}
        css={css`
          color: ${editor.isActive('heading', { level: 3 })
            ? '#000000'
            : '#e3e3e3'};
        `}
      >
        <TextHThree size={32} />
      </button>
      <button
        className={canUndo ? 'cursor-pointer' : 'cursor-not-allowed'}
        onClick={handleUndo}
        type='button'
        css={css`
          color: ${canUndo ? '#000000' : '#e3e3e3'};
        `}
      >
        <ArrowArcLeft size={32} />
      </button>
      <button
        className={canRedo ? 'cursor-pointer' : 'cursor-not-allowed'}
        onClick={handleRedo}
        type='button'
        css={css`
          color: ${canRedo ? '#000000' : '#e3e3e3'};
        `}
      >
        <ArrowArcRight size={32} />
      </button>
    </div>
  )
}

export default Toolbar
