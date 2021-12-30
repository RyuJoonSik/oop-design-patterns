"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    constructor() {
        this.store = {
            timestamp: 0,
            data: "",
        };
    }
    synchronize(clientDataStore) {
        if (clientDataStore.timestamp > this.store.timestamp) {
            this.store = clientDataStore;
            return undefined;
        }
        else if (clientDataStore.timestamp < this.store.timestamp) {
            return this.store;
        }
        else {
            return undefined;
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map