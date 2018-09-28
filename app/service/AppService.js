import FetchUtil from "./rpc"
let data={};
FetchUtil.get('http://49.75.36.235:9001/api/management/org/list',data).then(data=>{
    console.log(data);
})

