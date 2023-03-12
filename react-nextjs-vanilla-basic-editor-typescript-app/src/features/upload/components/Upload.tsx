import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Spacer from '@/components/ui/Spacer'
import NiceButton from '@/features/upload/components/NiceButton'
import TextFieldTitle from '@/features/upload/components/TextFieldTitle'
import UploadButton from '@/features/upload/components/UploadButton'
import UploadLayout from '@/features/upload/layouts/default'
import {
  UploadForm,
  UploadFormSchema,
} from '@/features/upload/stores/uploadForm'

const Upload = () => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
    clearErrors,
  } = useForm<UploadForm>({
    defaultValues: {
      title: '',
      snapshots: [],
    },
    resolver: zodResolver(UploadFormSchema),
    mode: 'all',
    reValidateMode: 'onSubmit',
  })

  const doSubmit = (data: UploadForm) => {
    console.log(data)
  }

  return (
    <UploadLayout>
      <h1 className='text-3xl font-bold underline flex justify-center items-center'>
        Hello world Upload!
      </h1>
      <Spacer />
      <form className='max-w-full w-full' onSubmit={handleSubmit(doSubmit)}>
        <TextFieldTitle
          type='text'
          labelName='タイトル'
          placeholder={'4月のスナップショットたち'}
          name='title'
          control={control}
        />
        <UploadButton
          control={control}
          type='button'
          labelName={'アップロードする'}
          clearErrors={clearErrors}
        />
        <Spacer />
        <hr />
        <Spacer />
        <NiceButton type='submit' labelName='Do Submit' disabled={!isValid} />
        <Spacer />
      </form>
    </UploadLayout>
  )
}

export default Upload
