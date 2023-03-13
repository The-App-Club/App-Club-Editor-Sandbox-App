/** @jsxImportSource @emotion/react */

import Spacer from '@/components/ui/Spacer'
import Controler from '@/features/editor/components/Controler'
import MarkdownEditor from '@/features/editor/components/MarkdownEditor'
import Preview from '@/features/editor/components/Preview'
import useEditorControler from '@/features/editor/hooks/useEditorControler'
import EditorLayout from '@/features/editor/layouts/default'

const Editor = () => {
  const { mode } = useEditorControler()

  return (
    <EditorLayout>
      <Spacer />
      <Controler />
      <Spacer />
      <div className='w-full px-4'>
        {mode === 'edit' && <MarkdownEditor />}
        {mode === 'preview' && <Preview />}
      </div>
    </EditorLayout>
  )
}

export default Editor
