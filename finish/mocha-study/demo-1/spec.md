# TOC
   - [加法函数的测试](#)
   - [乘法函数的测试](#)
<a name=""></a>
 
<a name=""></a>
# 加法函数的测试
1 加 1 应该等于 2.

```js
// 下面是断言
// 所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。上面这句断言的意思是，调用add(1, 1)，结果应该等于2。
// 所有的测试用例（it块）都应该含有一句或多句的断言。它是编写测试用例的关键。断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库。
// 基本上，expect断言的写法都是一样的。头部是expect方法，尾部是断言方法，比如equal、a/an、ok、match等。两者之间使用to或to.be连接。
// 如果expect断言不成立，就会抛出一个错误。事实上，只要不抛出错误，测试用例就算通过。
expect(add(1, 1)).to.be.equal(2);
```

<a name=""></a>
# 乘法函数的测试
1 乘 1 应该等于 1.

```js
expect(multiply(1, 1)).to.be.equal(1);
```

