import { ILeavingReason } from '../types'

interface INameMap {
  [key: number]: string
}

export function updateReasons(arr: ILeavingReason[]) {
  const nameMap: INameMap = {
    1: 'Отсутствие интереса',
    2: 'Финансовые проблемы',
    3: 'Ограничения по времени',
    4: 'Уровень сложности',
    5: 'Отсутствие восприятия ценности',
    6: 'Проблемы доверия',
    7: 'Наличие бесплатных ресурсов',
    8: 'Языковой барьер',
  }

  return arr.map((obj: ILeavingReason) => ({
    ...obj,
    reason: nameMap[obj.reason] || obj.reason,
  }))
}
