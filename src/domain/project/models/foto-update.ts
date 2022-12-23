import { BaseModel } from '@domain/common/model/base-model'
import { FotoCommon } from './foto-common'

class FotoUpdate extends FotoCommon {
  fileExtension: string = ''
  fileBase64: string = ''
}

export { FotoUpdate }
