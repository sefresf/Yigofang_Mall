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

import { PAGE_SIZE, FEATURED_SIZE } from '../common/CommonConstants';

// 商品列表项类型
export interface GoodsListItemType {
  id: number;
  goodsName: ResourceStr;
  price: ResourceStr;
  goodsImg: Resource;
  advertisingLanguage: ResourceStr;
  evaluate: ResourceStr;
  category: string; // 商品分类
}

// 分类常量
interface GeneratedObjectLiteralInterface_1 {
  SELECTED: string;
  MOBILE_PHONE: string;
  CLOTHES: string;
  WEAR: string;
  HOME_FURNISHING: string;
}

export const CATEGORIES: GeneratedObjectLiteralInterface_1 = {
  SELECTED: 'selected',
  MOBILE_PHONE: 'mobile_phone',
  CLOTHES: 'clothes',
  WEAR: 'wear',
  HOME_FURNISHING: 'home_furnishing'
};

// 初始化标签栏数据
export function initTabBarData(): Resource[] {
  return [
    $r('app.string.mobile_phone'),
    $r('app.string.clothes'),
    $r('app.string.wear'),
    $r('app.string.home_furnishing')
  ];
}

// 获取所有分类的商品数据
function getAllGoods(): GoodsListItemType[] {
  const goodsList: GoodsListItemType[] = [];

  // 每个分类生成20个商品
  const categories = [CATEGORIES.MOBILE_PHONE, CATEGORIES.CLOTHES, CATEGORIES.WEAR, CATEGORIES.HOME_FURNISHING];
  categories.forEach(category => {
    for (let i = 1; i <= 20; i++) {
      const id = goodsList.length + 1;
      const imageIndex = (id % 4) + 1;
      goodsList.push({
        id: id,
        goodsName: id % 2 === 0 ? $r('app.string.goodsName') : $r('app.string.another_goodsName'),
        price: getPriceByIndex(id),
        goodsImg: getImageByIndex(imageIndex),
        advertisingLanguage: $r('app.string.advertising_language'),
        evaluate: $r('app.string.evaluate'),
        category: category
      });
    }
  });

  return goodsList;
}

// 获取指定分类的商品数据
function getGoodsByCategory(category: string): GoodsListItemType[] {
  const allGoods = getAllGoods();
  if (category === CATEGORIES.SELECTED) {
    // 精选页：从所有商品中随机挑选
    return shuffleArray(allGoods).slice(0, FEATURED_SIZE);
  } else {
    // 其他分类：筛选对应分类的商品
    const filtered = allGoods.filter(item => item.category === category);
    // 如果数量不够，循环展示
    if (filtered.length < PAGE_SIZE) {
      return fillArrayWithLoop(filtered, PAGE_SIZE);
    }
    return filtered.slice(0, PAGE_SIZE);
  }
}

// 随机打乱数组
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

// 循环填充数组，直到达到指定长度
function fillArrayWithLoop<T>(array: T[], length: number): T[] {
  if (array.length === 0) {
    return array;
  }
  const result: T[] = [];
  while (result.length < length) {
    for (let i = 0; i < array.length && result.length < length; i++) {
      result.push(array[i]);
    }
  }
  return result;
}

// 获取刷新后的商品数据（随机排序）
export function getRefreshedGoodsByCategory(category: string): GoodsListItemType[] {
  let goods = getGoodsByCategory(category);
  // 随机打乱
  goods = shuffleArray(goods);
  // 如果数量不够，则循环填充
  if (goods.length < PAGE_SIZE) {
    goods = fillArrayWithLoop(goods, PAGE_SIZE);
  }
  return goods.slice(0, PAGE_SIZE);
}

// 根据索引获取价格
function getPriceByIndex(index: number): ResourceStr {
  const prices = [
    $r('app.string.price_199'),
    $r('app.string.price_265'),
    $r('app.string.price_810'),
    $r('app.string.price_999')
  ];
  return prices[index % 4];
}

// 根据索引获取图片
// 根据分类获取图片资源
function getImageByCategoryAndIndex(category: string, index: number): Resource {
  const imageIndex = (index % 4) + 1;

  switch (category) {
    case CATEGORIES.SELECTED:
      return getSelectedImage(imageIndex);
    case CATEGORIES.MOBILE_PHONE:
      return getPhoneImage(imageIndex);
    case CATEGORIES.CLOTHES:
      return getClothesImage(imageIndex);
    case CATEGORIES.WEAR:
      return getWearImage(imageIndex);
    case CATEGORIES.HOME_FURNISHING:
      return getHomeImage(imageIndex);
    default:
      return $r('app.media.goodsImg');
  }
}

// 定义每个分类的图片获取函数
function getSelectedImage(index: number): Resource {
  switch (index) {
    case 1: return $r('app.media.selected.goodsImg');
    case 2: return $r('app.media.selected.goodsImg_2');
    case 3: return $r('app.media.selected.goodsImg_3');
    case 4: return $r('app.media.selected.goodsImg_4');
    default: return $r('app.media.selected.goodsImg');
  }
}

function getPhoneImage(index: number): Resource {
  switch (index) {
    case 1: return $r('app.media.mobile_phone.phone1');
    case 2: return $r('app.media.mobile_phone.phone2');
    case 3: return $r('app.media.mobile_phone.phone3');
    case 4: return $r('app.media.mobile_phone.phone4');
    default: return $r('app.media.mobile_phone.phone1');
  }
}

// ... 类似地定义其他分类的函数

// 初始化商品数据
export function initGoodsData(): GoodsListItemType[] {
  return getGoodsByCategory(CATEGORIES.SELECTED);
}