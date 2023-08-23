> Linux — 一个自由的unix-386内核
> 原文作者: Linus Torvalds ([torvalds@kruuna.helsinki.fifi](mailto:torvalds@kruuna.helsinki.fifi))
> 
> 译者：Zhou Hang aka zzk ([1174714790@qq.com](mailto:1174714790@qq.com))

> zzk:
> 当 Linux 于 1991 年横空出世，通过本文能体会到这个操作系统的独特之处，同时也可以与现在的系统进行比较，你会惊讶于一些看似“高级”的特性从一开始就出现了。同时 Linus 有着强烈的个人风格，他用简洁明了又充满骄傲的语言去介绍自己的代码，像在客人面前介绍孩子一样。该文章非常著名，网络上早有翻译，再译一遍不过是强迫自己精读而已。
  
## 1. 介绍

### 1.1 Linux是什么

Linux是一个为386-AT计算机开发的免费的类Unix内核，开源全部代码。是为黑客/计算机科学专业学生折腾而开发。该系统大部分用C语言，部分代码用gnu格式的汇编语言书写，boot使用英特尔086格式汇编语言书写。采用ANSI C以及少量GNU的加强功能（__asm__和inline）。
  
市面上确实存在很多为386计算机编写的操作系统，但他们绝大部分很贵且闭源。如果你将计算机作为生产工具，这些操作系统很适合，但如果你好奇系统底层的工作原理，它们屁用没有。
  
确实存在一些开源系统。例如Minix，这是[Andrew S. Tanenbaum](https://zh.wikipedia.org/wiki/安德鲁·斯图尔特·塔能鲍姆)写的一个主要用于学习的工具，也被许多大学用做教学工具；BSD-386系统，虽然开源，但有着非常严格的版权限制以及昂贵的价格（我觉得入门价格是995美元（zzk：5273元））；GNU/HURD内核，便宜且开源，但是对初学者来说过于庞大而难以理解和学习。
  
Linux很小，不复杂，很容易理解，这点很像Minix。实际上Linux就是在Minix环境下编写的，所以它们会有一些相似点。任何Minix Hacker在使用Linux的时候会感觉回家一样亲切。然而我没有在Linux上使用Minix的任何一行代码，所以Minix的版权并不能覆盖到这个新系统上。Linux是***完全自由***的软件，有很松的版权限制。Thus there is no need for megabytes of diffffs like under Minix.  
  
### 1.2 Linux版权问题  
对于Linux的传播，我还是有几点限制：  
  
1. 你可以自由的**拷贝或传播**源代码和可执行程序，只要：
	- 有完整的源码。这样如果你修改了源码，旧的程序不会单独传播。
	- 不能从发行版中谋取利益，就算仅仅是“处理费用”也不行。（zzk：什么叫handling costs）
	- 保证该版权信息不变
2. 你可以任意修改源码，但如果你要发行该系统的任意部分（或者仅仅是可执行程序），都必须被包含新增的代码。
3. You may make small excepts from the code without including copyrights. This is up to you, but a reference to me or the code would be appreciated.（from Catherine: 你可以在不写明版权的情况下，截取部分代码。但是呢，这取决于你，如果写明这个是参考自我或者是来源（我的）源代码的，我会很感谢。)

这些限制已经足够松散了，不会对任何想要使用或扩展系统的人造成困扰。如果你有朋友真的不想要源码而只想要可执行程序，当然可以给他，不用担心我会告你。但是仅此而已，只准在朋友之间传播。
  
### 1.3 Linux运行的硬软件需求
Linux是在一台运行Minix的386-AT计算机上编写的，鉴于这是一个真正的操作系统，需要直接与硬件打交道，你需要一个与386-AT非常类似的环境才能正确运行Linux。  
- 386-AT（PS/2与其差别太大，Linux不能在上面运行）
- VGA或EGA显示屏
- 标准AT硬盘接口，IDE接口也能行（实际上我就是使用的IDE接口的硬盘）
- 普通实模式BIOS。有些机器似乎会使用虚拟86模式运行boot程序，在这些硬件上Linux无法正确启动
  
Linux源代码需要Minix-386的环境才能编译。你需要在Minix系统下对Linux作文件系统初始化以及编译OS执行程序，然后Linux才成为一个独立的系统。建议你在Minix上对文件系统进行检查（fsck（zzk：这是一个命令用于检测和修复文件系统）），如果你修改了源码，也应在Minix上重新编译。
  
### 1.4 获取Linux
  
Linux现在可以从一个匿名ftp服务器‘[nic.funet.fi](http://www.nic.funet.fi/)’上获取，存放在‘/pub/OS/Linux’目录下（zzk：至今2022.8.9依然如此）。该目录包含了操作系统完整的源码，以及一些已经编译好的二进制文件，这样你就可以直接使用Linux了。 
  
**NOTE:可执行程序大部分都是GNU软件**，它们有比**Linux**更加“严格”的“版权”限制（**[GNU copyleft著佐权](https://www.gnu.org/licenses/copyleft.zh-cn.html)**）。（**zzk**:没有打错字，一句话说就是：“商业软件开发人员通过版权剥夺了用户的自由，我们使用版权来给予他它自由。这就是为什么我们把“**Copyright**”称为“**Copyleft**”）因此你不可以不带源码而自己重新发行这些**GNU**软件—它们存放在`/pub/gnu`目录下。
  
Linux目录下文件的简单说明（zzk：经过多年的发展这个目录已经发生很大的变化，但是看一看最初的Linux发行包会看到很多熟悉的身影）：
- `Linux-0.03.tar.Z` — 操作系统完整的源码，是一个16bit的tar压缩包。  
- `Linux.tex` — 本页面的Latex源码（zzk：本文使用LaTeX编写，转化为HTML后发布在[LINUX–a free unix-386 kernel](http://www.oldlinux.org/Linus/index.html)上）
- `bash.Z` — 用于在Linux下使用bash命令行的二进制文件。应该放在Linux文件系统中/bin/sh位置（详情见installation）。
- `update.Z` — 更新程序，应该放在/bin/update
- `gccbin.tar.Z` — GNU cc程序需要一个正确运行的编译器。这个压缩包包括了编译器，加载器，汇编器以及一些支持程序（nm，strip等）。它也包含了能够支持大部分程序运行的小型库。
- `include.tar.Z` — 让gcc运行的一些必要的头文件。
- `unistd.tar.Z` — 标准系统调用接口源代码。通过它你可以使用系统无关的库代码来构建规模更大的库。
- `utilbin.tar.Z` — 多姿多彩的GNU工具二进制库，包括GNU文件工具，make工具，tar工具，以及一个emacs的克隆uemacs
- `README，RELNOTES-0.01，INSTALLATION` — 纯文本文件，包含一些可能已经过时的有关Linux的信息。
  
理论上构建Linux的最小可运行系统需要OS源码，bash以及update可执行文件。但你肯定不会就此满足。

## 2. 安装方法Installation
  
获得必要的Linux文件后，你需要编译系统并制作根目录。一些可执行程序有必要放在根文件系统中，步骤如下：
  
1. 备份你的软件。尽管Linux从来没有摧毁任何我的文件，但什么都可能发生。安全总比遗憾好。（zzk：Better safe than sorry怎么翻译呢）
2. 选择一个标准 Minix 硬盘分区作为新的Linux根文件系统。
3. 在根目录中设置些必要的设备节点（zzk：即虚拟设备文件）Linux使用与Minix相同的节点类型，所以可以使用Minux的mknod命令来生成如下的设备：
	1. /dev/tty
	2. /dev/tty[0-2]
	3. /dev/hd[0-9]

节点号和Minix也是一致。

- 将必要的文件移动到新的根目录下。列表如下：
- /bin：
- sh，也就是bash.Z
- update
- /usr/bin：
- utilbin.tar.Z
- /usr/include：
- include.tar.Z
- /usr.local.lib：
- gccbin.tar.Z
- /usr/local/bin：
- gcc
- 自定义的链接，链接到/usr/local/lib中的程序。我会选择将ld，as，nm，strip，size程序链接到这里，并依次命名为/usr/local/lib/gcc-XXX
- 编辑linux/include/linux/config.h文件。该文件包含了一些系统专用的配置信息：内存空间大小，磁盘类型，根分区编号（再提醒下这个编码和Minix一致），键盘类型（目前只支持美国，芬兰式键盘）等。
- 编译Linux源码。你需要修改Makefile文件来适配你的系统（例如移除-mstring-insns选项，修改适合你的路径），然后只需要一个简单的make命令即可编译系统。如果你的gcc版本早于1.40，也许需要将gnulib添加到‘LIBS=’变量中。
- 将生成的镜像文件复制到软盘上（例如cp Image /dev/PS0）
- 使用新的软盘重新启动。启动界面会显示系统正在启动（Loading system…），显示一些重要的根文件系统信息（xxx/XXX inodes/blocks free），接着显示Ok.然后bash提示符会出现。（如果你没有.bashrc文件，默认提示符样式为bash#） 
正常情况下你会获得一个可用的unix系统，以root用户模式登录。Linux现在还没有init程序，一旦你退出登录，系统将会sync然后等待。可以使用three-finger-salute（zzk：指CTRL+ALT+DEL快捷键）来重启机器。
  
## 3. Linux中的缺失/不完善
Linux开始被设计成为一个完全自给自足的内核，虽然现在还没做到。正如之前提及，你需要Minix系统来做初始化工作以及文件系统检查。除此以外，该系统还存在如下的缺陷：
- 不完善的硬件支持。不支持一些AT标准特性。最值得注意的是对软盘驱动器缺乏支持，使得使用Linux实际进行工作（包括备份）尚不现实。另外一些对串口的支持还不完善（只支持2400波特率，没有悬浮窗通知等）。
- 缺乏对标准C库的支持。gcc发行版中的libc.a是不完整的。我对可自由发行的库函数很感兴趣。（zzk：这句话什么意思？说自己正在致力于完善libc？）
- 部分系统调用并没有完全支持。例如一些“很少使用”的功能如debugging（好吧，所有人都需要这个功能，不是所有的程序都可以一次通过的 : -）
- 正如上文提及，没有login和init程序。目前的Linux只能在单用户模式下启动，使用root用户登录。对于一些移植工作足够了，但是还不足以让普通用户实际使用。
- 有一些387的框架例程，但是对其支持还不完善。在‘[nic.funet.fi](http://www.nic.funet.fi/)’网站上获得的gcc程序会正确的使用softfloat（zzk：使用软件模拟浮点运算）（例如模拟系统调用）来执行四则运算。只要我计算机需要用到387，我就会在Linux中加入对387的支持。兴许会在一两个月之后。
- 目前没有为Linux编写重要的系统管理员级别命令，包括mkfs，format，fsck，mknod等。部分命令（format，mknod）依赖的内核特性还没有完善。而对于库文件，欢迎任何自由软件进入。
可以看到，Linux并不是一个完整的系统，需要你们的帮助来让Linux更好。除非你使用scratch原创代码，否则我对重新编写Minix风格的命令不感兴趣。你完全可以（我也很鼓励）动用任何你在你的Minix发行版上拥有的资源，自己配置或修改Linux系统，但由于Minix的版权限制，你不能将其广泛传播。
我在这里提到的部分缺陷，如果有可能，我将自己修复（例如串口总线/387/软盘支持），但是对于库文件，我希望获得一些帮助。我会appreciate你的Bug报告/补丁和建议，如果你真的提出了bug的修复补丁，我会立即修复。一些微小的改动将会以补丁的形式发送出去，并且在‘[nic.funet.fi](http://www.nic.funet.fi/)’上发布。如果是大改动或大型补丁，整个系统将会被更新。

## 4. 为Linux移植软件

Linux最初的设计目标之一就是让移植程序方便。因此完全支持termios库（zzk：一个用于非同步通信的终端接口）以及一些POSIX库。我移植的上述程序（好吧我承认相对有点少）暂未发现问题。

即使Linux有很多类似Minix的地方，但是将Minix程序移植到Linux上并不比别的unix程序移植起来容易。因此我建议不要用Minix程序来入门，而是使用scratch编写的原始代码来移植。Linux很接近SYSV和BSD，这意味着大多数程序可以使用-DUSG或-DSYSV选项来移植。

在移植中一个最困难的问题就是库函数的缺失。这些缺失的函数必须自己编写，或者从其他源码中拷贝（Minix拥有这些库函数）。或者，一些程序，尤其是GNU，有多种选项来决定什么函数可用什么不可用。（只要在Makefile适当位置加入-DXXX_MISSING选项，GNU的fileutils会很好的编译）

### 4.1 已经被移植的程序

- GNU cc（gcc，cc1，cpp）
- GNU assembler（as386）
- GNU binutils （ld，ar，nm，size，strip，ranlib）
- GNU compress（16-bit）
- GNU tar
- GNU make
- GNU bash（Bourne Again SHell）
- GNU sed
- GNU bison
- GNU awk
- GNU fileutils（ls，cp，rm，mkdir，rmdir，tail等）
- less
- uemacs
  
所有的这些源码都可以在‘[nic.funet.fi](http://www.nic.funet.fi/)’上找到（大部分在/pub/gnu目录中），大多数Linux可执行文件可在/pub/OS/Linux中找到。所有的这些程序都可以与原来一样进行编译，我甚至给gcc做了一些功能加强。