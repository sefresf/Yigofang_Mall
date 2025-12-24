import { initHomeGoodsData, initMobilePhoneGoodsData, initClothesGoodsData, initWearGoodsData, initHomeFurnishingGoodsData } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import type { GoodsListItemType } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import { MAX_DATA_LENGTH } from "@bundle:com.example.list_harmony/entry/ets/common/CommonConstants";
/**
 * List数据源类，用于LazyForEach懒加载
 */
export class ListDataSource implements IDataSource {
    private listeners: DataChangeListener[] = [];
    private dataArray: GoodsListItemType[] = [];
    private categoryId: number;
    private currentIndex: number;
    constructor(categoryId: number = 1) {
        this.categoryId = categoryId;
        // 根据分类调用对应的初始化函数
        switch (this.categoryId) {
            case 0:
                this.dataArray = initHomeGoodsData();
                break;
            case 1:
                this.dataArray = initMobilePhoneGoodsData();
                break;
            case 2:
                this.dataArray = initClothesGoodsData();
                break;
            case 3:
                this.dataArray = initWearGoodsData();
                break;
            case 4:
                this.dataArray = initHomeFurnishingGoodsData();
                break;
            default:
                this.dataArray = initMobilePhoneGoodsData();
                break;
        }
        this.currentIndex = this.dataArray.length;
    }
    totalCount(): number {
        return MAX_DATA_LENGTH;
    }
    getData(index: number): GoodsListItemType {
        // 如果索引超出当前数据范围，预加载更多数据
        if (index >= this.dataArray.length - 6 && this.dataArray.length < MAX_DATA_LENGTH) {
            this.pushData();
        }
        // 如果索引有效，返回数据，否则返回最后一个数据
        return index < this.dataArray.length ? this.dataArray[index] : this.dataArray[this.dataArray.length - 1];
    }
    registerDataChangeListener(listener: DataChangeListener): void {
        this.listeners.push(listener);
    }
    unregisterDataChangeListener(listener: DataChangeListener): void {
        const index = this.listeners.indexOf(listener);
        if (index >= 0) {
            this.listeners.splice(index, 1);
        }
    }
    /**
     * 推送更多数据（加载更多）
     */
    pushData(): void {
        // 模拟网络延迟
        setTimeout(() => {
            const newData: GoodsListItemType[] = [];
            const startId = this.currentIndex + 1;
            const categories = 4;
            // 每次加载5个新商品
            for (let i = 0; i < 5 && this.dataArray.length < MAX_DATA_LENGTH; i++) {
                const uniqueId = this.categoryId * 1000 + this.currentIndex + i + 1; // 生成唯一ID
                const imageIndex = (uniqueId - 1) % 4;
                const categoryId = this.categoryId;
                newData.push({
                    id: uniqueId,
                    goodsName: (this.currentIndex + i) % 2 === 0 ? { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" } : { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
                    price: getPriceByIndex(uniqueId),
                    goodsImg: getImageByIndex(imageIndex),
                    advertisingLanguage: { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
                    evaluate: { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
                    category: categoryId
                });
            }
            if (newData.length > 0) {
                const startIndex = this.dataArray.length;
                this.dataArray.push(...newData);
                this.currentIndex += newData.length;
                // 通知数据变化
                this.listeners.forEach(listener => {
                    listener.onDataAdd?.(startIndex);
                    listener.onDataReloaded?.();
                });
            }
        }, 500);
    }
    /**
     * 刷新数据
     */
    refreshData(newData: GoodsListItemType[]): void {
        this.dataArray = newData;
        // 模拟网络延迟
        setTimeout(() => {
            // 根据分类调用对应的初始化函数
            switch (this.categoryId) {
                case 0:
                    this.dataArray = initHomeGoodsData();
                    break;
                case 1:
                    this.dataArray = initMobilePhoneGoodsData();
                    break;
                case 2:
                    this.dataArray = initClothesGoodsData();
                    break;
                case 3:
                    this.dataArray = initWearGoodsData();
                    break;
                case 4:
                    this.dataArray = initHomeFurnishingGoodsData();
                    break;
                default:
                    this.dataArray = initMobilePhoneGoodsData();
                    break;
            }
            this.currentIndex = this.dataArray.length;
            // 通知数据刷新
            this.listeners.forEach(listener => {
                listener.onDataReloaded?.();
            });
        }, 1000);
    }
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
        { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
    ];
    return images[index % 4];
}
