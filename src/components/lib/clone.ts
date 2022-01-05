function clone<X>(data: X):X {
    // 深拷贝，避免内存地址一致的bug
    return JSON.parse(JSON.stringify(data));
}
export default clone;