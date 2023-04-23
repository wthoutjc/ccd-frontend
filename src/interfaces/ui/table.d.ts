export interface ITable {
  title: string;
  columns: string[];
  rows: Array<Array<any>>;
  totalData: number;
  context: IContextTable;
}
