# Vim Intro

> Vim是Vi的增强版本，在不正式的情况下，两者是一回事。
>
> Vim是所有UNIX和Linux系统下的标准软件。

### 两种模式/编辑和保存

- `vim file` : 对文件用vim编辑器进行编辑。如果文件不存在，Vim将自动创建文件。
  - `vim` : 不带参数的vim自动打开编辑器。

- vim分为 插入 和 命令 两种模式，启动时自动处于命令模式。
  - 按 `I` 键进入**插入模式**，此模式下可以输入字符;
  - 按 `Esc` 键进入**命令模式**，此模式下执行除了字符操作以外的所有操作，包括保存、搜索、移动光标等。

- 命令模式下，输入 `:` 在底部打开一个命令行，此时光标闪烁输入，等待用户输入。

- `H、J、K、L` : 分别代表向左、下、上、右移动。当然使用方向键也是可以的。

- `O` : 在当前行下插入一行空白行。

- `w` : 保存，

- `q` : 退出，

- `wq` : 保存且退出，

- `q!` : 强制退出。

### 搜索字符串

- `/string` : 用于搜索一个字符串，输入 `/` 后，vim底部也会出现一个命令行。

- vim的搜索可以循环进行，`/` 命令向前(文件尾)查找，`?` 命令向后(向文件头)查找。

- 对大小写是否敏感：
  - `:set ignorecase` 命令vim忽略大小写;
  - `:set noignorecase` 命令vim重新开启大小写敏感。

### 替换字符串

- `:[range]s/pattern/string/[c,e,g,i]` : 替换命令的完整语法，将匹配pattern(正则表达式)的字符串替换为string。
  - `range` 规定替换范围，`1,4`表示1到4行，`1,$` 表示1行到最后一行(全文)，`%`也表示全文。
  - 最后方括号内的字符是可选选项，选项含义如下：

    | 标志 |                         含义                          |
    | :--: | :---------------------------------------------------: |
    |  c   |                    每次替换前询问                     |
    |  e   |                    不显示错误信息                     |
    |  g   | 替换一行中的所有匹配项（通常需要使用,否则替换第一项） |
    |  i   |                     不区分大小写                      |

- `*` 清除文本文件中的 `^M` 字符：由于来自windows环境的源代码对换行符的表述和Linux不一致，因此文末常出现 `^M` 符号——虽然对程序编译器和解释器没有影响，但在shell编程时会产生问题，此时用 `%s/^M$//g` 删除行末的 `^M` 字符。

### 针对程序员的配置

- 一些常用的配置命令：
  - `:syntax on`打开语法高亮，vim会根据文件扩展名决定哪些为关键字。
  - `:set autoindent`设置自动缩进;
  - `:set shiftwidth=4`设置自动缩进的空白长度;
  - `:set tabstop=4`将tab键缩进设置为4个空格。

- 为避免每次启动vim都要手动输入命令，可以将命令写入vim的配置文件中(文件中不要包含 `:`)，vim的配置文件为 `/etc/vim/vimrc` ( `/etc` 中的文件对系统中所有用户生效)，推荐用户可以新建一个 `~/.vimrc` 文件在其中写入配置信息，只对当前用户生效。
  - 通常用户个性化的设置文件都是隐藏文件 ( `.` 开头的文件 )，且保存在用户主目录下。

### Vim的常用命令总结

- 模式切换：
  - `a` : 在光标后插入;
  - `i` : 在光标所在位置插入;
  - `o` : 在光标所在位置下一行插入;
  - `Esc` : 进入命令模式;
  - `:` : 进入行命令模式。

- 光标移动(名列前加上数字，可以重复多次移动，如 `5w` )：
  - `h`/`l`/`j`/`k` : 光标向左/右/上/下移动;
  - `^`/`$` : 移动光标到行首/尾;
  - `gg`/`shift+g` : 移动光标到文件首/尾;
  - `w`/`b` : 移动到下一个/上一个单词;
  - `ctrl+f`/`ctrl+b` : 向前(文件尾)/后(文件头)翻动一页。

- 删除、复制和粘贴：
  - `x` : 删除光标所在位置的字符;
  - `dd` : 删除光标所在行;
  - `shift+d` : 删除光标所在位置到行尾的所有字符;
  - `d` : 和移动命令配合使用的删除命令，如 `dw` 表示删除光标所在位置到下一个单词之间的所有字符;
  - `yy` : 复制光标所在行;
  - `y` : 和移动命令配合使用的复制命令;
  - `shift+p` : 在光标所在位置粘贴最近复制/删除的内容。

- 撤销和重做：
  - `u` : 撤销一次操作;
  - `ctrl+r` : 重做被撤销的操作。

- 搜索和替换：
  - `:/string` : 向前搜索字符串string;
  - `:?string` : 向后搜索字符串string;
  - `:s/pattern/string` : 将pattern代表的字符串替换成string。

- 保存和退出：
  - `:w` : 保存文件;
  - `:w filename` : 另存为filename;
  - `:q` : 退出vim;
  - `:!q` : 强制退出，放弃保存修改。