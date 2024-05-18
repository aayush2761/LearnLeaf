import config from "../config/config";
import { Client, Storage, ID, ImageGravity } from "appwrite";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      const response = await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
      console.log("File uploaded successfully: ", response);
      return response;
    } catch (error) {
      console.error("Appwrite service :: uploadFile :: error: ", error.message);
      console.error("Detailed error: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error: ", error);
      return false;
    }
  }

  getFilePreview(fileId, height) {
    return this.storage.getFilePreview(
      config.appwriteBucketId,
      fileId,
      0,
      height,
      ImageGravity.Center,
      100
    );
  }
}

const storageService = new StorageService();
export default storageService;
