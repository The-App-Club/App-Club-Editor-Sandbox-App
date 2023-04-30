/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import {
  ArrowArcLeft,
  ArrowArcRight,
  TextHOne,
  TextHThree,
  TextHTwo,
} from 'phosphor-react'

import useEditorToolbar from '@/features/editor-provider/hooks/useEditorToolbar'

const Toolbar = () => {
  const {
    decidedColor,
    handleToggleHeadingOne,
    handleToggleHeadingTwo,
    handleToggleHeadingThree,
    handleUndo,
    handleRedo,
    canUndo,
    canRedo,
  } = useEditorToolbar()

  return (
    <div className='flex flex-wrap gap-2'>
      <button
        type='button'
        onClick={handleToggleHeadingOne}
        css={css`
          color: ${decidedColor({ name: 'heading', attributes: { level: 1 } })};
        `}
      >
        <TextHOne size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleHeadingTwo}
        css={css`
          color: ${decidedColor({ name: 'heading', attributes: { level: 2 } })};
        `}
      >
        <TextHTwo size={32} />
      </button>
      <button
        type='button'
        onClick={handleToggleHeadingThree}
        css={css`
          color: ${decidedColor({ name: 'heading', attributes: { level: 3 } })};
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
