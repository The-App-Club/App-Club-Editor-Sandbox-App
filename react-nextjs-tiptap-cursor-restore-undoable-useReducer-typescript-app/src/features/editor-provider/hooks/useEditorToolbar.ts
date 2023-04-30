import { useCallback, useMemo } from 'react'

import useTipTapEditor from '@/features/editor-provider/hooks/useEditorReducer'
import { Command, commands } from '@/features/editor-provider/stores/command'

const useEditorToolbar = () => {
  const {
    operationState: {
      past,
      present: { editor, transaction, cursor },
      future,
    },
  } = useTipTapEditor()

  const cursorHistory = useMemo(() => {
    return {
      past: past.map((d) => d.cursor),
      cursor,
      future: future.map((d) => d.cursor),
    }
  }, [past, cursor, future])

  const handleToggleHeadingOne = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      if (!editor) return
      if (!transaction) return
      editor.commands.toggleHeading({ level: 1 })
      editor.commands.focus(transaction.selection.anchor)
    },
    [editor, transaction]
  )

  const handleToggleHeadingTwo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      if (!editor) return
      if (!transaction) return
      editor.commands.toggleHeading({ level: 2 })
      editor.commands.focus(transaction.selection.anchor)
    },
    [editor, transaction]
  )

  const handleToggleHeadingThree = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      if (!editor) return
      if (!transaction) return
      editor.commands.toggleHeading({ level: 3 })
      editor.commands.focus(transaction.selection.anchor)
    },
    [editor, transaction]
  )

  const handleUndo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // TODO history cursor position
      e.stopPropagation()
      e.preventDefault()
      if (!editor) return
      editor.commands.undo()
      editor.commands.focus(cursorHistory.past.pop())
    },
    [editor, cursorHistory]
  )

  const handleRedo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      if (!editor) return
      editor.commands.redo()
      editor.commands.focus(cursorHistory.future.pop())
    },
    [editor, cursorHistory]
  )

  const isAllInactive = useMemo(() => {
    if (!editor) {
      return true
    }
    return commands.every((d) => !!editor.isActive(d.name, d.attributes))
  }, [editor])

  const decidedColor = useCallback(
    (command: Command) => {
      if (isAllInactive) {
        return `#e3e3e3`
      }
      if (!editor) {
        return `#e3e3e3`
      }
      return editor.isActive(command.name, command.attributes)
        ? '#000000'
        : '#e3e3e3'
    },
    [editor, isAllInactive]
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
      decidedColor,
      canUndo,
      canRedo,
    }
  }, [
    handleToggleHeadingOne,
    handleToggleHeadingTwo,
    handleToggleHeadingThree,
    handleUndo,
    handleRedo,
    decidedColor,
    canUndo,
    canRedo,
  ])
}

export default useEditorToolbar
