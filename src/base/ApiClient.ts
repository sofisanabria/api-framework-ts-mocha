import "dotenv/config";
import { ApiClientBase } from "./ApiClientBase.js";
import { AxiosInstance } from "axios";

export class ApiClient extends ApiClientBase {
  private static classInstance?: ApiClient;

  private constructor() {
    super();
  }

  public static getInstance(customClientConfig?: (client: AxiosInstance) => void) {
    if (customClientConfig) {
      const apiClient = new ApiClient();
      customClientConfig(apiClient.client);
      return apiClient;
    }
    if (!this.classInstance) {
      this.classInstance = new ApiClient();
    }

    return this.classInstance;
  }
}
