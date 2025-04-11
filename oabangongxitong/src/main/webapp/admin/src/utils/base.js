const base = {
    get() {
        return {
            url : "http://localhost:8080/oabangongxitong/",
            name: "oabangongxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/oabangongxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "OA办公系统"
        } 
    }
}
export default base
