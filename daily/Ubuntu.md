# Ubuntu

## Ubuntu crontab 自动任务配置

> 对于可能涉及的脚本文件、代码源文件，其中所有需要用到的文件路径请使用 **绝对路径** ！！！

```bash
# 对当前用户设定crontab执行文件，格式: [* * * * * command]
crontab -e
# 查看当前用户设定的任务
crontab -l
# 以root权限在 /etc/crontab 下修改，格式: * * * * * 用户名 command
vim /etc/crontab
```

