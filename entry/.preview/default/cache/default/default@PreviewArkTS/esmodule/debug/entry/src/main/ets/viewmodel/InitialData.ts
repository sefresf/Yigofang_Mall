/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// 商品列表项类型
export interface GoodsListItemType {
    id: number;
    goodsName: ResourceStr;
    price: ResourceStr;
    goodsImg: Resource;
    advertisingLanguage: ResourceStr;
    evaluate: ResourceStr;
    category: number;
}
// 初始化标签栏数据
export function initTabBarData(): Resource[] {
    return [
        { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
    ];
}
// 初始化首页商品数据 (分类0)
export function initHomeGoodsData(): GoodsListItemType[] {
    const goodsList: GoodsListItemType[] = [];
    const goodsPerCategory = 20;
    const catId = 0;
    for (let i = 1; i <= goodsPerCategory; i++) {
        const imageIndex = ((catId * goodsPerCategory + i) - 1) % 4;
        const uniqueId = catId * 1000 + i; // 生成唯一ID
        goodsList.push({
            id: uniqueId,
            category: catId,
            goodsName: i % 2 === 0 ? { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" } : { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
            price: getPriceByIndex(uniqueId),
            goodsImg: getImageByIndex(imageIndex),
            advertisingLanguage: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
            evaluate: { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
        });
    }
    return goodsList;
}
// 初始化手机分类商品数据 (分类1)
export function initMobilePhoneGoodsData(): GoodsListItemType[] {
    const goodsList: GoodsListItemType[] = [];
    const goodsPerCategory = 20;
    const catId = 1;
    for (let i = 1; i <= goodsPerCategory; i++) {
        const imageIndex = ((catId * goodsPerCategory + i) - 1) % 4;
        const uniqueId = catId * 1000 + i; // 生成唯一ID
        goodsList.push({
            id: uniqueId,
            category: catId,
            goodsName: namePhone[imageIndex % 3],
            price: pricesPhone[imageIndex % 3],
            goodsImg: getImageByIndexPhone(imageIndex),
            advertisingLanguage: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
            evaluate: { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
        });
    }
    return goodsList;
}
// 初始化服装分类商品数据 (分类2)
export function initClothesGoodsData(): GoodsListItemType[] {
    const goodsList: GoodsListItemType[] = [];
    const goodsPerCategory = 20;
    const catId = 2;
    for (let i = 1; i <= goodsPerCategory; i++) {
        const imageIndex = ((catId * goodsPerCategory + i) - 1) % 4;
        const uniqueId = catId * 1000 + i; // 生成唯一ID
        goodsList.push({
            id: uniqueId,
            category: catId,
            goodsName: nameClothes[imageIndex % 4],
            price: pricesClothes[imageIndex % 4],
            goodsImg: getImageByIndexClothes(imageIndex),
            advertisingLanguage: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
            evaluate: { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
        });
    }
    return goodsList;
}
// 初始化穿戴分类商品数据 (分类3)
export function initWearGoodsData(): GoodsListItemType[] {
    const goodsList: GoodsListItemType[] = [];
    const goodsPerCategory = 20;
    const catId = 3;
    for (let i = 1; i <= goodsPerCategory; i++) {
        const imageIndex = ((catId * goodsPerCategory + i) - 1) % 4;
        const uniqueId = catId * 1000 + i; // 生成唯一ID
        goodsList.push({
            id: uniqueId,
            category: catId,
            goodsName: nameWear[imageIndex % 4],
            price: pricesWear[imageIndex % 4],
            goodsImg: getImageByIndexWear(imageIndex),
            advertisingLanguage: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
            evaluate: { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
        });
    }
    return goodsList;
}
// 初始化家居分类商品数据 (分类4)
export function initHomeFurnishingGoodsData(): GoodsListItemType[] {
    const goodsList: GoodsListItemType[] = [];
    const goodsPerCategory = 20;
    const catId = 4;
    for (let i = 1; i <= goodsPerCategory; i++) {
        const imageIndex = ((catId * goodsPerCategory + i) - 1) % 4;
        const uniqueId = catId * 1000 + i; // 生成唯一ID
        goodsList.push({
            id: uniqueId,
            category: catId,
            goodsName: nameHomeFurnishing[imageIndex % 4],
            price: pricesHomeFurnishing[imageIndex % 4],
            goodsImg: getImageByIndexHomeFurnishing(imageIndex),
            advertisingLanguage: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
            evaluate: { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
        });
    }
    return goodsList;
}
// 初始化所有商品数据（保留旧函数用于兼容性）
export function initGoodsData(): GoodsListItemType[] {
    return [
        ...initHomeGoodsData(),
        ...initMobilePhoneGoodsData(),
        ...initClothesGoodsData(),
        ...initWearGoodsData(),
        ...initHomeFurnishingGoodsData()
    ];
}
// 根据索引获取价格
function getPriceByIndex(index: number): ResourceStr {
    const prices = [
        { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
    ];
    return prices[index % 4];
}
// 根据索引获取图片
function getImageByIndex(index: number): Resource {
    const images = [
        { "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    ];
    return images[index % 4];
}
//手机
function getImageByIndexPhone(index: number): Resource {
    const imagesPhone = [
        { "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    ];
    return imagesPhone[index % 3];
}
const pricesPhone: ResourceStr[] = ['8999', '7199', '4159'];
const namePhone: ResourceStr[] = [
    "【预约赢新机】Xiaomi 17 Ultra手机新品新款上市小米徕卡联合研发小米官方旗舰店官网澎湃OS小米17ultra手机",
    "【12期免息】Apple/苹果 iPhone 17 Pro 手机",
    "【新品上市 24期免息】vivo X300新品蔡司2亿超级主摄天玑9500",
];
//服装
function getImageByIndexClothes(index: number): Resource {
    const imagesClothes = [
        { "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777259, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777255, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    ];
    return imagesClothes[index % 4];
}
const pricesClothes: ResourceStr[] = ['227', '199', '2920', '2300'];
const nameClothes: ResourceStr[] = [
    "A PUEE美式复古bomber立领飞行夹克棉服冬季加绒短款boxy工装外套",
    "绞花polo领新疆长绒棉合身正肩长袖针织毛衣t恤三色",
    "Ralph Lauren/拉夫劳伦男装 经典款斜纹布半高领外套夹克RL17874",
    "alexanderwang亚历山大王官方短袖halo t恤上衣黑色",
];
//穿戴
function getImageByIndexWear(index: number): Resource {
    const imagesWear = [
        { "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777256, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    ];
    return imagesWear[index % 4];
}
const pricesWear: ResourceStr[] = ['3600', '499', '348', '43700'];
const nameWear: ResourceStr[] = [
    "萧邦Chopard线上限定限量羊皮革手绳马年新年红绳本命年情侣礼物",
    "【圣诞礼物】施华洛世奇Symbolica星星项链吊坠配饰饰品",
    "[圣诞礼物]Pandora潘多拉守护系列日月勋章吊饰金银寓意日月古币",
    "Tiffany 蒂芙尼 Tiffany T 系列 镶钻线圈手镯",
];
//家居
function getImageByIndexHomeFurnishing(index: number): Resource {
    const imagesHomeFurnishing = [
        { "id": 16777261, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777260, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
        { "id": 16777263, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    ];
    return imagesHomeFurnishing[index % 4];
}
const pricesHomeFurnishing: ResourceStr[] = ['2680', '1789', '352', '461'];
const nameHomeFurnishing: ResourceStr[] = [
    "Le Bambole客厅卧室单人侘寂风复古北欧日式法式奶油风红色沙发",
    "设计师梯田飘窗沙发高端定制小户型定制卡座地台一体卧室飘窗台",
    "SUNDAYHOME升级版米奇小矮凳迪士尼正版摆件家居饰品换鞋凳小凳子",
    "VISIONA【琉璃白盏】A类全棉床上四件套纯棉提花床单100%棉",
];
