import { v4 } from 'uuid'
import JsTreeList from 'js-tree-list'

type DepthListItem = {
  depth: number
  name: string
}

type ListTreeNode = {
  id: string | number
  depth: number
  parent: string | number
  name: string
}

const _listLastItem = (list: any[]) => list[list.length - 1]

const _findParseTreeSection = (value: string) =>
  value.split('>').find(e => e.match('Parse tree'))

const _listTreeEntries = (value: string) => value.match(/\t\|\t(\s)*.*/g)

const _convertToDepthList = (list: string[]) =>
  list.map(line => {
    const lineWithoutTabs = line.replace(/\t\|\t/g, '')
    const lineWithoutSpaces = line.replace(/[\t|\s]/g, '')
    const depth = lineWithoutTabs.match(/\s/g)?.length || 0

    return { depth, name: lineWithoutSpaces }
  })

const _convertDepthListToRelationshipList = (list: DepthListItem[]) => {
  const relationshipList: ListTreeNode[] = []

  list.forEach(item => {
    if (!relationshipList.length)
      return relationshipList.push({ ...item, id: v4(), parent: 0 })

    // Item depth - 1 is equal last items depth
    if (_listLastItem(relationshipList).depth === item.depth - 1) {
      const parent = _listLastItem(relationshipList)
      return relationshipList.push({
        ...item,
        id: v4(),
        parent: parent.id
      })
    }

    // Item depth is equal last items depth
    if (_listLastItem(relationshipList).depth === item.depth) {
      const sibling = _listLastItem(relationshipList)
      return relationshipList.push({
        ...item,
        id: v4(),
        parent: sibling.parent
      })
    }

    // Item depth is smaller than the last item
    if (_listLastItem(relationshipList).depth > item.depth) {
      const matchDepth = relationshipList.filter(
        el => el.depth === item.depth - 1
      )

      if (!matchDepth.length) return console.log('Not found!')

      const parent = _listLastItem(matchDepth)

      return relationshipList.push({
        ...item,
        id: v4(),
        parent: parent.id
      })
    }
  })

  return relationshipList
}

export const parseOutputToTree = (out: string) => {
  const parseTree = _findParseTreeSection(out)

  if (!parseTree) return

  const treeEntries = _listTreeEntries(parseTree)

  if (!treeEntries) return

  const orderedDepthList = _convertToDepthList(treeEntries)

  const relationshipList = _convertDepthListToRelationshipList(orderedDepthList)

  console.log(orderedDepthList)

  console.log(relationshipList)

  const [tree = {}] = new JsTreeList.ListToTree(relationshipList, {
    key_id: 'id',
    key_parent: 'parent',
    key_child: 'children',
    empty_children: true,
    uuid: true
  }).GetTree()

  return tree
}
