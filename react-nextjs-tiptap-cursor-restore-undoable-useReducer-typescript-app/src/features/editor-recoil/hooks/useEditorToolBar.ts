import { useCallback, useMemo } from 'react'

import { Editor } from '@tiptap/react'

import useEditorContent from '@/features/editor-recoil/hooks/useEditorContent'

const useEditorToolBar = (editor: Editor) => {
  const { cursor } = useEditorContent()

  const handleToggleHeadingOne = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      editor.commands.toggleHeading({ level: 1 })
      editor.commands.focus(cursor)
    },
    [editor, cursor]
  )

  const handleToggleHeadingTwo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      editor.commands.toggleHeading({ level: 2 })
      editor.commands.focus(cursor)
    },
    [editor, cursor]
  )

  const handleToggleHeadingThree = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      editor.commands.toggleHeading({ level: 3 })
      editor.commands.focus(cursor)
    },
    [editor, cursor]
  )

  const handleUndo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // TODO history cursor position
      e.stopPropagation()
      e.preventDefault()
      editor.commands.undo()
    },
    [editor]
  )

  const handleRedo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // TODO history cursor position
      e.stopPropagation()
      e.preventDefault()
      editor.commands.redo()
    },
    [editor]
  )

  const canUndo = !editor ? false : editor.can().undo()
  const canRedo = !editor ? false : editor.can().redo()

  return useMemo(() => {
    return {
      handleToggleHeadingOne,
      handleToggleHeadingTwo,
      handleToggleHeadingThree,
      handleUndo,
      handleRedo,
      canUndo,
      canRedo,
    }
  }, [
    handleToggleHeadingOne,
    handleToggleHeadingTwo,
    handleToggleHeadingThree,
    handleUndo,
    handleRedo,
    canUndo,
    canRedo,
  ])
}

export default useEditorToolBar
