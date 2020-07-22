package models

import javax.inject.Singleton
import xlsx2node.{Node, Xlsx2NodeParser}

@Singleton
class NodesCache {
  private var _nodes = List[Node]()

  def getNodes(): List[Node] = {
    if(_nodes.isEmpty) {
      val inputStream = getClass.getResourceAsStream("/Scala_zadanie.xlsx")
      _nodes = Xlsx2NodeParser.parse(inputStream)
    }
    _nodes
  }
}
