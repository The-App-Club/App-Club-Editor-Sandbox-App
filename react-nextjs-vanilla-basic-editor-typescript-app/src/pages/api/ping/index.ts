import nextConnect from 'next-connect'

import { ServerSideEnvData } from '@/features/ping/types/serverSideEnv'
import {
  dispatchCustomServerSideError,
  dispatchServerSideError,
} from '@/types/error'
import { isRandomError } from '@/utils/bebopUtil'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    try {
      if (isRandomError()) {
        dispatchCustomServerSideError()
      }
      const data: ServerSideEnvData = {
        NODE_ENV: process.env.NODE_ENV,
      }
      res.status(200).json(data)
    } catch (error: any) {
      dispatchServerSideError(req, res, error)
    }
  }
)

export default handler
