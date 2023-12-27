---
title: vue3相关
author: ajn404
pubDatetime: 2023-09-18T08:01:33Z
postSlug: vue3
featured: false
draft: false
tags:
  - vue3
description: "阅读 vue3 涉及与 vue3 的实现"
---

## 阅读 vue3 涉及与 vue3 的实现

## 目录

## 非原始值的响应式方案

### proxy & reflect

- proxy:代理对象

  > 语法 `const p = new Proxy(target, handler)`

- reflect:提供了访问一个对象的默认行为
  > 语法 `const r = Reflect.get(target, key)`

```js
const a = {};
const b = new Proxy(a, {
  get(target, key) {
    console.log("get", key);
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log("set", key, value);
    return Reflect.set(target, key, value);
  },
  deleteProperty(target, key) {
    console.log("delete", key);
    return Reflect.deleteProperty(target, key);
  },
});
```

#### reflect.get(target, propertyKey[, receiver])

第三个参数----如果 target 对象中指定了 getter，receiver 则为 getter 调用时的 this 值。

```js
const obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1, ["two", "another one"]); //one
```

```js
const obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1, ["two", "another one"]); // one
```

```js
const a = ["zero", "one"];
Object.defineProperty(a, "1", {
  get: function () {
    return this.at(0);
  },
});
Reflect.get(a, 1, ["one", "one"]); //one
a; // ["zero","zero"]
```

#### [js 中的访问器 getter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/get)

#### 第四节实现的响应式数据代码

```js
const obj = {foo:1}

const p = new Proxy(obj, {
    get(target, key) {
        track(target, key)
        return target[key]
        }

    set(target, key, value){
        target[key] = value;
        trigger(target, key)
    }
    ...
})
```

如果我们的响应式数据 obj 是这样子的

```js
const obj = {
  foo: 1,
  get bar() {
    return this.foo + 1;
  },
};
```

当我们在副作用函数:

```js
effect(() => {
  console.log(p.bar);
});
```

尝试修改 p.foo 的值，p.bar 的值也会跟着变化,但副作用函数并不会执行。

```js
p.foo = 2;
//p.bar===3
```

因为代理过程的 get 中的 target 实际上指向的是 obj

```js
const p = new Proxy(obj, {
    get(target, key) {
        //target===obj
        track(target, key)
        return target[key]
        }
    ...
})
```

解决办法

```js
const p = new Proxy(obj, {
    get(target, key,receiver) {
        //target===obj
        track(target, key)
        return Reflect.get(target,key,receiver)
        }
    ...
})
```

p 访问 bar 时，这里的 receiver 指向 p，返回 `Reflect.get(target,key,receiver)`时触发 get 中的 this 也就指向 p

#### js 中的对象与 proxy 工作原理

...
