# Mac卸载node

## 1. 卸载从`node官网`下载`pkg`安装的node

```bash
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```



## 2. 卸载用`Homebrew`安装的node

```bash
brew uninstall node
```



## 3. 如果你感觉删的不够干净，可以再细分删除

### 3.1 删除`npm`相关内容

```bash
sudo npm uninstall npm -g
sudo rm -rf ~/.npm
```



### 3.2 删除`/urs/local/lib`下node相关内容

```bash
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.* 
cd /usr/local/lib
sudo rm -rf node*
sudo rm -rf /usr/local/lib/dtrace/node.d
```



### 3.3 删除`/usr/local/include`下`node`和`node_modules`目录

```bash
cd /usr/local/include
sudo rm -rf node*
```



### 3.4 删除`/usr/local/bin`下node执行文件

```bash
cd /usr/local/bin
sudo rm /usr/local/bin/npm
sudo rm /usr/local/bin/node
ls -las 仔细查看，全局安装的npm包一般会在这个目录下创建软连接，发现就删除
```



### 3.5 进入个人主文件夹

检查各种`local`、`lib`、`include`文件夹，删除名字含有`node`和`node_modules`的文件和文件夹。



### 3.6 其他删除工作

```bash
sudo rm -rf /usr/local/share/man/man1/node.1
```



## 验证删除结果

```bash
node  # command not found
npm  # command not found
```



























