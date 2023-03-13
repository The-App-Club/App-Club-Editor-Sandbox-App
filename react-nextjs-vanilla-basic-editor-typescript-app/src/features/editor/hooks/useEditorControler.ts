import { useCallback, useEffect, useMemo } from 'react'
import { useState } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Subject } from 'rxjs/internal/Subject'

import { editorState } from '@/features/editor/stores/editor'

const subjectKeyboardEvent = new Subject<React.KeyboardEvent<HTMLDivElement>>()
const subjectFormEvent = new Subject<React.FormEvent<HTMLDivElement>>()

const useEditorControler = () => {
  const activeEditor = useRecoilValue(editorState)
  const setEditor = useSetRecoilState(editorState)
  const [isCtrlEnter, setIsCtrlEnter] = useState(false)

  const { text: editorText, mode } = useMemo(() => {
    return { ...activeEditor }
  }, [activeEditor])

  subjectFormEvent.subscribe((e) => {
    setEditor((prevState) => {
      return {
        ...prevState,
        text: e.currentTarget.innerText,
      }
    })
  })

  subjectKeyboardEvent.subscribe((e) => {
    if (e.ctrlKey && e.keyCode === 13) {
      setIsCtrlEnter(true)
      setTimeout(() => {
        setIsCtrlEnter(false)
      }, 300)
      return
    }
    setIsCtrlEnter(false)
  })

  const handleInput = useCallback((e: React.FormEvent<HTMLDivElement>) => {
    e.stopPropagation()
    subjectFormEvent.next(e)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation()
      subjectKeyboardEvent.next(e)
    },
    []
  )

  const handlePublish = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      console.log(`handlePublish`, editorText)
    },
    [editorText]
  )

  const { buttonLabelName, disabled } = useMemo(() => {
    if (isCtrlEnter) {
      return {
        buttonLabelName: `Publishing...`,
        disabled: true,
      }
    }
    return {
      buttonLabelName: `Publish`,
      disabled: false,
    }
  }, [isCtrlEnter])

  const toggleMode = useCallback(() => {
    setEditor((prevState) => {
      return {
        ...prevState,
        mode: prevState.mode === 'edit' ? 'preview' : 'edit',
      }
    })
  }, [setEditor])

  useEffect(() => {
    if (!isCtrlEnter) {
      return
    }
    // do post save to server db
    console.log(`handlePublish`, editorText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCtrlEnter])

  return useMemo(() => {
    return {
      mode,
      disabled,
      buttonLabelName,
      isCtrlEnter,
      editorText,
      handleKeyDown,
      handleInput,
      handlePublish,
      toggleMode,
    }
  }, [
    mode,
    disabled,
    buttonLabelName,
    isCtrlEnter,
    editorText,
    handleKeyDown,
    handleInput,
    handlePublish,
    toggleMode,
  ])
}

export default useEditorControler
