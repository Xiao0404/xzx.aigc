# react + ts

- 介绍项目的ts 难点
  - api接口的ts 类型约束场景
    - 接口模块化，所有的接口都放在/api 目录下，而不是散在组件中，方便管理
      baseURL 设置  dev/production  不一样
    - 每个模块有独立的接口文件，适合大型项目
    - 每个接口返回值都是Promise，泛型约束 resolve 后的类型
      github members 接口，表示项目的合作成员
      以getMemberCollection 获取github 成员接口数据为例子
      接口函数它的返回值类型为Promise<MemberEntity[]>
      实例化promise 并返回 ，并且将MemberEntity[] 在泛型中传递
      axios.get 请求的 response 类型为 AxiosResponse<any[]>, axios 的自带类型
      通过mapMemberListApiToModel 中转函数返回 MemberEntity[]