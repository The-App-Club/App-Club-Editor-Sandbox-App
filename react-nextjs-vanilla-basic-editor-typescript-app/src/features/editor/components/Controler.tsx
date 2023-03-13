import Spacer from '@/components/ui/Spacer'
import NiceButton from '@/features/editor/components/NiceButton'
import useEditorControler from '@/features/editor/hooks/useEditorControler'

const Controler = () => {
  const { disabled, buttonLabelName, handlePublish, toggleMode, mode } =
    useEditorControler()

  const handleMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    toggleMode()
  }

  return (
    <div className='bg-white top-0 sticky px-4'>
      <div className='flex items-end justify-end flex-col'>
        <NiceButton
          type='button'
          labelName={buttonLabelName}
          onClick={handlePublish}
          disabled={disabled}
        />
      </div>
      <Spacer />
      <hr />
      <Spacer />
      <div className='w-full flex items-center'>
        <p className='text-sm font-medium text-gray-900 dark:text-white'>
          記事の内容をマークダウンで書けます。
          <a
            href='https://markdown-it.github.io/'
            referrerPolicy='no-referrer'
            rel='noreferrer'
            target={'_blank'}
            className={`hover:underline`}
          >
            こちらがマークダウンの参考リンクになります
          </a>
        </p>
        <div className='w-full flex items-center justify-end gap-4'>
          <NiceButton
            type='button'
            labelName={'Edit'}
            disabled={mode === 'edit'}
            onClick={handleMode}
          />
          <NiceButton
            type='button'
            labelName={'Preview'}
            disabled={mode === 'preview'}
            onClick={handleMode}
          />
        </div>
      </div>
    </div>
  )
}

export default Controler
