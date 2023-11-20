export const requestApi = async <TData = any>(data: TData, time = 1000) => {
    const sleep = (t: number) => new Promise(res => setTimeout(res, t));
    await sleep(time);
    return data;
};
