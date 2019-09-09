/* 配列からオブジェクトに変換する */

export const fromArrayToObject = <T extends Readonly<{ id: number }>>(
  items: ReadonlyArray<T>
): Readonly<{ [id: number]: T }> =>
  items.reduce((map: any | {}, item) => {
    map[item.id] = item
    return map
  }, {})
