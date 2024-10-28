const base = {
    get() {
        return {
            url : "http://localhost:8080/nongyeshebeizulin/",
            name: "nongyeshebeizulin",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nongyeshebeizulin/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农业设备租赁系统"
        } 
    }
}
export default base
