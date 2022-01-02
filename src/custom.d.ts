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
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' //联合类型  //success成功 duplicated重复
    save: () => void
    update: (id: string, name: string) => 'success' | 'duplicated' | 'not found'
    remove: (id: string) => boolean
}

interface Window {
    tagList: Tag[]
    create:(name:string)=>void
}
