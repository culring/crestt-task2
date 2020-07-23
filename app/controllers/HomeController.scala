package controllers

import javax.inject._
import play.api.mvc._

import models.NodesCache

@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents, val nodesCache: NodesCache) extends BaseController {
  def index() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index(nodesCache.getNodes()))
  }
}
