// https://qiita.com/akameco/items/6567ccb1fd3b2e787f56
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
  }
}

declare module '*.scss' {}
