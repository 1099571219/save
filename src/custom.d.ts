type Tag = {
    id: string;
    name: string;
}
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date; //类 小于类型 / 构造函数
};
