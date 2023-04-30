/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Editor } from '@tiptap/react'
import {
  ArrowArcLeft,
  ArrowArcRight,
  TextHOne,
  TextHThree,
  TextHTwo,
} from 'phosphor-react'

import useEditorContent from '@/features/editor-recoil//hooks/useEditorContent'
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
    // TODO history cursor position
    e.stopPropagation()
    e.preventDefault()
    editor.commands.undo()
  }

  const handleRedo = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO history cursor position
    e.stopPropagation()
    e.preventDefault()
    editor.commands.redo()
  }

  const isAllInactive = editor
    ? commands.every((d) => !editor.isActive(d.name, d.attributes))
    : true

  const canUndo = !editor ? false : editor.can().undo()
  const canRedo = !editor ? false : editor.can().redo()

  return (
    <div className='flex flex-wrap gap-2'>
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
