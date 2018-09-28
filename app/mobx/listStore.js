import {observable,action} from 'mobx'
import FetchUtil from "../service/rpc";
let index = 0

class ObservableListStore {
    @observable
    name='';
    @observable
    genderList = [];
    @observable
    gender='';
    @observable
    addressList=[];
    @observable
    address='';
    @observable
    workList=[];
    @observable
    work='';
    @observable
    phone='';
    @observable
    upWd='';
    @observable
    imagePath='';
    @action
    getList=()=>{
        this.genderList=['男','女','保密'];
        this.addressList=['江苏省盐城市','江苏省苏州市','江苏无锡市','江苏省南京市'];
        this.workList=['1年以内','2年','3年','4年','5年','6年','7年以上'];
    }
    @action
    selectItem= (item,type)=> {
        if(type==='性别'){
            this.gender=item;
        }else if(type==='家庭住址'){
            this.address=item;
        }else if(type==='工作经验'){
            this.work=item;
        }
    }
    @action
    updateName=(name)=>{
        this.name=name;
    }
    @action
    updatePhone=(phone)=>{
        this.phone=phone;
    }
    @action
    updateWd=(upwd)=>{
        this.upWd=upwd;
    }
    @action
    getData=()=>{
        let data={"currentPage": "1"};
        FetchUtil.post('http://49.75.36.235:9001/api/management/role/list',data).then(res=>{
            console.log(res);
            this.name=res.data.result[0].roleName;
        })
    }
}


const observableListStore = new ObservableListStore()
export default observableListStore