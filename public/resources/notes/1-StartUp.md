> [!hint] 
>  本页面有关CSR的部分可见 [[0-RISC-V#CSRs]]
>  有关硬件设备具体实现的手册可以参考SiFive的芯片[FU540-C000-v1.0 手册](file:///D:/CS/ComputerScience/PA/riscv/FU540-C000-v1.0.pdf)
## 启动

- RISC-V 硬件启动后会执行 ROM 中的 Boot Loader, 将 kernel/kernel 加载到内存地址 0x80000000 处(0到该位置为 I/O map), 并将所有CPU的PC设置为该值.

> [!question] 
> 1. 为什么是0x80000000(32bit), 更高位的内存在什么时候被用到?
> 2. Boot Loader 是 QEMU 模拟的吗? 手册出处在哪里?
> 3. qemu启动时配置了-m 128M, 意味着只有30bit寻址空间? 这个理解哪里不对

- kernel 早在链接 (kernel/kernel.ld) 时就将 kernel/entry.S 的代码加载到 0x80000000, 所以 CPU 会从该位置开始执行. (详情见 [[2-PageTable]])
- entry.S 配置了一个长度为 4096\*NCPU 字节的栈. The instructions at \_entry set up a stack so that xv6 can run C code. 为每一个CPU都配置了单独的栈空间. 随后进入start函数.
> [!question] 
> 1. 如何理解C语言只需要一个栈就能运行?
> 2. 这第一个栈只有4096字节, 后续是如何被使用的?

- 进入 start(kernel/start.c). 为了进入 S mode, 改函数执行了一些 M mode 才能执行的代码. (Tip: 在M mode就能用 C 了)
	- 配置 mstatus.MPP 位为 S mode. 为 mret 到 S mode 做准备.
	- 将 main(kernel/main.c) 地址放入 mepc, 为 mret 跳转地址做准备.
	- 将 satp 清为 0, 暂时关闭页表功能.
	- 配置 medeleg, mideleg, 将所有 Trap 都委派给 S Mode 执行.
	- 配置 sie, 打开 S mode 下三种不同中断的开关.
	- 配置 pmpaddr0, pmpcfg0, 让 S mode 能够访问所有物理地址.
	- 初始化时钟中断(硬件实现相关, 也是唯一需要在 M Mode 初始化的设备)
		- 详情见[[3-Interrupt#Timer Interrupt in xv6]]
	- 将 hartid 放入 tp 中, 便于 U Mode 读取, 提高性能.
	- mret 进入 S mode.
> [!question] 
> 1. PMP CSRs 具体配置原理?

- 进入main函数(kernel/main.c). 
	- consoleinit UART设备驱动初始化, 详情见 [[3-Interrupt#UART]]
	- printfinit: #TODO
	- kinit, kvminit, kvminithart: 初始化内存和页表, 详情见 [[2-PageTable]]
	- procinit: #TODO
	- trapinit, trapinithart: #TODO
	- plicinit, plicinithart: #TODO
	- binit: 初始化文件系统 buffer cache 层, 详情见 [[8-FileSystem#Buffer Cache Layer (kernel/bio.c)]]
	- iinit:  初始化文件系统 Inode 层, 详情见 [[8-FileSystem#Inode Layer]]
	- fileinit: #TODO 
	- virtio_disk_init:  #TODO
	- userinit: 执行一段用 RISC-V 编写的 U-Mode 程序(user/initcode.S), 其中执行了第一个系统调用, 详情见 [[#Syscall]]
	- schedule: 调度线程, 详情见 [[7-Schedule]]