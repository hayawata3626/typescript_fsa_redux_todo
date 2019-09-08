/* 配列からオブジェクトに変換する */
export const fromArrayToObject = <K, T extends { id: number }>(
  K: ReadonlyArray<T>
): Readonly<{ [key: number]: T }> =>
  K.reduce((obj: any | {}, data: T) => {
    obj[data.id] = data
    return obj
  }, {})
