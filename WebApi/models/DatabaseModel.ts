export abstract class DatabaseModel {
    table: string;
    id: any;

    constructor(tableName) {
        this.table = tableName;
    }
}