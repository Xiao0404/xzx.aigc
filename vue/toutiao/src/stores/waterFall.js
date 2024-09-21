import { defineStore } from "pinia";
export const useWaterfallStore = defineStore('waterfall', {
    state: () => ({
        cards: []
    }),
    actions: {
        setCards(cards) {
            this.cards = cards;
        }
    }
});
const initialCards = [
    { id: 1, title: '29.9', description: '加厚棉麻被子收纳袋大号装被子衣服的袋子搬家衣物整理打包行李袋', img: 'https://gw.alicdn.com/imgextra/i3/2564407522/O1CN01JYRbDy25R88JeMvEO_!!2564407522.jpg_Q75.jpg_.webp', width: 300, height: 400 },
    { id: 2, title: '9.9', description: '四川汉源青花椒面100g麻椒粉特麻家用花椒粉正宗特产调料', img: 'https://gw.alicdn.com/imgextra/i4/2836885096/O1CN014M8AAY1nW13QyHhFS_!!2836885096.jpg_Q75.jpg_.webp', width: 300, height: 500 },
    { id: 3, title: '450', description: '台湾气动拉铆螺母枪头铆钉枪全自动拉姆母枪气动拉铆拉帽拉卯工具', img: 'https://gw.alicdn.com/imgextra/i3/1995292833/O1CN01Cgla7X1WnYqI1F3YA_!!1995292833.jpg_Q75.jpg_.webp', width: 300, height: 600 },
    { id: 4, title: '250', description: '舒尔美防静脉曲张医用弹力袜一级压力医疗治疗型孕妇血栓夏季薄款', img: 'https://gw.alicdn.com/imgextra/O1CN01G6SPke1smZixTyYp7_!!331825809-0-picasso.jpg_Q75.jpg_.webp', width: 300, height: 300 },
    { id: 5, title: '168', description: 'jiwuus 8月7日新款秋新中式无领盘扣牛仔外套男女国风长袖', img: 'https://gw.alicdn.com/imgextra/i2/1135352192/O1CN01dLsbA21S3z9fuhACK_!!1135352192.jpg_Q75.jpg_.webp', width: 300, height: 350 },
    { id: 6, title: '1979', description: 'MOK(摩刻)-K10磁阻静音划船机家用智能折叠划船器健身器材', img: 'https://gw.alicdn.com/imgextra/i3/2209500795592/O1CN011ifgbi1rBBmIuwkt3_!!0-item_pic.jpg_Q75.jpg_.webp', width: 300, height: 450 },
    { id: 7, title: '5.8', description: '有时间就要学习丁真面具知识学爆搞笑挂画励志书法宿舍摆台装饰画', img: 'https://gw.alicdn.com/imgextra/i1/1822542891/O1CN01M9nhkq1XE7xQxKEE4_!!1822542891.jpg_Q75.jpg_.webp', width: 300, height: 500 },
    { id: 8, title: '6599', description: '【新品】九号电动M95c+电动摩托车代步智能超长续航电摩门店自提', img: 'https://gw.alicdn.com/imgextra/i2/2207026946442/O1CN01mLQSlV1xSUQz8Q6d7_!!0-item_pic.jpg_Q75.jpg_.webp', width: 300, height: 550 },
    { id: 9, title: '4700', description: '【全款掉落】BABY樱茶天国少女sax op限定2.0/3.0日牌代购lolita', img: 'https://gw.alicdn.com/imgextra/i2/352915793/O1CN010ALqg41sfFHVfGLWU_!!352915793.jpg_Q75.jpg_.webp', width: 300, height: 600 },
    { id: 10, title: '1949', description: '【直播间加赠背包】vivo iQOO Z9 Turbo新款骁龙学生游戏AI护眼手机iQOO官方旗舰店官网正品新机iQOO', img: 'https://gw.alicdn.com/imgextra/i2/883737303/O1CN01VHz9S323opRnebMXn_!!2-item_pic.png_.webp', width: 300, height: 650 },
];
const waterfallStore = useWaterfallStore();
waterfallStore.setCards(initialCards);
