var store = [{
        "title": "我的第一篇 blog",
        "excerpt":"在本地配置 jekyll 和 Ruby 的环境并不是一件轻松的事情。感谢 iBug 的博客给了我很多帮助。如果你们有需要，或者仅仅是好奇如何搭建这样的主页网站，可以去上面的链接看看。   最后一步居然卡在了 jekyll-theme-slate 的主题配置上，有点不太应该，但凡遇到些不懂的，还是要马上 google 啊。  ","categories": [],
        "tags": [],
        "url": "/2020/07/02/first-blog.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RI5CY 介绍",
        "excerpt":"Introduction of RI5CY(CV32E40P) 什么是 RI5CY 4阶段流水线，顺序的 32-bit 的 RISC-V 处理核，后改名为 CV32E40P，但为方便叙述，以下均称之为 RI5CY。 RI5CY 支持的最基础的 RISC-V 指令集版本（最新）的是 RV32I Base Integer Instruction Set version 2.1。除此之外，它还支持以下 RISC-V 指令集： C : Standard Extension for Compressed Instructions 2.0 M : Standard Extension for Integer Multiplication and Division 2.0 Zicsr : Control and Status Register Instructions...","categories": ["RISC-V","Verilog"],
        "tags": ["RISC-V","Verilog","RI5CY"],
        "url": "/risc-v/verilog/2020/07/16/RI5CY.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "QEMU 上运行 RISC-V Linux 内核",
        "excerpt":"QEMU 上运行 RISC-V Linux 内核 最近这段时间我在研究 RISC-V 内核。作为计划的开始，首先要将它运行起来。配置过程有点复杂，在此做详细介绍。 准备 操作系统 Ubuntu 18.04 RISC-V GNU 工具链 QEMU Linux Berkeley Boot Loader Busybear Linux git clone --recursive https://github.com/riscv/riscv-gnu-toolchain git clone https://github.com/qemu/qemu git clone https://github.com/torvalds/linux git clone https://github.com/riscv/riscv-pk git clone https://github.com/michaeljclark/busybear-linux 顺带一提，为了构建过程顺利，请先试着安装以下依赖： sudo apt install autoconf automake autotools-dev curl libmpc-dev libmpfr-dev libgmp-dev \\...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/07/23/RISC-V_on_QEMU.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V from Scratch 1",
        "excerpt":"RISC-V from Scratch 1 译自：RISC-V from scratch 1: Introduction, toolchain setup, and hello world! 最近在尝试完成一个 RISC-V 内核，在搜索资料的时不经感叹 RISC-V 的中文相关内容少且不精，而当我读完这系列英文博客后感觉受益匪浅，故将其翻译为中文，既方便接下来的研究，也方便更多朋友学习。这是系列 github 库。 简介 通过 RISC-V from scratch，我会给你介绍一些很多与 RISC-V 及其生态相关的底层概念（例如编译、链接、原语运行时、汇编等）。 在第一篇博文中，我将简短的讨论一下 RISC-V 以及为什么它很重要，并搭建起 RISC-V 的工具链，最后在 RISC-V 模拟器中构建并运行一个简单的 C 程序。 什么是 RISC-V RISC-V 是一个开源免费的 ISA，始于2010年在 UC-Berkeley 的一个项目。不得不承认，免费使用对其成功起到了重要作用，也使之与其他体系结构形成了鲜明的对比。以 ARM 为例——为创作一个兼容 ARM 的处理器，你必须支付100万美元至1000万美元的前期费用，以及每片0.5％-2％的特许权使用费。这种免费、开放的模型使 RISC-V 对许多人来说都是有吸引力的，这是因为很多硬件初创公司无力负担许可处理器，以及学术机构、开源社区的费用。...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/07/24/riscv-from-scratch-1.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V from Scratch 2",
        "excerpt":"RISC-V from scratch 2 今天，我们继续翻译 RISC-V from scratch 系列的第二部分，原文链接。这是该系列的 github 库。 简介 快速回顾，通过 RISC-V from scratch 系列课程，我们将会探索很多与 RISC-V 及其生态相关的底层概念（例如编译、链接、原语运行时、汇编等）。在第一篇博文中，我们简短的讨论一下 RISC-V 以及为什么它很重要，并搭建起 RISC-V 的工具链，最后在 RISC-V 模拟器和 SiFive’s freedom-e-sdk 的帮助下构建并运行一个简单的 C 程序。 Freedom-e-sdk 使我们在仿真或真正的 RISC-V 处理器上编译，调试和运行任何 C 程序变得很简单。不必担心什么链接脚本、编写运行时来设置堆栈，调用main等的运行时。如果你希望快速提高工作效率，那就太好了，但是这些细节正是我们想要学习的东西！ 在这篇文章中，我们将摆脱 freedom-e-sdk 。我们将编写并尝试调试自己的 C 程序，揭示隐藏在 main 后面的秘密，并检查 qemu 虚拟机的硬件布局。然后，我们将检查和修改链接器脚本，编写自己的 C 运行时以设置并运行我们的程序，最后调用 GDB 并逐步执行程序。 搭建环境...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/07/26/riscv-from-scratch-2.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Minimal Mistakes",
        "excerpt":"使用 Minimal Mistakes 配置个人网页——问与答   今天发现了一个很好的英文博客，可帮助美化一下自己的个人网站。      Personal Website with Minimal Mistakes Jekyll Theme HOWTO - Part I   Personal Website with Minimal Mistakes Jekyll Theme HOWTO - Part II   Personal Website with Minimal Mistakes Jekyll Theme HOWTO - Part III   Personal Website with Minimal Mistakes Jekyll Theme HOWTO - Part IV   ","categories": [],
        "tags": [],
        "url": "/2020/07/27/minimal-mistakes.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V from Scratch 3",
        "excerpt":"RISC-V from scratch 3: 写 UART 驱动 今天为大家继续翻译 RISC-V from scratch 系列博客，接着上一部分内容，我们本此的目标是实现 UART 协议的驱动程序，继续完善 RISC-V 的内核。本文译自 RISC-V from scratch 3: Writing a UART driver in nasm (1 / 3) 。 由于我发现该系列的原作者貌似没有把这一系列完成就咕咕了，因此从本文开始，我将加上一些自己实践的内容，以及一些自己的想法，同大家探讨，算是狗尾续貂，弥补遗憾。 简介 欢迎再次来到 RISC-V from scratch ，先快速回顾一下我们之前做过的内容，我们之前已经探索了很多与 RISC-V 及其生态相关的底层概念（例如编译、链接、原语运行时、汇编等）。具体来说，在上一篇文章中，我们使用 dtc 工具检查了 virt QEMU 虚拟机中的硬件布局，确定了 RAM 在该计算机中的存放地址，如果你观察仔细的话，会发现 virt 还有很多有趣的地方，其中一个是 UART。 为了进一步学习...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/07/27/riscv-from-scratch-3.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V from Scratch 4",
        "excerpt":"RISC-V from scratch 4: 写 UART 驱动 接上一篇博客，我今天继续写 RISC-V from scratch 系列博客。我原本打算将该系列全部翻译成中文，但原作者貌似没有把这一系列完成就咕咕了，因此本文的内容是我自己实践的内容，以及一些自己的想法，放在这里同大家探讨，算是狗尾续貂，弥补遗憾。 简介 欢迎再次来到 RISC-V from scratch ，先快速回顾一下我们之前做过的内容，我们之前已经探索了很多与 RISC-V 及其生态相关的底层概念（例如编译、链接、原语运行时、汇编等）。具体来说，在上一篇文章中，我们初步认识了 UART，并从 riscv64-virt.dts 中找到了关于 UART 的基本信息，我们还在链接器脚本里添加了 UART 的基本地址，且已经搭建了一个驱动程序框架。 在我实际动手操作的过程中，发现使用 RISC-V 汇编写 UART 驱动程序是吃力不讨好的行为，因此，我使用 C 语言完成了驱动的编写，这就是本篇博客的主要内容。如果大家想要看一下原博主的内容，那么就请参考 RISC-V from scratch 4: Creating a function prologue for our UART driver (2 / 3) 。...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/08/01/riscv-from-scratch-4.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V 特权架构",
        "excerpt":"RISC-V 特权架构 之前我在科大学习过 RISC-V ，但内容基本集中于用户模式下的一般指令的应用，因此本人对特权指令几乎一无所知。但是若要实现一个 RISC-V 内核，那么必然要对这些东西烂熟于心，因此今天，我们就来学习一下 RISC-V 特权指令集吧。 模式 缩写 编码 机器模式 M 11 Hypervisor H 10 监管者模式 S 01 用户模式 U 00 注：每一个特权级都有一组核心的特权 ISA 扩展，以及可选扩展和变种。支持的特权模式组合：M (Embedded without Protection)，M+U (Embedded with Protection)，M+S+U (Unix-like OS capable), M+H+S+U 机器模式 机器模式是 RISC-V 中 hart (hardware thread 硬件线程) 可以执行的最高权限模式。在该模式下，hart 对内存、I/O 等所有必要的底层系统有着完全的使用权限。在几乎所有的基于 RISC-V 的嵌入式系统中，都对该模式进行了必要的实现与支持。...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/08/05/riscv-privileged.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V from Scratch 5",
        "excerpt":"RISC-V from scratch 5 接上一篇博客，我今天继续写 RISC-V from scratch 系列博客。原本我打算将该英文系列全部翻译成中文，但原作者貌似没有把这一系列完成就咕咕了，因此本文的内容是我自己实践的内容，以及一些自己的想法，放在这里同大家探讨，算是狗尾续貂，弥补遗憾。 简介 欢迎再次来到 RISC-V from scratch ，先快速回顾一下我们之前做过的内容，我们之前已经探索了很多与 RISC-V 及其生态相关的底层概念（例如编译、链接、原语运行时、汇编等）。具体来说，在上一篇文章中，我们完成了一个简陋的 UART 驱动程序，并利用该驱动程序完成了打印字符的任务，今天，我们紧接着上一篇的实验内容，继续深入探讨 RISC-V，完善咱们的小内核。 本篇博客中，我们将会： 写一个自己的链接器脚本 使用 RISC-V 提供的机器模式特权寄存器 初始化 bss 数据段 搭建环境 如果你还未看本系列博客的第一部分，没有安装 riscv-qemu 和 RISC-V 工具链，那么赶紧点击上面标题的链接，跳转到 “QEMU and RISC-V toolchain setup” 。 往期回顾 在 RISC-V from scratch 4 中，我们实现了一个简单的 UART 驱动程序和一个简单的 C...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/08/06/riscv-from-scratch-5.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V from Scratch 6",
        "excerpt":"RISC-V from scratch 6 接上一篇博客，我今天继续写 RISC-V from scratch 系列博客。原本我打算将该英文系列全部翻译成中文，但原作者貌似没有把这一系列完成就咕咕了，因此本文的内容是我自己实践的内容，以及一些自己的想法，放在这里同大家探讨，算是狗尾续貂，弥补遗憾。 简介 欢迎再次来到 RISC-V from scratch ，先快速回顾一下我们之前做过的内容，我们之前已经介绍了 RISC-V 的特权架构以及几个重要的寄存器，在更久以前，我们还介绍了一些相关底层概念（例如编译、链接、原语运行时、汇编等）。具体来说，在上一篇文章中，我们在 UART 驱动程序的基础上，写了一个自己的链接器脚本，将数据安放在了合适的位置，我们还完善了 boot.s 文件，为中断程序处理做好了准备。为了使我们更好地利用驱动程序，并进一步做到进程并发、调度等，在这篇博客中，我将介绍： printf 等工具类函数的实现 在机器模式中实现对时钟中断的处理 将时钟中断处理程序放到监管者模式下 搭建环境 如果你还未看本系列博客的第一部分，没有安装 riscv-qemu 和 RISC-V 工具链，那么赶紧点击上面标题的链接，跳转到 “QEMU and RISC-V toolchain setup” 。 往期回顾 在正式内容开始前，我们先来看看上次实验进行到哪里了： static char sg[] = \"hello world!\"; int main() { int l...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/08/17/riscv-from-scratch-6.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "RISC-V from Scratch 7",
        "excerpt":"RISC-V from scratch 7：内存分页 接上一篇博客，今天我们继续写 RISC-V from scratch 系列博客。原本我打算将该英文系列全部翻译成中文，但原作者貌似没有把这一系列完成就咕咕了。为了将工作继续下去，最终完成一个基于 RISC-V 的迷你小内核。我将这些实验继续做下去，并将自己的实践内容和想法写在这里，与大家分享探讨。 往期回顾 欢迎再次来到 RISC-V from scratch ，先快速回顾一下我们之前做过的内容，为实现时钟中断，我费了很大的力气学习了 RISC-V 机器模式，又简单了解了中断的概念，我们还在 UART 驱动程序的基础上实现了 printf 等工具函数，在机器模式、监管者模式下实现了时钟中断，最终我们得到的实验效果是，我们的小内核可以定时地跟我们说 hello 。 当然，实现时钟中断的最终目的不是让它定时地和我们说你好，而是为了进程调度——时间片。这是我在第六章结尾挖下的坑，然而在后续实验中我发现这一想法太过激进，一下子难以实现。在实现进程之前，我们总得把内存进行分页，好让各个进程的内存相互独立，然后才能有多个进程，才会有进程调度吧😅。 搭建环境 如果你还未看本系列博客的第一部分，没有安装 riscv-qemu 和 RISC-V 工具链，那么赶紧点击上面标题的链接，跳转到 “QEMU and RISC-V toolchain setup” 。 内存管理的预备知识 不得不承认内存分页与管理是一门很大的学问。博主学习了 RISC-V 下的分页机制，也细读了 RISC-V 中文手册，又参考了两篇优质的英文博客 RISC-V OS using Rust chapter 3.1...","categories": ["RISC-V"],
        "tags": ["RISC-V"],
        "url": "/risc-v/2020/08/29/riscv-from-scratch-7.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Why RISC-V ?",
        "excerpt":"WHY RISC-V ? 读 Design of the RISC-V ISA 论文后的总结与思考 Introduction 软硬件接口，作为指令集架构 (ISA) 的重要组成部分，一直以来都是计算机系统中最重要的接口之一。然而相对于其他计算机系统中的接口，所有流行的 ISAs 都是商业且私有的 (Spring 2016)。在这篇论文中，作者 Andrew Shell Waterman 等人详细介绍了 RISC-V 体系结构。RISC-V 是一个免费且开放的 ISA。设计人员回顾三十几年来体系结构的发展，充分吸取经验教训，在原始的精简指令集计算机（RISC）体系结构上进行了构建和改进，从而构造为具有各种可选扩展的小型基础 ISA，并将其统一称之为 RISC-V。RISC-V 基本的 ISA 非常简单，因此很适合于研究和教育，但又足够完整，足以成为便宜的低功耗嵌入式设备的 ISA，而可选扩展对其的补充，使得 RISC-V 可用于通用和高性能计算。 在 RISC-V 还未问世之前，所有流行的 ISAs 都是专有标准。当然，这些国际标准化组织用知识产权来保护自己是无可厚非的，但保持标准的封闭会阻碍创新，并人为地抬高微处理器的成本。因此在 2010 年，Yunsup Lee 和 David Patterson 等人设计了一种完全自由开放的、基于 RISC 体系结构的指令集体系结构 RISC-V 。起初，RISC-V...","categories": ["RISC-V"],
        "tags": ["RISC-V","MIPS","x86"],
        "url": "/risc-v/2020/09/15/WHY-RISC-V.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Why RISC-V ?",
        "excerpt":"Why RISC-V ? 读 Design of the RISC-V ISA 论文后的总结与思考。这是本系列的第二部分，在调研了当代主要的 ISAs 后，作者认为现有 ISAs 不适合研究和教育目的，并因此设计了 RISC-V 。接下来我会继续研读这篇论文，细细体会这样设计带来的好处。 Why call it RISC-V 既然是全新的 ISA，为何其名字中有 V (five 罗马数字) ？这是因为，RISC-V 在 RISC-I 、RISC-II 、SOAR 和SPUR 项目的基础上，是加州大学伯克利分校的第五项 RISC ISA 的设计成果，因此我们将其命名为 RISC-V。还有一点原因是设计人员期望新的 ISA 可以很好地支持并行，V 也有 “Vector” 的含义。 设计原则 RISC-V ISA 总体的设计目标是什么？一句话概括，RISC-V ISA 要适用于几乎任何计算设备。这一目标带来了两个直观的结果： RISC-V 不能针对任何特定的架构进行设计，这是因为在某些体系结构上带来的好处可能在别的地方会花费非常大的代价。之前讨论的主流架构中，之所以有非常多缺点，是因为架构师做出了对原先的实现过度优化的决策（例如，MIPS 的延迟分支和...","categories": ["RISC-V"],
        "tags": ["RISC-V","RV32I","RV64I"],
        "url": "/risc-v/2020/09/17/WHY-RISC-V-2.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Why RISC-V ?",
        "excerpt":"Why RISC-V 读 Design of the RISC-V ISA 论文后的总结与思考。这是本系列的第三部分，在认识了 RISC-V 的基本 ISA 后，接下来我们介绍 RISC-V 的标准扩展，进一步体会这样设计带来的好处。 设计 RISC-V 时，我们定的一个目标就是使 RISC-V 能够既适用于资源紧张的低端实现，又能够适用于高性能计算实现。前者需要一个精简的 ISA ，后者要求一个高能效（意味着注定较为复杂的）ISA ，这就要求保留一些在嵌入式处理器或在任何通用处理器中非常重要的特性。RISC-V 用添加扩展的形式提供了很好的灵活性。RISC-V 目前有四种标准扩展——M 用于整数乘法和除法，A 用于原子内存操作，F 和 D 用于单精度和双精度浮点，它们一起构成了用于通用计算的强大 ISA。 整数乘除 在许多应用中，特别是那些有很多的定点计算的软件中，整数乘除法是常见的运算。虽然它们在计算操作中不占主导，但当软件运行时，就会发现它们仍可以占据很大一部分运行时间。因此，对于大多数应用程序来说，硬件加速这些操作是必须的。图中显示了 RISC-V M 的若干指令。 我们考虑将 M 扩展进一步分解为单独的乘法和除法扩展，但要明白一点，得出这两种扩展的需求的过程是紧密相关的。此外，若迭代乘法器在低端的 ASIC 上已实现，那么其实可以用较小的代价设计出迭代除法器。另一方面，对于许多 FPGA 来说，除法要比乘法困难得多，但由于乘法块的存在，处理器可以选择 trap 除法指令并在软件中模拟它们。 与其他 RISC ISAs 为乘法和除法指令添加了特殊的结构寄存器不同，RISC-V M...","categories": ["RISC-V"],
        "tags": ["RISC-V","RISC-V F","RISC-V M"],
        "url": "/risc-v/2020/09/19/WHY-RISC-V-3.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Why RISC-V ?",
        "excerpt":"Why RISC-V ? 在讲完 RISC-V 的基础 ISA 和标准扩展后，我们把注意力集中到 RISC-V C 上，RISC-V Compressed 简称 RVC ，它在基础 ISA 中引入了双长度指令，将最频繁的指令编码为更密集的格式来减少静态代码大小和动态取指令的流量。因为更小的指令占用空间可以降低嵌入式系统的成本（指令存储在嵌入式系统中的成本非常可观），并提高了指令缓存的命中率，提升了缓存系统的性能。取指令消耗了大部分能量，因此从内存中取出更短的指令（意味着更少的字节），也可以显著减少能量消耗。 背景介绍 在嵌入式系统领域，有限的指令内存容量和带宽往往不利于 RISC 架构。为了扩大他们的市场，RISC 供应商给 MIPS 和 ARM 创造了他们的 ISAs 的变种，分别叫做 MIPS16 和 Thumb，它们可以被编码为更窄的 16 位固定宽度指令。这些指令中的大多数与基本 ISA 相似，但对寄存器访问模式和操作数大小有限制。虽然这些压缩的 RISC ISAs 大大降低了代码大小，但它们也有一些缺点。最重要的是，基础 ISAs 的设计者没有考虑到这些压缩指令集：没有充足的编码空间给压缩的指令，因此唯一方法是创建新的、不兼容的指令集。但这就无法与基础 ISAs 混合在一起执行。例如，在 MIPS16 中，ISAs 只能用特殊的跳转指令交换，因此 MIPS 和 MIPS16 代码只在过程调用时混合。 不可与基本...","categories": ["RISC-V"],
        "tags": ["RISC-V","RVC"],
        "url": "/risc-v/2020/09/27/WHY-RISC-V-4.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo 软件系统概述",
        "excerpt":"百度 Apollo 5.5 自动驾驶软件系统概述 由于课题组研究需要，博主这段时间一直在研究百度的 Apollo 自动驾驶系统，其中有一些成果和感悟，放在这里与大家分享，也算作一个研究笔记吧。 什么是 Apollo？ Apollo 是百度开发的自动驾驶开源框架，其特点是高性能和灵活的架构，可以加速对自动驾驶的开发、测试、部署流程。博主这次主要介绍一下 Apollo 5.5 的软件架构。下面是整个 Apollo 代码的目录结构，主要是按照功能模块划分： cyber 消息中间件，替换 ROS 作为消息层 docker 容器相关 docs 文档相关 modules 自动驾驶模块，主要的定位，预测，感知，规划都在这里 calibration 校准模块，主要用于传感器坐标的校准，用于感知模块做传感器融合 canbus 通讯总线，接受并执行控制模块的指令，以及收集汽车的底盘状态进行反馈 common 集合了一些常用到的基本功能 contrib control 控制模块，顺着规划生成的路径，对车辆轨迹进行控制，它发送机械控制命令到 Can 总线，实现车辆的控制 data 地图等生成好的数据放在这里（其他数据待补充） dreamview 仿真，能够对自动驾驶过程中的数据进行回放，其他厂家也有推出一些仿真平台，后面有机会再介绍下 drivers 雷达，lidar，GPS, canbus，camera等驱动 guardian 监护模块，万一出现软硬件故障，可以采取相应处理的措施保证安全 localization 定位模块，融合 GPS、IMU、LiDAR等设备，获取汽车的定位信息 map...","categories": ["Apollo"],
        "tags": ["Apollo","Software System","module"],
        "url": "/apollo/2020/10/14/apollo-intro.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo Cyber RT 调度系统",
        "excerpt":"Apollo Cyber RT 调度系统解析 前言 上篇博客中，我简要地给大家介绍了 Apollo 系统，以及它的代码文件结构，并说明了一下 Cyber RT 在 Apollo 系统中的地位（是的，我调整了一下博客的内容，使之变得更加均衡合理）。Cyber RT 在系统的任务调度方面有重要的作用，又和实时系统要求密切相关。因此，我打算将调度系统作为一个切入点，在本篇博客中，我将会给大家介绍一下 Cyber RT 的调度系统。 Cyber中的调度 自动驾驶系统的有三大流程：感知、决策、执行。例如，车上的传感器感知到障碍物，判断其类型、运动轨迹等，再做出决策，最后再到刹车、油门和方向的控制，这会经过一系列模块的计算。这些模块在计算过程中会产生数据依赖，如果用箭头将模块间的数据依赖表示出来，就会形成图的拓扑结构。 在 Apollo 项目中，通常使用 DAG file 来描述计算图的拓扑结构。由于自动驾驶系统牵扯到很多的步骤，有很复杂的流程，相应的，这些计算图也十分庞大。因此，如何调度整个计算图使系统能满足各种时间约束，达到系统的实时性和确定性，是个巨大的挑战。 接下来，我们就详细地剖析一下 Cyber RT 的调度系统💪！ conf 配置文件 Cyber 调度的配置文件在 cyber/conf 文件夹中，配置文件详细说明了线程名、线程的 CPU 亲和性、调度策略，对于协程，还有分组情况、协程的优先级等等。 方便起见，我从官方文档中举例，文档对每项设置的说明都非常具体： scheduler_conf { // 1. 设置调度器策略 policy: \"classic\" // 2. 设置cpu set...","categories": ["Apollo"],
        "tags": ["Apollo","Cyber RT"],
        "url": "/apollo/2020/10/17/Cyber-RT.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Effective C++ 内容提要（上）",
        "excerpt":"Effective C++ Effective C++ 的内容提要。博主通读完一遍 Effective C++ 后，深感 C++ 的编写不易，在写程序时需要时刻考虑方方面面的多种因素，但我深知这些知识看完就会遗忘，因而将每个条款最精要的部分记录在此，方便自己和他人随时翻看。 让自己习惯 C++ 条款 01：视 C++ 为语言联邦 要将 C++ 视为一个由相关语言组成的联邦而非单一语言。在其中某个次语言中，各种守则都比较易懂，但当从一个次语言切换到另一个，编程守则就可能改变。有 4 个主要的次语言： C Object-Oriented C++ Template C++ STL 条款 02：尽量以 const enmu inline 替换 #define 也可以说成”宁可以编译器替换预处理器“。因为#define 定义的符号无法进入记号表；没有作用域；不遵守访问规则；用宏实现函数会很麻烦等缺点。 可以使用 const 对象或者 class 中的 static const 对象替换 #define 中单纯的常量，用 inline 函数替换 #define 定义的“宏函数”，并不会带来额外的运行时间开销。...","categories": ["Cpp"],
        "tags": ["Cpp","Effective C++"],
        "url": "/cpp/2020/10/20/EffectiveCpp1.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo Cyber RT 定时器",
        "excerpt":"Apollo Cyber RT 定时器 前言 首先回顾一下之前的内容。Apollo 是百度开发的自动驾驶开源框架，具有高性能和高灵活性的特点，我主要介绍 Apollo 5.5 版本。Apollo Cyber RT 是 Apollo 团队在注意到 ROS 无法满足自动驾驶系统的鲁棒性和性能要求后，专门为自动驾驶场景设计的开源、高性能运行时框架。Cyber RT 的调度系统给出了两个调度策略，使用协程来处理任务，并以优先级为主要依据调度协程。 OK，介绍完 Apollo 自动驾驶系统和 Cyber RT 运行时框架的调度部分后，今天我来介绍一下 Cyber RT 的定时器。当然，本人水平有限，对搜寻的资料的概括和对代码的理解难免有些错误、遗漏，恳请大家讨论、指正。 什么是定时器 在操作系统内核中，时间管理与定时器是重要的组成部分。相对于事件驱动而言，内核中有大量的函数都是基于时间驱动的，其中有些是周期性的，有些是等待一个相对时间后执行，有些是在绝对时间上执行。定时器是管理系统流逝的时间的基础，能够使工作在指定时间点上执行。 定时器的使用很简单，你只需要执行一些初始化工作，设置一个超时时间，指定超时后执行的函数，最后激活定时器就可以了。 Linux 中的定时器 为了给大家留下一个深刻的印象，我先拿如何使用 Linux 内核中的定时器来说明。Linux 的内核定时器定义在文件 &lt;linux/timer.h&gt; 中，其结构如下1（2.6 版本）： struct timer_list { struct list_head entry; // 定时器链表的入口 unsigned long...","categories": ["Apollo"],
        "tags": ["Apollo","Cyber RT"],
        "url": "/apollo/2020/10/21/CyberTimer.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo Cyber RT 组件",
        "excerpt":"Apollo Cyber RT 组件 前言 今天，我来给大家介绍一下 Apollo Cyber RT 中组件（Component）的相关知识。老规矩，在这之前，先回顾一下之前的内容。根据课题组的安排，我这段时间一直在研究 Apollo 系统，它是百度开发的自动驾驶开源框架，具有高性能和高灵活性的特点，我主要介绍 Apollo 5.5 版本。其中的 Apollo Cyber RT 是 Apollo 团队在注意到 ROS 无法满足自动驾驶系统的鲁棒性和性能要求后，专门为自动驾驶场景设计的开源、高性能运行时框架。在之前的博客中，我介绍了 Cyber RT 中定时器的相关知识，主要介绍了定时器的算法、实现以及定时器组件如何使用定时器。由此引发了我对组件实现的兴趣，那么这篇博客就详细地介绍一下组件吧。 组件 Component 根据百度 Apollo 团队提供的 Cyber RT 文档1，组件（Component）是 Cyber RT 用于构建应用模块的基本类。每个特定的应用模块都可以继承 Component 类并定义自己的函数 Init() 和 Proc() ，之后，该模块就可以被装载入 Cyber RT 框架中。 一般来说，用户有两种选择来使用 Cyber RT 框架：...","categories": ["Apollo"],
        "tags": ["Apollo","Cyber RT"],
        "url": "/apollo/2020/10/25/CyberComponent.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo Cyber RT 通信（上）",
        "excerpt":"Apollo Cyber RT 通信（上） 前言 在之前的博客中，我和大家讨论了 Apollo Cyber RT 组件的相关内容，在介绍组件的内容时，我们谈到每个组件都有自己的读者信道 Reader&lt;M&gt; 和 Node 节点类对象， DataVisitor 数据访问类在创建协程工厂时也起到了关键作用。由此可见，通信问题已经成为了在学习 Cyber RT 过程中绕不过去的槛儿，那么，Cyber RT 怎么保证这么多的组件能够齐心协力，高效地完成一件件任务呢？今天我就来带领大家探讨一下这类问题。由于通信部分的内容过多，写在一篇博客里太长，所以我把它分成了两部分。 ROS 的历史遗留 之前在研究 Apollo 时，我了解到 Apollo 3.5 版本前，各个模块直接通过一个简单的运行时框架，构建在 ROS 之上。 而之后的版本，都加上了 Cyber RT，它不仅仅是一个运行时框架，还承担了数据通信和任务调度，以及记录日志等任务。但是从软件工程的角度出发，对底层的大改必然会牵动上层，为了尽可能地不影响上层代码，Cyber RT 不得不依照 ROS 的“规矩”，提供有相同名称的功能近似的接口，这之后我们可以将 ROS 与 Cyber RT 进行比较。 于是我就发现，与 ROS &amp; ROS2 中类似的是，Cyber RT 也支持两种通信方式，详情见术语介绍：...","categories": ["Apollo"],
        "tags": ["Apollo","Cyber RT"],
        "url": "/apollo/2020/11/03/CyberCommu1.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo Cyber RT 通信（下）",
        "excerpt":"Apollo Cyber RT 通信（下） 前言 欢迎回来！今天我继续和大家聊 Cyber RT 的通信，上文我探讨了 Cyber RT 的两种通信方式和三种通信模型，并从通信架构的角度，一层层地给大家详细介绍了通信时代码的具体工作情况。由于通信内容过多，全放在一篇博客理论太长，于是我将这些内容简单地一分为二，事实上它们应当是有机的整体。 上文末尾，我介绍了 Blocker 类的功能，今天这篇博客，我们继续向深处进军↖(^ω^)↗。 Receiver &amp; Transmitter 我们在上文已经认识了 Reader 和 Writer ，现在继续往下走。如果你仔细看代码的话，在 Reader 和 Writer 初始化时，都会分别构建好底层的 Receiver 和 Transmitter 对象。为了描述简便，我之前有意地忽略了，现在把它拿出来。Reader 部分的比较复杂，还使用了 ReceiverManager 进行管理；Writer 就比较直接了，在 Init() 函数中可以直接看到。 bool Reader&lt;MessageT&gt;::Init() { receiver_ = ReceiverManager&lt;MessageT&gt;::Instance()-&gt;GetReceiver(role_attr_); } bool Writer&lt;MessageT&gt;::Init() { /* .... */...","categories": ["Apollo"],
        "tags": ["Apollo","Cyber RT"],
        "url": "/apollo/2020/11/07/CyberCommu2.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo Planning 规划模块",
        "excerpt":"Apollo Planning 模块 前言 本篇博客对 Apollo 的规划（Planning）模块做详细介绍。根据官方文档1，规划模块的主要功能是对自动驾驶车辆未来的时空轨迹进行规划。为了让读者对规划模块在整个 Apollo 系统中的位置有一个大致的印象，我特意从官网上截取此图👇。可以看到规划模块的数据上游是定位（Localization），预测（Prediction），感知（Perception）模块，而下游是控制（Control）模块。 场景 规划模块中，Apollo 设计团队引入了场景的概念，每个驾驶案例都被当做为一个不同的驾驶场景，这使得规划模块更具模块化，且更有针对性。更重要的是，对一个特定场景的修改不会影响其他场景。Apollo 5.5 主要注重于城市道路上的沿车道线自动驾驶，并引入了两种新的规划场景2。这里主要介绍 5 种驾驶场景，由于篇幅原因，我就在这里做简要介绍，详细内容可以点击参考文献 [2]。 沿车道线行驶 默认场景模式，该场景包括但不限于遵守基本交通规则，或者基本转弯的单车道（例如巡航）或变道。 会车 该场景包括了在有停:stop_sign: 标志的、有交通灯 :traffic_light: 的、什么都没有的十字路口上的会车情况。总的来说，自动驾驶车辆在遇到这些十字路口时，都会先抵达十字路口边，然后注意观察来往车辆并小心前进，最终通过十字路口 停车 停车场景中采用了一个令 Apollo 团队感到非常骄傲的 Open Space Planner 算法，该规划算法尤其适用于停车场景。文档中，一共介绍了两个子场景： Valet 场景，用于将车辆停放在一个目标车位中 Pull Over 场景，用于到达目的地后，完成的路边停车任务。 即停即走（Park-and-go） 即停即走场景用于路边停车，并开始生成到达下一个目的地的新路径，有点像出租车放下一名乘客后的场景，对于路边交付，乘客接送或下车等情况非常有用。该场景将 Open Space Planner 算法与其他传统的轨迹规划算法结合在一起，以确保汽车不仅安全停车，而且还能够按照生成的轨迹驶出停车位。 紧急状况 紧急场景是为确保在给定触发事件的情况下（通过人工输入或由于一个或多个软硬件故障）让车辆能安全停下。 该场景对于城市驾驶极为重要，因为在道路上经常会遇到几种无法预料的情况，要求车辆完全停车。例如，有两种类型的紧急停车： 靠边停车，自动驾驶车辆使用 Open Space Planner...","categories": ["Apollo"],
        "tags": ["Apollo","Cyber RT"],
        "url": "/apollo/2020/11/11/ApolloPlanning.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Apollo Cyber RT 服务与服务发现",
        "excerpt":"Apollo Cyber 服务与服务发现 前言 现在我们开始介绍 Cyber RT 通信部分的最后一块内容——服务发现。在 Cyber RT 通信（上）中，我说过，Cyber RT 支持两种通信方式： 发布—订阅通信方式（Publish-Subscribe），也叫基于信道的通信方式 服务—客户通信方式（Service-Client），也叫基于服务的通信方式 在 Cyber RT 通信（上）和 Cyber RT 通信（下）中，我已经详细地介绍了发布—订阅通信方式，之所以先对该发布—订阅方式进行介绍，是因为该方式使用的场景比较多。考虑到对系统认识的完整性以及后面的研究工作，我觉得还是有必要说一下服务—客户通信方式。 与发布—订阅方式最大的不同是，服务—客户通信方式需要两个节点之间完成请求（Request）和应答（Response）才可完成通信，常用于节点之间双向通信的场景。 回顾在Cyber RT 通信（上）讲过的底层通信方式，一共有如下三种 同一进程内。在同一个进程节点之间的相互通信，对于进程内的数据，直接传递消息对象的指针，避免消息数据复制的开销 同主机进程间。在不同进程之间的节点传播信息，可以利用共享内存传输，减少传输中的数据复制，显著提升传输效率，并满足一对多的传输场景 跨主机。跨主机的数据利用 socket 传输，跨主机通信采用了第三方的开源库 Fast RTPS（Real Time Publish Subscribe Protocol，实时发布订阅协议），是 DDS（Data Distribution Service）标准的一个非常流行的开源实现，支持 RTPS 协议版本的一个订阅发布消息组件，具有高性能，实时性高，多平台支持等优点 在服务—客户通信方式中，使用的是第三种通信渠道—— Fast RTPS ，之后会进行介绍。 从 NodeServiceImpl 说起 如果你看过我之前写的博客，就应该知道...","categories": ["Apollo"],
        "tags": ["Apollo","Cyber RT"],
        "url": "/apollo/2020/11/18/CyberServiceDiscovery.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "对一并行程序实验的简单理解",
        "excerpt":"对一并行程序实验的简单理解 写在前面 使用一维数组 在写并行程序时，会遇到很多针对矩阵、张量的计算，尽管它们都是以多维数组的方式组合在一起，但一般情况下，我更加倾向于使用一维数组来表示这些多维数组的数据。我认为，这样做的好处有： 方便函数参数类型的统一。如果程序中既声明了二维数组（这意味着它是一个 pointer to pointer 的类型），又存在一维数组，那么在调用函数时（比如需要生成随机数据，或者检查运行结果是否正确），会出现类型不一致，就需要实现两个功能类似的函数，增加了代码冗余。当然了，这里我们只讨论 C 语言的情况 :sweat:。 方便索引的计算。计算偏移量是并行编程中常做的事情，然而在多维数组中，指针偏移是很容易出错且吃力的事情（很多时候单看 p+1 你甚至不知道指针到底偏移了多少！）。而如果全部使用一维数组，偏移的量就很容易理解，你再也不会被多维指针搞得晕头转向:smile:。 更接近机器底层。对计算机系统稍做了解，就会发现所谓的“多维数组”其实是程序员抽象出来的东西，计算机真正认识的只有一维数组。使用一维数组写并行程序，不仅对 MPI 更加友好（大部分 MPI 函数只接受一维指针），还会更有助于我们理解机器行为，挖掘并行潜力。 使用一维数组虽然有如上好处，但也有明显的弊端：索引表达不方便。当然也有办法可以解决这些问题： 使用宏函数。注意一定要给每个运算部分加上括号。 #define INDEX(i, j) (((i)*(N))+(j)) 如果你对宏函数嗤之以鼻，那么可以使用 inline 函数代替宏函数，性能不会降低且更加安全。 使用堆空间并注意内存泄露 并行编程往往涉及非常大的数据量，因此推荐将数据放入堆空间中。不过，这会带来一个非常棘手的问题：内存泄露。C 语言中没有自动的内存回收工具，内存能不能被回收利用全靠程序员自觉，但良好的编程习惯和适当的技巧可以尽可能地避免这类问题： do { // 分配堆空间 pa = malloc(N); // 若失败 break 退出 if (pa==NULL) break; }while(0); if (pa!=NULL) {...","categories": ["MPI&OpenMP"],
        "tags": ["MPI"],
        "url": "/mpi&openmp/2020/12/14/PP01.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "并行程序中的求和",
        "excerpt":"并行求和算法实现 题目描述 有 $N$ 个处理器，现对 $N$ 个数求和，要求每个处理器中都保持全和。有两个算法可以实现： 蝶式求和算法：重复计算元素的求和，共需要 $logN$ 步。在每个阶段，处理器都会将数据发给指定的其他处理器，然后进行求和。 二叉树求和算法，累计求和，在广播给其他节点，需要 $2logN$ 步 蝶式算法实现 首先需要假定：数据均匀地分布在每一个处理器中，特别地，每个处理器中只有一个数字。但求和必然要求所有的数据，蝶式算法就是将数据从少到多，一步一步地累加起来。编程时，可按照蝶式算法一步一步按阶段地实现。接下来，对照下图，仔细地品读一下算法，了解其中的规律，以便代码实现。 在第一阶段，每个处理器与其相邻的处理器交换它们的数据。注意一下它们的编号：Proc#0 和 Proc#1 ，Proc#2 和 Proc#3，……如果我们把这些编号全部写成二进制，规律就更加明显了 :smile:。这些互相交流的处理器的编号，除了倒数第一位是不一致的，其他都是一致的！ 第二个阶段，处理器0与2号处理器交流，1号与3号交流，4号与6号交流……在二进制表示中，也是只有一个位的差别，这里是倒数第二位。第三阶段，0号处理器与4号交流，是倒数第三位的差别。 得到规律：在第 i 个阶段，处理器 Proc#n 会与处理器 Proc#(n ^ (1 &lt;&lt; (i-1))) 交换数据（发送和接收都要），然后相加就行了:laughing:。如此一来，代码就呼之欲出了。 for(int i = 2; i &lt;= num_procs; i &lt;&lt;= 1) { int tag = i &gt;&gt;...","categories": ["MPI&OpenMP"],
        "tags": ["MPI"],
        "url": "/mpi&openmp/2020/12/17/PP02.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "并行正则采样排序之 MPI 实现",
        "excerpt":"并行正则采样排序之 MPI 实现 算法介绍与原理 在并行计算中，流行一种比快速排序更高效的算法——并行正则采样排序算法。并行正则采样排序 PSRS（Parallel Sorting by Regular Sampling），是一种基于均匀划分（Uniform Partition）原理的负载均衡的并行排序算法。假定待排序的元素有 n 个，系统中有 p 个处理器，算法将 将 n 个元素均匀地分割成 p 段，每段含有 n/p 个元素 给每段元素指派一个处理器，每个处理器对各自管辖的这部分元素进行快速排序 从各段元素中抽取几个代表元素，再从它们产生出 p-1 个主元 找出这些主元与原来的各局部有序的元素之间的偏序关系，进而将各个局部有序段重新划分成 p 段 通过全局交换将各个段中的对应部分集合到一起，最后将集合到一起的元素采用多路归并方法进行排序 不得不说，整个算法步骤较多，过程复杂，令人一时难以理解，博主通过图片的形式再描述一遍算法，希望能帮助各位。 具体实现 首先，还是老规矩，先生成随机数组，然后使用单个处理器（这里使用 Proc#0）排序，得到最终答案，用于检验并行程序的正确性。在做好这些初始化工作后，并行正则采样排序的实现正式开始！:muscle: 分段快排 由 Proc#0 将所有数据分段发送给所有的处理器，每个处理器均匀地接收到部分数据，并调用 qsort() 函数进行快排。然而，均匀地分派给各处理器，就不得不考虑均分后的余数问题。当然，我们可以用 MPI_Send 和 MPI_Recv 函数，外加一个循环，来实现数据分派。但这样做 1）编程复杂，容易出错。2）不易阅读，难以理解。这里我采用了一个比较厉害的函数：MPI_Scatterv int MPI_Scatterv(const void *sendbuf, const...","categories": ["MPI&OpenMP"],
        "tags": ["MPI"],
        "url": "/mpi&openmp/2021/01/23/psrs_sort.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "python 自动化——获取学生提交的作业",
        "excerpt":"python 自动化——获取学生提交的作业 我这学期担任本科的操作系统助教。课程要求所有学生的作业都提交到“网络教学平台上”给助教批改，但学生数量众多，一个一个点击下载压缩包十分麻烦，还容易遗漏。我注意到网站没有批量下载解压的功能，为提高工作效率，想试着使用python来一键完成下载解压。 关于 selenium.webdriver Selenium 通过使用 webdriver 支持市场上所有主流浏览器的自动化。 Webdriver 是一个 API 和协议，它支持多种语言，有python、java、C#、Ruby、JavaScript等。Webdriver 用于控制 web 浏览器的行为，且每个主流的浏览器都有一个特定的 WebDriver 实现，称为驱动程序。 驱动程序是负责委派给浏览器的组件，并处理与 Selenium 和浏览器之间的通信。 Selenium 框架通过一个面向用户的界面将所有这些部分连接在一起， 该界面支持不同的浏览器后端， 从而实现跨浏览器和跨平台自动化。 安装 可以使用 miniconda : conda install -c conda-forge --name myenv selenium 或者 pip ： pip install selenium 然后，根据你使用的浏览器，安装特定于浏览器的 WebDriver 二进制文件： 浏览器 维护者 支持的版本 Chrome Chromium...","categories": ["Miscellaneous"],
        "tags": ["Python","Webdriver"],
        "url": "/miscellaneous/2021/04/05/selenium.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解计算机系统之位操作实验",
        "excerpt":"深入理解计算机系统——位操作实验 实验介绍 实验资料可从CSAPP 官网获取。 本实验考察了位操作符的使用以及整数和单精度浮点数的位级表示。通过完成这 15 个有关位运算的题目，可以加深大家对计算机中数据的理解。注意，所有要实现函数都位于 bits.c 文件。 bits.c 唯一需要修改的源代码文件 btest.c 该文件用于评估位操作实现功能的正确性，每次实现一个函数后，建议使用 btest 来检查功能是否正确： $ make ./btest 也可以使用 -f 标志检查单个函数的正确性，例如 $ ./btest -f bitXor dlc 语法检查，检查是否使用了违反规定的操作。如果程序没有输出，说明我们的程序没有问题。 位运算实现 bitXor 题目要求：使用 ~ 和 &amp; 实现 x ^ y。 关于这个函数的实现，我首先想到了在数字电路课程中学到的技巧：和式转乘积。设两个输入分别为 A 和 B，那么其亦或操作可表示为：$ A \\bar{B}+\\bar{A}B = \\overline{\\overline{A\\bar{B}} \\cdot \\overline{\\bar{A}B}}$。如此转换，等式中仅存在 ~ 和 &amp;...","categories": ["CSAPP"],
        "tags": ["Bit Manipulation","CSAPP"],
        "url": "/csapp/2021/04/30/CSAPPLab01.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解计算机系统之二进制炸弹实验",
        "excerpt":"深入理解计算机系统——二进制炸弹实验 实验简介 二进制炸弹是一个作为目标代码文件的程序。运行时，它提示用户输入若干个不同的字符串。如果其中一个不正确，炸弹就会“爆炸”，打印出一条错误信息。用户必须通过对程序的反汇编和逆向工程来求出这六个字符串，解决这些炸弹。该实验的主要目的是，深入理解汇编语言，并学习使用 gdb 调试器。 在本次实验中，我们需要拆解七个炸弹（其中一个为隐藏炸弹）。 实验预备 下载完实验材料后，有两个文件值得关注：bomb 和 bomb.c 。bomb 就是要“拆解”的目标文件代码，而 bomb.c 只是辅助理解的部分源代码文件。首先，对 bomb 进行逆向： objdump -d bomb &gt;&gt; bomb.s 得到反汇编文件 bomb.s ，然后，在该文件中找到相关函数的反汇编代码，开始拆解炸弹！ 拆弹 phase_1 phase_1: push %ebp mov %esp,%ebp sub $0x8,%esp movl $0x8049948,0x4(%esp) mov 0x8(%ebp),%eax mov %eax,(%esp) call &lt;strings_not_equal&gt; test %eax,%eax je &lt;phase_1+0x22&gt; call &lt;explode_bomb&gt; leave ret 比较字符串，若相等就不会爆炸。找到目标字符串。...","categories": ["CSAPP"],
        "tags": ["BinaryBombs","x86","CSAPP"],
        "url": "/csapp/2021/05/26/CSAPPLab02.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解计算机系统之缓冲区溢出炸弹实验",
        "excerpt":"深入理解计算机系统之缓冲区溢出炸弹实验 实验目标 在实验过程中，进一步掌握函数调用时栈帧结构的变化。充分了解缓冲区溢出原理，并学会利用输入缓冲区的溢出漏洞，将攻击代码嵌入当前程序的栈帧中，使得程序执行我们所期望的过程。从实验中进一步感悟缓冲区溢出攻击方式，吸取经验教训，从而写出更安全的代码。 实验材料 makecookie：生成cookie bufbomb：可执行程序-攻击对象 sendstring: 字符格式转换 bufbomb 程序是我们要攻击的对象，其缓冲区漏洞代码见下： int getbuf() { char buf[12]; Gets(buf); return 1; } getbuf: push %ebp mov %esp,%ebp sub $0x18,%esp lea -0xc(%ebp),%eax ; only allocate 12 bytes mov %eax,(%esp) call 0x8048e60 &lt;Gets&gt; mov $0x1,%eax leave ret 代码中没有对 buf 数组进行越界检查（常见 C 编程错误），超过11个字符将溢出。而溢出的字符将覆盖栈帧上的数据和程序的返回地址。如果我们精心构造溢出的字符串，将程序“返回”至我们想要的代码上，就能控制程序流程。 为了构造所需要的地址或其他数据，我们需要实现逆反“字符-&gt;ASCII码”的过程。出题人已经提供了 sendstring 工具，其使用方法为...","categories": ["CSAPP"],
        "tags": ["StackOverflow","CSAPP"],
        "url": "/csapp/2021/05/27/CSAPPLab03.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解计算机系统之代码优化实验",
        "excerpt":"深入理解计算机系统之代码优化 实验介绍 图像处理中存在很多函数，可以对这些函数进行优化。本实验主要关注两种图像处理操作 旋转：对图像逆时针旋转90度 平滑：对图像进行模糊操作 若图像用二维矩阵 $M$ 表示，$M_{ij}$ 表示图像 $M$ 的第 $(i, j)$ 像素的值，像素值用红，绿，蓝表示。我们只会考虑方形图像。令N表示图像的行（或列）数，从0到N − 1编号。给定这种表示形式，旋转操作可以非常简单地实现为以下两个矩阵运算： 转置：对于每对 $(i, j)$，$M_{i , j}$ 和 $M_{j, i}$ 是互换的 交换行：第i行与第N-1 − i行交换。 旋转操作的具体步骤如下图所示： 平滑操作的目标是将每个像素值改为其周围像素值的平均值。参考以下公式： \\[M2[1][1]=\\frac{\\sum^2_{i=0}\\sum^2_{j=0}M1[i][j]}{9}\\] \\[M2[N−1][N−1]=\\frac{\\sum^{N−1}_{i=N−2}\\sum^{N−1}_{j=N−2}M1[i][j]}{4}\\] 代码优化 本次实验中，我们需要修改唯一文件是 kernels.c。driver.c 是驱动程序，使我们修改的程序能运行，并对其进行评分。使用命令 &gt; make driver 生成驱动程序代码，并使用 ./driver 命令运行它。 数据结构体 图像的核心数据是用结构体表示的。像素是一个结构，如下所示： typedef struct { unsigned short red;...","categories": ["CSAPP"],
        "tags": ["CSAPP"],
        "url": "/csapp/2021/06/29/CSAPPLab04.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解计算机系统之动态存储分配器实现",
        "excerpt":"深入理解计算机系统之实现动态存储分配器 简介 本实验需要用 C 语言实现一个动态的存储分配器，也就是你自己版本的 malloc，free，realloc 函数。我们需要修改的唯一文件是 mm.c，包含如下几个需要实现的函数： int mm_init(void); 在调用 mm_malloc，mm_realloc 或 mm_free 之前，调用 mm_init 进行初始化，正确返回 0 void *mm_malloc(size_t size); 在堆区域分配指定大小的块，分配的空间，返回的指针应该是 8 字节对齐的 void mm_free(void *ptr); 释放指针指向的 block void *mm_realloc(void *ptr, size_t size) 返回指向一个大小为size的区域指针，满足一下条件 动态内存申请 使用动态内存分配器，可为在程序运行时确定并申请虚拟内存空间。动态内存分配器管理的区域被称作堆。每个进程的内存分布如下： 动态内存申请器将堆这块区域当作一系列大小不同的块来管理，块或者已分配的，或者是空闲的。 malloc &amp; free 通常，有关内存管理， Linux 提供的系统调用主要有两种： 第一个是 sbrk() 函数： #include &lt;unistd.h&gt; //...","categories": ["CSAPP"],
        "tags": ["CSAPP"],
        "url": "/csapp/2021/07/05/CSAPPLab05.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "熟练使用 Vim",
        "excerpt":"Vim 小技巧 情景一：自动写入文件头 在编写 C++ 程序时，总有一些东西会在每个头文件中出现，比如： #ifndef &lt;_File_Name_MACRO_&gt; #define &lt;_File_Name_MACRO_&gt; // ... #endif // &lt;_File_Name_MACRO_&gt; 每次键入这些信息会非常枯燥。但只要配置好 Vim ，就可以逃避这些烦人的操作。我们可以在 .vimrc 中将需要每次键入的信息写在一个函数内，每次在创建一个特定文件时（比如 .cpp），vim 会帮我们自动把这些信息写好。下面我来介绍一下使用方法，如有需要，直接拉到最后复制粘贴。 autocmd vim 中自带的自动命令，会在指定事件发生时自动执行。我们正打算利用这一特性，迅速完成上面场景的要求，将重复的操作自动化，提高编辑效率并减少人为操作的差错。 先从最简单的开始举例，vim 中可定义以下函数，用于在文件中插入当前日期： :function DateInsert() : $read !date :endfunction 而使用以下命令，可以手动调用此函数： :call DateInsert() 但每次调用函数有点太过麻烦，我们使用自动命令，在保存文件时自动执行函数，其中 FileWritePre 是 vim 中的内置事件： :autocmd FileWritePre * :call DateInsert() 上一句话可以简单地翻译为：“在写入文件前，需要自动执行命令 call DateInsert()”。可用简写 :au...","categories": ["Miscellaneous"],
        "tags": ["Vim"],
        "url": "/miscellaneous/2021/08/22/VimTech.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "C语言中容易忽视的小知识",
        "excerpt":"一、在C文件中引用C++函数 将要使用的函数声明放在一个头文件中 把要被C语言调用的C++函数的声明放在extern \"C\"{ ... }语句块里 注意：标准C++的头文件包含不能放在extern \"C\"{ ... }语句块里 当然，要在C++文件调用C文件的函数也是可行的。 而要在C文件中引用C++函数，下面给出一个示例： // C function declaration in fun.h #ifdef __cplusplus extern \"C\" { #endif // 要调用的C++函数 int add(int a, int b); int sum(int a[], int num); #ifdef __cplusplus } #endif 用 extern \"C\" { ... } 语句块将 C++ 函数的声明包裹起来。然后，完成C++函数的定义： //...","categories": ["Cpp"],
        "tags": ["C"],
        "url": "/cpp/2021/08/23/non-trivial-thing-in-C.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "在 Linux 中更好地使用C/C++语言",
        "excerpt":"一、Linux下的命令行处理 C 语言中命令行参数 执行程序时，可以从命令行传入参数给 C 的 main 函数。这些参数被称为命令行参数，它们对程序很重要，可以从外部控制程序的执行。 使用 main() 的函数参数可以处理命令行参数： argc 是指传入参数的个数，包括最开头的执行程序名 argv[] 是一个指针数组，指向传递给程序的每个参数。 举例来说： #include &lt;stdio.h&gt; int main(int argc, char *argv[]) { if (argc == 2) printf(\"The argument supplied is %s\\n\", argv[1]); else if (argc &gt; 2) printf(\"Too many arguments supplied.\\n\"); else printf(\"One argument expected.\\n\"); } 现在编译上面的程序，并执行 &gt;...","categories": ["Cpp"],
        "tags": ["Linux","C"],
        "url": "/cpp/2021/08/25/tricks-in-LinuxC.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "初学 Qt（一）",
        "excerpt":"初学 Qt 之从零开始的中国象棋小游戏（一） 最近对 Qt 这个跨平台 C++ 图形应用程序框架很感兴趣，闲暇时间多学了一下，收获很多，也踩了不少坑，在这里记录一下，分享心得。 Qt 的安装 安装 Qt 并不麻烦，就是网速有点慢。推荐使用国内镜像代理下载。 首先进入 Qt 官网，在 Try Qt 处点击 Download Qt，填完基本信息后，点击提交就可以下载 Qt 下载器了。当然，你也可以直接去国内镜像站上下载 Qt 下载器。 打开 Qt 下载器，注册 Qt 账户，并登录，同意协议。若要使用国内镜像代理，点击左下角的配置图标。 然后从百度上选择一个国内镜像站，我这里选用中科大的镜像站，参考中科大镜像站上的帮助文档，我们需要把 http://mirrors.ustc.edu.cn/qtproject/online/qtsdkrepository/windows_x86/root/qt/ 加入到 repository 列中（注意这是在 Windows 操作系统下），加入后先别急着关，可以点击 test 测试一下镜像站连接是否成功。现在，下载器就会从国内镜像站中获取下载数据了，速度会快不少。 之后的安装就很无脑了，一路选择确定和安装位置，然后选择需要安装的 Qt 部件。推荐安装最新的 Qt 6 或者 Qt 5.12，最好选择所有的 Qt 核心功能，以及合适的编译器和调试器，当然别忘了相关的开发和设计工具，比如 Qt...","categories": ["Cpp"],
        "tags": ["Qt","Cpp"],
        "url": "/cpp/2021/09/24/Qt-Chess.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "CUDA 中的向量内积",
        "excerpt":"CUDA 中的向量内积 博主本科时略学过 CUDA 编程的相关知识，但远算不上熟练，更谈不上精通。恰好本人对并行计算很感兴趣，这几天实现了一下最基础的向量内积，对以前的知识做了一点总结，算是温故而知新，可以为师矣。 向量内积 两个长为 N 的向量做内积。从并行计算的角度看，可并行部分就是 a[i] * b[i] 部分，然后再对得到的乘积做累加求和。可以让 GPU 中的每个线程执行一个 a[i] * b[i]，然后再进行累加。如下图，考虑到 N 可能非常大，GPU 网格中的线程数量不足以覆盖整个向量，因此需要使用 while 循环，让线程运算多个乘法。 具体而言，在下面的这个循环中，每个线程都会运行一个 grid 中的一次乘法，然后跳转到下一个 grid 继续完成乘法。因此，程序的 while 循环，让每个线程计算相应的乘法后，跨越一个 grid 的长度再完成乘法，最后累加到 cache 数组中（橙色箭头），为了不让自增的 tid 变量超过数组边界，每次累加后还需要在 while 语句中判断一下。相应的代码如下，配合上图相应能更好地理解计算过程。 __global__ void dot(float *c, float *a, float *b) { int tid =...","categories": ["MPI&OpenMP"],
        "tags": ["CUDA"],
        "url": "/mpi&openmp/2021/10/03/cuda-with-dotproduct.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "CUDA 快速入门",
        "excerpt":"CUDA 快速入门 欢迎来到 CUDA 的世界。本文集中讲述了最基本的 CUDA 知识，供自己以及各位速查。 CUDA 与 GPU 编程 近年来，AI、比特币的发展对计算能力提出了无尽的需求。而在这之前，人们就已经发现，用于渲染、加载图形的 GPU 有着不俗的计算能力，为了能更好地利用 GPU 的计算能力，使得 GPU 不仅仅局限于做图形渲染，NVIDIA 率先推出了可编程的 GPU 芯片以及相应的软件框架：CUDA。让显卡可以用于图像计算以外的目的。 在使用 CUDA 进行编程时，往往需要区分哪些数据在 GPU 上计算，哪些数据在 CPU 上计算，还需要考虑数据之间的迁移、传输和存储等。一般地，用主机一词指代 CPU 及其系统内存，而用设备一词指代 GPU 及其片上、板上内存。很多情况下，CUDA 程序里既包含运行在主机上的程序，又包含运行在设备上的程序，且主机与设备之间存在数据传输，在编程时要格外注意这点。 GPU 的计算资源比 CPU 多得多 在开始前，先来简单了解 NVIDIA GPU 的并行计算的工作流程，从代码上看，分为两步： CPU 调用一种称为核函数的函数，该函数由 GPU 执行。 GPU 根据给定的并行量，并行执行该函数。 CUDA 中，执行核函数的一个基本单位被称为线程（thread）。若干个 thread...","categories": ["MPI&OpenMP"],
        "tags": ["CUDA"],
        "url": "/mpi&openmp/2021/10/08/cuda-beginer.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "CUDA 中的矩阵乘",
        "excerpt":"CUDA 中的矩阵相乘 矩阵乘中很多计算步骤都十分相似且数据依赖不复杂，所以特别适合使用 GPU 来计算, 利用 GPU 内部的高度并行性，可极大地提高计算速度。 矩阵乘法 CPU 实现 老规矩，先看看在 CPU 下如何实现矩阵乘法，代码非常简单，直接给出如下： void matMulCpu(float* c, float* a, float* b, int m, int n, int k) { for (int i = 0; i &lt; m; i++) { for (int j = 0; j &lt; n; j++) { float sum...","categories": ["MPI&OpenMP"],
        "tags": ["CUDA"],
        "url": "/mpi&openmp/2021/10/20/cuda-with-matmul.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "信号槽机制的简陋实现",
        "excerpt":"Qt 信号槽机制的简陋实现 最近科研中碰到了一个需要实现信号触发机制的场景。我第一时间想到了 Qt 的信号槽机制。但可惜服务器上没有 Qt 的相关环境，因此需要自己实现一个简陋的信号触发机制。 问题需求 假设 A 类的对象 a 与 B 类的对象 b 需要信号连接。即 a 发出某个信号 S 给 b ，b 接收到该信号后，根据自己所处的状态，决定是否响应该信号，响应即调用成员函数 slot()，不响应即让信号进入等待队列。 具体来说，在构造了对象 a 和 b 后，先使用 connect() 函数连接这两个对象。此后，在程序中任何位置中调用了 a-&gt;signal() 函数后，就视为对象 a 发出了信号 signal 给 b。此时，若 b 繁忙，那么该信号会暂时等待，直至空闲后 b 再调用成员函数 slot()，若 b 空闲，直接调用成员函数 slot()。与 Qt 机制相同，一个槽函数可以被多个信号相连接，一个信号也可以连接多个槽。 naive...","categories": ["Cpp"],
        "tags": ["Qt","Cpp"],
        "url": "/cpp/2021/11/15/Qt-signal-slot.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解 Gem5 之一",
        "excerpt":"深入理解 Gem5 之一 前言 近期研究需要，我开始研究 gem5 模拟器的底层实现 。gem5 模拟器是一款模块化的计算机系统架构研究平台，可用于研究系统级架构、处理器微架构。gem5 是一个具有开放治理模型的社区主导项目，最初是为学术界的计算机体系结构研究而构想的，目前已发展为学术界、工业研究和教学中的计算机系统设计。 根据 gem5 的 paper，gem5 框架融合了 M5 和 GEMS 两者的实现。其中 M5 提供高度可配置的仿真框架，包含了多个 ISA 和多种 CPU 模型；而 GEMS 的详细而灵活的内存系统提供了对多个缓存一致性协议和互连模型的支持。目前，gem5 支持大多数商业 ISA（ARM、ALPHA、MIPS、Power、SPARC 和 x86），包括在其中三个（ARM、ALPHA 和 x86）上 booting Linux。 该项目是许多学术和工业机构共同努力的结果，包括 AMD、ARM、HP、MIPS、普林斯顿大学、麻省理工学院以及密歇根大学、德克萨斯大学和威斯康星大学。在过去的十年中，M5 和 GEMS 已在数百种出版物中使用，并已被下载数万次。 gem5 项目上的高水平协作，再加上组件部分的先前成功和类似 BSD 的自由许可证，使 gem5 成为一个有价值的全系统仿真工具。 在本博客中，我将探讨如何创建、调度事件，并深入理解背后的原理。 创建一个简单的事件 gem5 是一个事件驱动（Event-driven）的模拟器。在事件驱动模型中，每个事件（Event）都有一个回调函数用于处理事件。...","categories": ["Cpp"],
        "tags": ["gem5","Cpp"],
        "url": "/cpp/2022/02/24/gem5-1.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解 Gem5 之二",
        "excerpt":"深入理解 Gem5 之二 紧接着对 gem5 事件机制的研究，本篇博文我重点研究了 gem5 中对象序列化的操作。总的来说，gem5 在对模拟器中的对象序列化前，需要先将其排水（Drain，由于中文翻译的限制，下文统称为 Drain），将不确定的状态先清除，等到一切安排妥当后，再将对象序列化到磁盘中。 Drain DrainState 之前的博文详细解释了事件在 gem5 的作用以及其实现机制。本文开始介绍 gem5 中其他比较重要的机制。 当 gem5 正常运行时，模拟器中的对象在一开始时都处于 DrainState::Running 状态，并用事件驱动模拟器的运行，这会导致很多对象在运行时处于似是而非的状态——部分信号正在传递，部分程序正在运行，缓冲区还待处理等。然而，模拟器总要在某些时刻有所停顿——准备快照（snapshot）、准备移交 CPU 等。这时候就需要引入 drain 的概念，将这些中间态清除。drain 指系统清空 SimObject 对象中内部状态的过程。通常，drain 会在序列化、创建检查点、切换 CPU 模型或 timing 模型前使用。对象会调用 drain() 函数将对象转移到 draining 或 drained 状态。然后进入 drained 状态。下面的代码介绍了四种 drain 状态。 enum class DrainState { Running, /**&lt;...","categories": ["Cpp"],
        "tags": ["gem5","Cpp"],
        "url": "/cpp/2022/03/08/gem5-2.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解 Gem5 之三",
        "excerpt":"深入理解 Gem5 之三——SimObject 之前的两篇博文分别介绍了 gem5 的事件触发机制和序列化问题，它们都和 SimObject 类有密切的联系。正所谓万事俱备，只欠东风。基于目前的理解，我可以更深入地看看 SimObject 类的实现方式。 父类 SimObject 类是一个非常复杂但又十分重要的类，它在 Gem5 中占有极为重要的地位。gem5 的模块化设计是围绕 SimObject 类型构建的。 模拟系统中的大多数组件都是 SimObjects 的子类，如CPU、缓存、内存控制器、总线等。gem5 将所有这些对象从其 C++ 实现导出到 python。使用提供的 python 配置脚本便可以创建任何 SimObject 类对象，设置其参数，并指定 SimObject 之间的交互。理解该类的实现有助于我们理解整个 gem5 模拟器的运作逻辑。我们先从它的父类开始讲起，它一共有 5 个父类：EventManger、Serializable、Drainable、statistics::Group、Named。 class SimObject : public EventManager, public Serializable, public Drainable, public statistics::Group, public Named 其中仅有 statistics::Group...","categories": ["Cpp"],
        "tags": ["gem5","Cpp"],
        "url": "/cpp/2022/03/13/gem5-3.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解 Gem5 之四",
        "excerpt":"Gem5 中的内存系统 本文部分内容参考官方文档中关于内存系统的相关说明，内存系统中创建 SimObjects MemObjects 之前的 gem5 版本中，所有连接到内存系统的对象都派生于 MemObject 类。然而，在最新版本（v21.0.1.0）中，该类被删去了。 那么现在用什么类呢？猜测是 SimObject Ports 在深入研究内存系统之前，我们应该首先理解 gem5 中的端口类 Port。因为所有在内存系统内的对象都要通过端口来建立连接，因而它们总是成对出现，这使得 gem5 的设计更加模块化。 memory system modes Port 类实现了三种不同的内存系统模式：时序（timing）、原子（Atomic）和功能（functional），最重要的模式是时序模式。时序模式是产生正确仿真结果的唯一模式。其他模式仅在特殊情况下使用： Atomic mode 原子模式常用于快进到感兴趣的模拟区域，以及预热缓存，这种模式假设在内存系统中不会产生任何事件。相反，所有的内存请求都通过一个长调用链执行。除非它将在快进或模拟器预热期间使用，否则不需要实现对内存对象的原子访问。 Functional mode 功能模式更适合描述为调试模式。功能模式用于从 host 读取数据到模拟器内存等操作。它在 Syscall Emulation(SE) 模式中被大量使用。例如，函数模式使用 process.cmd 从 host 中加载二进制文件，这样模拟系统就可以访问它。不论数据在何处，函数的读操作总能返回最新的数据，而其写操作中需要更新所有可能的有效数据（比如多个有效的缓存块中）。 Port Port 类（端口）是 SimObject 之间的交互接口。在 gem5 中，Port 类是所有交互接口类（包括网络连接以及硬件模块端口连接等）的父类，其地位可见一斑。 class Port {...","categories": ["Cpp"],
        "tags": ["gem5","Cpp"],
        "url": "/cpp/2022/04/02/gem5-4.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "深入理解 Gem5 之五",
        "excerpt":"Gem5 中的 Cache CacheBlock replaceable Entry ReplaceableEntry 类描述了 Cache 中具有可替换功能的基本项。除表示该项在 Cache的位置（特定组和路）外，还包含了指向 ReplacementData 智能指针。注意，在使用 ReplaceableEntry 类之前，必须由 replacement_policy 来将 ReplacementData 实例化。 /* The replacement data needed by replacement policies. Each replacement policy * should have its own implementation of replacement data. */ struct ReplacementData {}; class ReplaceableEntry { protected: // Set &amp;...","categories": ["Cpp"],
        "tags": ["gem5","Cpp"],
        "url": "/cpp/2022/06/18/gem5-6.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "awk 从入门到入土",
        "excerpt":"awk 从入门到入土 何为 awk ？ awk 是一种用于文本处理、数据提取分析和报告常用的 linux 工具（命令）。与 sed 和 grep 一样，在日常编程和使用 linux 操作系统中，它是提升效率的法宝。 awk 处理的数据可以来自标准输入(stdin)、文件，或其它命令的输出。它支持用户自定义函数和动态正则表达式等功能，是linux/unix下的一个强大编程工具。它在命令行中使用，但更多是作为脚本来使用。awk 内有完备的“语言”，可以写出数组、函数、分支等复杂结构，且语法与 C 语言的相通之处。相比 sed grep 命令，灵活性是 awk 最大的优势，但其包含了复杂语法、正则表达式、内置变量（函数）也让很多人望而生畏。 另外，该工具之所以叫 AWK 是因为其取了三位创始人 Alfred Aho，Peter Weinberger, 和 Brian Kernighan 的 Family Name 的首字符。 awk 到底能做什么？ awk 功能强大，特点繁杂，若开篇介绍用法会让该博文显得杂乱无章，让人毫无阅读兴趣。我尝试抛开复杂的语法和命令格式，先利用几个例子让读者了解一下 awk 的工作方式和功能是怎样的。相信你一定会被 awk 强大的信息提取能力所折服。当你熟练掌握 awk 后，就再也不会烦恼于数据的格式化输出和信息提取了😄。 awk 对文件操作...","categories": ["Miscellaneous"],
        "tags": ["linux"],
        "url": "/miscellaneous/2022/07/19/awk.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "推荐系统简介",
        "excerpt":"推荐系统简介——对主要推荐算法的概述 本文翻译并整理自 Baptiste Rocca 的文章 Introduction to recommender systems. 引言 在过去的几十年里，随着 Youtube、亚马逊、Netflix 和许多其他此类网络服务的崛起，推荐系统在我们的生活中占据了越来越多的位置。从电子商务（向客户推荐他们感兴趣的文章）到在线广告（向用户推荐正确的内容，符合他们的喜好），推荐系统在我们的日常网络冲浪中已经不可避免。 用最通俗易懂的语言讲，推荐系统指的是旨在向用户推荐相关物品的算法（这物品可以是要看的电影，要阅读的文本，要购买的产品或其他取决于行业的东西）。 推荐系统在某些行业中非常重要，因为它们可以带来大量收入，或者令某项产品从竞争对手中脱颖而出。提一个可以证明推荐系统的重要性的例子，几年前，Netflix组织了一次挑战赛（“Netflix奖”），目标是参加者要制作一个比Netflix自己的算法表现更好的推荐系统，奖金为100万美元。 在本文中，我们将介绍不同的推荐系统范例。对于它们中的每一个，我们将介绍它们是如何工作的，描述它们的理论基础，并讨论它们的优缺点。 大纲 在第一节中，我们将概述两种主要的推荐系统范式：协同过滤（collaborative filtering）和基于内容的方法（content based methods）。接下来的两节将描述协同过滤的各种方法，例如用户——用户、物品——物品和矩阵分解。下面的部分将专门讨论基于内容的方法及其工作方式。最后，我们将讨论如何评估一个推荐系统。 协同过滤 VS 基于内容 推荐系统的目的是向用户推荐相关的物品。为了实现这一任务，主要有两大类方法:协同过滤方法和基于内容的方法。在深入研究特定算法的细节之前，让我们简要讨论一下这两种主要的范式。 协同过滤算法 协同过滤方法凭借用户和物品之间的历史交互记录，从而产生新的推荐的方法。这些交互记录被存储在所谓的“用户-物品交互矩阵”（user-item interactions matrix）中。 然后，协同过滤算法主要基于以下认识：过去的用户——物品交互记录足以检测出相似的用户和/或相似的物品，并可以基于这些估计的相似性做出准确的预测。 协同过滤算法分为两个子类别，通常称为基于内存的方法和基于模型的方法。基于内存的方法直接使用记录的交互值，若没有任何模型时，基本上使用最近邻居搜索（例如，从感兴趣的用户中找到最接近的用户，并将最受欢迎的物品推荐给该用户）。基于模型的方法假设了一个潜在的“生成”模型，该模型解释了用户与物品之间的交互关系，并试图以此做出新的预测。 协同过滤的主要优点是，它们不需要用户或物品的相关信息，只需要用户与物品之间发生的互动关系，因此可以在许多情况下使用。此外，用户与商品的互动越多，新的推荐就越准确：对于固定的用户和商品集，随着时间的推移，新的互动记录会带来新的信息，使系统越来越有效。 然而，协同过滤只考虑过去的交互记录进行推荐。上述优点存在的同时也会带来“冷启动问题”：算法不可能向新用户推荐任何东西，也不可能向任何用户推荐一个新物品，许多用户或物品的交互太少，无法有效处理。这一缺陷可以通过不同的方式解决：向新用户推荐随机物品或向随机用户推荐新物品（随机策略），向新用户推荐热门物品或向最活跃用户推荐新物品（最大期望策略），向新用户推荐一组不同的物品或向一组不同的用户推荐新物品（探索策略），最后，对用户或物品的早期使用非协同过滤的方法。 基于内容的方法 与仅依赖用户-物品交互的协同过滤方法不同，基于内容的方法使用与用户和/或物品有关的额外信息。面对一个推荐电影的算法系统，那么这些额外的信息可以是，用户的年龄、性别、工作或任何其他个人信息，以及类别、主要演员、时长或电影的其他特征。 然后，基于内容的方法的核心思想是尝试建立一个模型，基于上述可用的“特征”，解释所观察到的用户——物品交互关系。仍沿用上例，我们将尝试模拟这样一个事实，年轻女性倾向于给一些电影评分更高，年轻男性倾向于给另一些电影评分更高，等等。如果我们设法得到这样的模型，那么，对用户进行新的预测是非常容易的:我们只需要查看该用户的个人资料(年龄、性别等)，并根据这些信息确定要推荐的相关电影。 与协同过滤相比，基于内容的方法较少受到冷启动问题的困扰：新用户或物品可以通过其特征（内容）进行描述，因此可以为这些新实体提供相关建议。只有新用户或具有之前未见功能的道具才会受到这种缺陷的影响，但一旦系统足够老，这种情况几乎不会发生。 模型，偏差与方差 让我们更多地关注一下前面提到的方法之间的主要区别。特别地，让我们看看建模水平对偏差和方差的影响。 在基于内存的协同过滤方法中，不存在潜在模型。算法直接作用与用户-物品交互记录：例如，用户由他们与物品的交互作用表示，并使用对这些表示的最近邻居搜索来产生建议。由于没有假定潜在模型，这些方法理论上具有低偏差但高方差。 在基于模型的协同过滤中，存在一些潜在的交互模型。该模型经过训练，可以从它自己的用户和物品表示中重建用户——物品交互值。然后根据这个模型提出新的建议。由模型提取的用户和物品潜在特征联系，具有难以为人类解释的数学意义。由于假设了用户——物品交互的（相当自由的）模型，该方法理论上比假设没有潜在模型的方法有更高的偏差，但方差更低。 最后，在基于内容的方法中，也存在一些潜在的交互模型。然而，这里的模型提供了定义用户和/或物品表示的内容：例如，用户由给定的特征表示，我们尝试为每个物品建模喜欢或不喜欢该物品的用户配置文件类型。对于基于模型的协作方法，本文假设了一个用户-物品交互模型。然而，该模型受到更多约束(因为给出了用户和/或物品的表示)，因此，该方法倾向于具有最大的偏差但方差最小。 基于内存的协同过滤方法 用户——用户和物品——物品方法的主要特征是，他们只使用来自用户——物品交互矩阵的信息，并且他们假设没有模型来产生新的推荐。 用户——用户 为了给用户做出新的推荐，用户——用户方法粗略地去识别具有最相似的“交互信息”（最近的邻居）的用户，以便将这些邻居中最受欢迎的物品（并且对该用户来说是“新”的）推荐给他。这种方法被称为“以用户为中心”，因为它基于用户与物品的交互来表示用户，并评估用户之间的距离。 假设我们要为某位用户进行推荐。首先，用户的交互记录数据组成的向量就可以表示该用户（交互矩阵中的“一行”）。然后，我们可以计算该用户和所有其他用户之间的某种“相似性”。相似度衡量是这样的，在相同的物品上有相似交互数据的两个用户，就应该被认为是相似的。一旦计算出每个用户的相似度，我们就可以保留该用户的 K 个最邻近邻居，然后将其中最受欢迎的商品推荐给他（当然不包含该用户已经与之交互的物品）。 请注意，在计算用户之间的相似度时，应该仔细考虑“共同交互”的数量（两个用户已经考虑了多少项?）实际上，大多数时候，我们希望避免以下情况：该用户与只有一次共同交互的人有100%的匹配，比其与有100次共同交互的用户但“只有”98%匹配的人“更接近”。所以，我们认为两个用户是相似的，如果他们以相同的方式与许多共同的物品进行交互(相似的评级，相似的悬停时间……)。...","categories": ["Miscellaneous"],
        "tags": ["recommender systems"],
        "url": "/miscellaneous/2023/02/06/recommender_systems.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "CUDA 进阶之内存优化",
        "excerpt":"CUDA 进阶之内存优化 关于主机与设备间的数据传输 前言 内存优化是性能优化主题中最重要的部分，其目标是通过最大化带宽来提高硬件的使用率和满载率。在具体实践中，我们期望尽可能多地使用快速内存，而尽可能少地使用慢速内存。本博客主要讨论主机与设备间的数据迁移以及涉及到的各种内存，并试图回答如何最好地设置、使用内存以提高 CUDA 程序的运行效率这一问题。 以英伟达的 V100 设备为例，设备间内存的理论最大带宽（898 GB/s）远比设备与主机间的理论最大带宽（16 GB/s for PCIe3x16）快得多。因此，为获得最佳性能，应尽量减少主机与设备间的数据传输，即使是 GPU 上运行的内核与主机的 CPU 相比没有任何优势。更多情况下，我们应在设备内存中创建中间数据结构， 交由设备计算，最后在没有映射到主机内存的情况下销毁。 此外，由于每次传输都有相关的固定开销，因此将许多小数据包装成一个较大的数据包进行传输，会比多次传输小数据包要好得多！即使这样做需要：1）将不连续的内存区域打包到一个连续的缓冲区，2）消耗一定资源来封装和解封。 最后，主机和设备之间的高带宽通常是通过 page-locked（或 pinned）来实现，接下来我们将重点阐述 pinned 内存。 pinned 内存 原理 pinned 内存有时也会被称作为页锁定内存，或者固定内存。本文中皆以 pinned 内存指代。 pinned 内存是相对于一般的页可分配内存而言的。一般地，主机上的内存都会被操作系统采用分页机制管理，我们平时编程中遇到的“地址”事实上都是虚拟地址，需要通过地址转换才能获得物理地址（有时甚至不在物理内存中，会发生缺页），进而获得数据。 因此对于页可分配内存，由于 GPU 获得的地址是虚拟内存的地址，不可直接获得对应物理内存页上的数据，因此要想实现主机与设备间的数据传输，必须先将页可分配内存上的数据转移到一个临时的 pinned 内存页上，再实现内存传输，如下图。 而对于 pinned 内存，操作系统不会对其进行分页和交换操作，其内存页会被“固定存储”在物理内存中，GPU 获得的地址就是物理地址，因此可直接通过 DMA 机制在主机和 GPU 之间快速传输数据。 正因如此，pinned 内存传输速率接近理论峰值。例如，在使用 PCIe3x16...","categories": ["MPI&OpenMP"],
        "tags": ["CUDA"],
        "url": "/mpi&openmp/2023/09/10/cuda-mem.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "大话 transformer 架构",
        "excerpt":"大话 transformer 架构 前言 去年 OpenAI 发布的 ChatGPT3 开启了新一轮对 AI 研究的热潮，不过，这一切的故事还要从 2017 年（甚至更早）说起。自从 deepMind 团队发表的 “Attention is all your need” 论文提出了 transformer 架构后，绝大部分有影响力模型的基础架构都基于的 transformer（比如基于 decode 的GPT、基于 encode 的 BERT、基于 encode-decode 的 T5 等等），具体有哪些模型可以来看看 huggingface 罗列的 故事的开始 与大多数博客一样，我们需要请出论文中最有名的架构图来解释 transformer： 上面的架构图可以简单地分成两个部分，encoder（左边）和 decoder（右边）。而组成他们的组件又有一些共通之处，因此 transformer 架构其实没有大家想的那样复杂。 虽然现在 transformer 被应用于非常多的 AI 领域，但起初它是在自然语言处理 (NLP) 中针对序列到序列 (seq2seq)...","categories": ["AI"],
        "tags": ["transformer","AI"],
        "url": "/ai/2023/10/22/transformer.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "huggingface下llama代码细读（上）",
        "excerpt":"huggingface下llama代码细读（上） llama 是什么 llama 是 meta 公司于 2023 年初发布的一个大语言模型。根据官网上对llama的介绍，meta 公司发布的语言模型可以帮助那些无法拥有大量计算资源的研究人员小成本地进入 AI 大模型领域进行研究。也正因如此，llama 成为了除 ChatGPT 外最有名的大模型之一。为了满足不同级别的研究需要，meta 向全社会提供了经过初步训练的多个不同权重大小的模型数据（7B、13B、33B 和 65B）。 从论文中看，llama 使用了世界上高质量的文本数据进行训练，使用到的训练数据包括： English CommonCrawl [67%] C4 [15%] Github [4.5%] Wikipedia [4.5%] Gutenberg and Books3 [4.5%] ArXiv [2.5%] Stack Exchange [2%] llama 使用的分词（Tokenizer）算法是由 SentencePiece 实现的 Byte-pair-encoding(BPE) 算法，所有的训练数据大约包含了 1.4T 个 tokens。每个 token 在训练期间仅使用一次，但维基百科和图书等数据除外。在发布 llama...","categories": ["AI"],
        "tags": ["Transformer","AI"],
        "url": "/ai/2023/10/30/huggingface1.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "大模型推理优化技术之显存优化",
        "excerpt":"大模型推理优化技术之 KV Cache 前言 推理大模型时充分榨干 GPU 的性能是每个程序员所追求的。不过，要做到这一点，我们首先需要知道大模型推理的具体步骤，并分析它的性能瓶颈是什么，是受到算力限制还是内存限制，从而方便我们下一步的优化。而目前业内认为 LLM 模型的推理性能主要受限于内存。 KV Cache 是大模型推理性能优化的最常用技术。该技术可以在不影响计算精度的前提下，以空间换时间，提高推理性能。目前业界主流 LLM 推理框架均默认支持并开启了该功能。在咱们之前介绍 huggingface llama 实现的博客中有提到过，当 use_cache = True 时，KV cache 功能就默认打开。那么什么是 KV cache 呢？它又是如何加速大模型推理性能的呢？ 原理 要尝试理解 KV cache，就不得不提及当前大模型的一般推理过程。事实上，目前大多数热门的 LLM （例如 GPT-3）的推理部分本质上是一个译码器（decoder）。它们针对输入的序列文本，一个词一个词地输出文本。具体地说，这些 LLM 接受一系列 token 作为输入，并以自回归方式输出后续的 token，直到它们满足条件要求（例如，已达到生成的 token 数量或遇到停止词），或直到它生成特殊的标记标志着生成过程的结束。此过程涉及两个阶段：预填充阶段（prefill phase）和译码阶段（decode phase）。 所谓 token 实际上描述模型中未被转化成人类语言的序列文本，参见下面的解释： tokens are the atomic parts...","categories": ["AI"],
        "tags": ["Transformer","AI"],
        "url": "/ai/2023/11/30/LLM-inference1.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "huggingface下llama代码细读（下）",
        "excerpt":"huggingface下llama代码细读（下） 前言 上篇博客我们重点介绍了 llama 模型，并讨论了它的架构、基件和中间件等。碍于篇幅关系，我将 transformer llama 的代码解读下半部分移动到了本篇博客中，要想从头开始的读者们可以参考这篇博客。 llama 模型 译码层 在了解了构成 llama 的基本组件后，要如何搭建起大模型的“高楼大厦”？当然不能一步登天，而要步步为营。在大模型推理阶段，输入的文本序列会经过多个译码层，执行自注意力等运算。译码层由 LlamaDecoderLayer 类表示，它将 LlamaAttention LlamaRMSNorm 等基件组合起来。上图所展示的架构就是一个译码层的架构。 class LlamaDecoderLayer(nn.Module): def __init__(self, config: LlamaConfig): super().__init__() self.hidden_size = config.hidden_size self.self_attn = ( LlamaAttention(config=config) if not getattr(config, \"_flash_attn_2_enabled\", False) else LlamaFlashAttention2(config=config) ) self.mlp = LlamaMLP(config) self.input_layernorm = LlamaRMSNorm(config.hidden_size, eps=config.rms_norm_eps) self.post_attention_layernorm =...","categories": ["AI"],
        "tags": ["Transformer","AI"],
        "url": "/ai/2023/11/30/huggingface2.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "Llm Inference2",
        "excerpt":"Flash Attention   Softmax 分组计算   矩阵乘法的分组计算我们很熟悉，但注意力计算还涉及到 softmax 函数的分组计算，这就有点不太直观了，我们需要使用数学工具好好推理一番。   ","categories": [],
        "tags": [],
        "url": "/2024/01/01/LLM-inference2.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "大模型采样方法与并行扫描算法",
        "excerpt":"Top p 采样与并行扫描 top p 采样 在 transformers 算出下一个词的概率之后，从中选出一个好的输出 token 也是不可或缺的重要环节，但这一环节往往被架构中的“大明星” —— transformers 夺走了过多眼球，以至于少有人注意到，译码策略(decoding strategies)也有可能成为大模型推理的性能瓶颈。 本博客重点关注 huggingface transformer 框架上常用的采样方法—— top-p。 其采样的思路是：在选取每个输出的 token 时，从大到小地累积概率，选中 token，直至超过阈值 p ，再从被选中的 token 集合中进行随机采样。这种方法也被称为核采样（nucleus sampling），因为它只关注概率分布的核心部分，忽略其他的 token 。例如，如果 p=0.15，我们将 token 概率从大到小地累积，达到 0.15 时正好是前两个 token （如下图），于是我们会从这两个 token 中 选择一个 token，而不考虑其他 token。这样可以避免采样到一些不合适或不相关的单词，同时也可以保留一些有趣或有创意的单词。 top-p 值通常设置为比较高的值（如0.75），目的是限制低概率 token 的长尾。我们可以同时使用 top-k 和 top-p。如果...","categories": ["AI"],
        "tags": ["Transformer","AI"],
        "url": "/ai/2024/01/15/LLM-topp.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "THUDM/chatglm代码细读",
        "excerpt":"THUDM/ChatGLM代码细读 ChatGLM 是什么 ChatGLM-6B 是一个基于 General Language Model (GLM) 架构的开源、支持中英双语的对话语言模型。 由清华大学研发，截至笔者更新时已经发布了第三代 ChatGLM3。ChatGLM 模型使用了和 ChatGPT 相似的技术，使用约 1T 标识符的中英双语训练，再辅以监督微调、反馈自助、人类反馈强化学习等技术炼成。 清华大学团队和智谱AI可以说浑身是肝，发布了许多大模型： ChatGLM2-6B 更强大的性能：升级了 ChatGLM2-6B 的基座模型。ChatGLM2-6B 使用了 GLM 的混合目标函数，经过了 1.4T 中英标识符的预训练与人类偏好对齐训练，评测结果显示，相比于初代模型，ChatGLM2-6B 在 MMLU（+23%）、CEval（+33%）、GSM8K（+571%） 、BBH（+60%）等数据集上的性能取得了大幅度的提升，在同尺寸开源模型中具有较强的竞争力。 更长的上下文：使用 FlashAttention 技术将基座模型的上下文长度（Context Length）由 ChatGLM-6B 的 2K 扩展到了 32K，并在对话阶段使用 8K 的上下文长度训练。对于更长的上下文，我们发布了 ChatGLM2-6B-32K 模型。LongBench 的测评结果表明，在等量级的开源模型中，ChatGLM2-6B-32K 有着较为明显的竞争优势。 更高效的推理：使用 Multi-Query Attention 技术获得了更快的推理速度和更低的显存占用：在官方的模型实现下，推理速度相比初代提升了 42%，INT4...","categories": ["AI"],
        "tags": ["Transformer","AI"],
        "url": "/ai/2024/01/27/huggingface3.html",
        "teaser": "/assets/img/teaser.jpg"
      },{
        "title": "更好地设置 CUDA Kernel 执行配置",
        "excerpt":"设置 CUDA Kernel 执行配置 CUDA kernel 函数调用说明 在调用 CUDA 核函数时，我们经常会遇到如下调用形式： kernel_fun1&lt;&lt;&lt;grid_size, block_size&gt;&gt;&gt;(arg1, arg2, arg3) kernel_fun2&lt;&lt;&lt;grid_size, block_size, shm_size, stream&gt;&gt;&gt;(arg1, arg2, arg3); 其中，&lt;&lt;&lt;grid_size, block_size, shm_size, stream&gt;&gt;&gt; 是 CUDA 对 C++ 的扩展，被称之为执行配置(Execution Configuration)。这四个参数的基本含义是： grid_size ：线程块网格(grid)的大小和维度，dim3 类型，grid_size.x * grid_size.y * grid_size.z 就是执行该核函数时的总线程块数。 block_size：线程块(block)的大小和维度，dim3 类型，block_size.x * block_size.y * block_size.z 就是执行该核函数时的一个线程块的线程数。 shm_size：每个线程块可用于动态分配的共享内存的大小（字节数），size_t 类型。该共享内存可以被外部变量使用。 stream：执行该核函数的 CUDA 流(stream)...","categories": ["MPI&OpenMP"],
        "tags": ["CUDA"],
        "url": "/mpi&openmp/2024/02/02/cuda-kernel-grid-size.html",
        "teaser": "/assets/img/teaser.jpg"
      }]
