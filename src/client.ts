import { Server, DataStore } from "./";

export class Client {
  store: DataStore = {
    timestamp: 0,
    data: undefined,
  };

  constructor(public server: Server) {}

  synchronize() {
    let updatedStore = this.server.synchronize(this.store);

    if (updatedStore) {
      this.store = updatedStore;
    }
  }

  update(data: string) {
    this.store.data = data;
    this.store.timestamp = Date.now();
  }
}
