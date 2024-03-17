import axios, { AxiosInstance } from "axios";
import "dotenv/config";

export abstract class ApiClientBase {
  public static createAxiosInstance(): AxiosInstance {
    const instance = axios.create({});
    instance.defaults.headers.common = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    instance.defaults.validateStatus = () => true;
    return instance;
  }

  client: AxiosInstance = ApiClientBase.createAxiosInstance();
}
