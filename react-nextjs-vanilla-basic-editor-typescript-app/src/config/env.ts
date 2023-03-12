import { envsafe, num, str } from 'envsafe'

const env = envsafe({
  NEXT_PUBLIC_ENABLE_RANDOM_ERROR: num({
    default: Number(process.env.NEXT_PUBLIC_ENABLE_RANDOM_ERROR),
    choices: [0, 1],
    devDefault: Number(process.env.NEXT_PUBLIC_ENABLE_RANDOM_ERROR),
  }),
  NEXT_PUBLIC_FRONTEND_BASE_URL: str({
    default: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
    devDefault: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL,
  }),
  NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL: str({
    default: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL,
    devDefault: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL,
  }),
  NEXT_PUBLIC_AXIOS_FETCH_TIMEOUT: num({
    default: Number(process.env.NEXT_PUBLIC_AXIOS_FETCH_TIMEOUT),
    devDefault: Number(process.env.NEXT_PUBLIC_AXIOS_FETCH_TIMEOUT),
  }),
  NEXT_PUBLIC_ERROR_RETRY_COUNT: num({
    default: Number(process.env.NEXT_PUBLIC_ERROR_RETRY_COUNT),
    devDefault: Number(process.env.NEXT_PUBLIC_ERROR_RETRY_COUNT),
  }),
  NEXT_PUBLIC_ERROR_RETRY_INTERVAL: num({
    default: Number(process.env.NEXT_PUBLIC_ERROR_RETRY_INTERVAL),
    devDefault: Number(process.env.NEXT_PUBLIC_ERROR_RETRY_INTERVAL),
  }),
  NODE_ENV: str({
    default: process.env.NODE_ENV,
    choices: ['production', 'development', 'test'],
    devDefault: process.env.NODE_ENV,
  }),
})

export { env }
