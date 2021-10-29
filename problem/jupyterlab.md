# Jupyter Lab

## Extension 报 Error 500 的问题

应该是https的SSL网络问题，`与VPN有关?` 通过以下设置即可：

> A quick solution from the internet search was `npm config set strict-ssl false`, luckily it worked. But as a part of my work environment, I am restricted to set the strict-ssl flag to false.
>
> Later I found a safe and working solution,
>
> ```bash
> npm config set registry http://registry.npmjs.org/  # 最终解决方案
> ```

参考: [node.js - npm ERR! code UNABLE_TO_GET_ISSUER_CERT_LOCALLY - Stack Overflow](https://stackoverflow.com/questions/45884752/npm-err-code-unable-to-get-issuer-cert-locally/45884819#45884819)

#### 第一次安装此软件

```bash
# Python pip
pip install jupyterlab
# Anconda3
conda install -c conda-forge jupyterlab
```

#### 更新jupyterlab

```bash
# Python pip
pip install --upgrade jupyterlab
# Anconda3
conda update jupyterlab
```

