import Axios from "axios";
// import { errors } from "../helpers/error-handling.helper";

export class BaseService {
  baseRoute;
  siteRoute;
  constructor() {
    // eslint-disable-next-line no-undef
    let siteUrl = process.env.REACT_APP_API_URL;
    siteUrl = siteUrl || "";
    // eslint-disable-next-line no-undef
    let route = process.env.BASE_ROUTE;
    route = route || "https://jsonplaceholder.typicode.com";
    this.baseRoute = `${siteUrl}${route}`;
  }

  async getAll(urlParams, withError) {
    return await Axios.get(`${this.generateURL(urlParams)}`, {
      ...this.configuration,
    }).catch((error) => {
      if (!withError) {
        console.log("error from getAll", error);
      } else {
        throw error;
      }
    });
  }

  /*
  async create(item, urlParams, withError) {
    return await Axios.post(`${this.generateURL(urlParams)}/`, item, {
      ...this.configuration,
    }).catch((error) => {
      if (!withError) {
        // errors(error);
        console.log("error from create", error);
      } else {
        throw error;
      }
    });
  }
  async update(item, id, urlParams, withError) {
    return await Axios.patch(`${this.generateURL(urlParams, id)}`, item, {
      ...this.configuration,
    }).catch((error) => {
      if (!withError) {
        console.log("error from update", error);
      } else {
        throw error;
      }
    });
  }
  async filter(query, urlParams, withError) {
    return await Axios.get(`${this.generateURL(urlParams)}`, {
      ...this.configuration,
      params: query,
    }).catch((error) => {
      if (!withError) {
        console.log("error from filter", error);
      } else {
        throw error;
      }
    });
  }

  async getById(id, urlParams, withError) {
    return await Axios.get(`${this.generateURL(urlParams, id)}`, {
      ...this.configuration,
    }).catch((error) => {
      if (!withError) {
        console.log("error from getById", error);
      } else {
        throw error;
      }
    });
  }
  async removeById(id, urlParams, withError) {
    return await Axios.delete(`${this.generateURL(urlParams, id)}`, {
      ...this.configuration,
    }).catch((error) => {
      if (!withError) {
        console.log("error from removeById", error);
      } else {
        throw error;
      }
    });
  }

  */
  generateURL(urlParams, id) {
    let route = this.serviceRoute;
    urlParams = urlParams || {};
    for (const param in urlParams) {
      route = route.replace(new RegExp(`{${param}}`, "g"), urlParams[param]);
    }
    return `${this.baseRoute}/${route}${id ? `/${id}` : ""}`;
  }
}
