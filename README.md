# summary-technology-front
前端深度技能及面试点总结

## TODO 性能优化如何查看，Proformance、Lighthouse


# 获取一段 DOM 节点中标签个数最多的标签

```js
let root = document.getElementsByTagName('html')[0];
let tags = [];
function build(root){
    let childs = root.children;
    for(let i = 0;i<childs.length;i++){
        let flag = false;
        for(let j = 0;j<tags.length;j++){
            if(childs[i].tagName === tags[j].tagName){
                tags[j].num++;
                flag = true;
                break;
            }
        }
        if(!flag){
            let temp = {};
            temp.tagName = childs[i].tagName;
            temp.num = 1;
            tags.push(temp);
        }
        build(childs[i]);
    }
}

build(root);
let max = 0;
let index = -1;
tags.forEach((v,i,tags)=>{
    if(v.num > max){
        max = v.num;
        index = i;
    }
});

console.log("标签出现最多的是：" + tags[index].tagName + "\n出现的次数为：" + tags[index].num);
```
