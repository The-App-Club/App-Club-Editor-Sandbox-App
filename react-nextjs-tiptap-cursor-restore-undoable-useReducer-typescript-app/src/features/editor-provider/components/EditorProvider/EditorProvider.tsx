import {
  EditorContext,
  useEditorReducer,
} from '@/features/editor-provider/hooks/useEditorReducer'

type Props = {
  children: JSX.Element
}

const EditorProvider: React.FC<Props> = ({ children }) => {
  const subscribed = useEditorReducer()
  return (
    <EditorContext.Provider value={{ ...subscribed }}>
      {children}
    </EditorContext.Provider>
  )
}
export default EditorProvider
