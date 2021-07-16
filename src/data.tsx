import { IconType } from 'react-icons'
import { FaSignal } from 'react-icons/fa'
import { FiWifi, FiHardDrive } from 'react-icons/fi'

interface ISignal {
  Icon: IconType
}

export const signals: ISignal[] = [
  {
    Icon: FaSignal,
  },
  {
    Icon: FiWifi,
  },
  {
    Icon: FiHardDrive,
  },
]
