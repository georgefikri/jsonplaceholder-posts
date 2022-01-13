import { BaseService } from "./";

export const PostsServiceServiceFactory = (function () {
  let instance;
  function createInstance() {
    return new PostsService();
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
class PostsService extends BaseService {
  serviceRoute;
  constructor() {
    super();
    this.serviceRoute = "posts";
  }
}
