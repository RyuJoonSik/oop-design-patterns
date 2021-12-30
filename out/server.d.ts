export interface DataStore {
    timestamp: number;
    data: string | undefined;
}
export declare class Server {
    store: DataStore;
    synchronize(clientDataStore: DataStore): DataStore | undefined;
}
