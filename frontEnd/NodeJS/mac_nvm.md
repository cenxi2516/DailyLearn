## 1. 安装nvm

### 1.1 github下载安装

> **nvm github** 地址：https://github.com/nvm-sh/nvm

1. 下载压缩包。
2. 解压后将整个文件夹命名为`.nvm`。（可以通过`Shift+command+.`查看隐藏文件）
3. 放入根目录(`#HOME`)下。



## 2. 配置nvm

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# 修改镜像
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node 
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
```



## 3. nvm常用命令

```bash
# 查看当前安装和使用的 node 版本
nvm list

# 安装某个 node 版本
nvm install 版本号

# 切换 node 版本
nvm use 版本号

# 设置默认版本
nvm alias default v12.22.12
```

