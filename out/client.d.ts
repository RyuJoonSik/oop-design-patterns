import { Server, DataStore } from "./";
export declare class Client {
    server: Server;
    store: DataStore;
    constructor(server: Server);
    synchronize(): void;
    update(data: string): void;
}
