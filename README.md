# 中国电信物联网 CMP 平台接口加密库

## 用法

```typescript
import { strEnc, naturalOrdering } from 'ctcc-cmp-des';

const userId = 'test'; // 用户名
const password = 'test'; // 密码
const method = 'getSIMAmount'; // 接口名-企业用户数查询接口
const arr: string[] = []; // 加密数组，数组所需参数根据对应的接口文档

arr.push(userId);
arr.push(password);
arr.push(method);

// key1,key2,key2为电信提供的9位长接口密钥平均分为三段所形成
// key1为密钥前三位，key2为密钥中间三位，key3位密钥最后三位
const key1 = 'abc';
const key2 = 'def';
const key3 = 'ghi';
const passWord = strEnc(password, key1, key2, key3); // 密码加密

const arrOrder = naturalOrdering(arr);
const sign = strEnc(arrOrder, key1, key2, key3); // 生成sign加密值
```
