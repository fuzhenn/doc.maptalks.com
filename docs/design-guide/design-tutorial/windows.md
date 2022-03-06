---
id: windows
title: 制作发光的窗户
---
夜景中最迷人的是万家灯火，交相辉映，IDE可以通过自发光纹理非常简单的实现窗户发光效果，让我们开始吧。

## 新建VT图层添加建筑

* 启动IDE，新建一个文件，新建VT图层，VT图层里添加建筑数据，单击确认。

![图片](./assets/windows/windows-1.png)

* 在渲染设置中将建筑数据从二维渲染切换到三维渲染。

![图片](./assets/reflection/reflection-2.png)

* 在材质库选择建筑>Facades_05，单击赋予建筑数据材质。

![图片](../../design-guide/basic/assets/texture/texture-6.png)

## 添加夜景环境光

* 环境>环境光>HDR 单击按钮打开环境光库后，选择old_bus_depot环境光。

![图片](./assets/windows/windows-2.png)

* 文件准备就绪，让我们进入下一步。

![图片](./assets/windows/windows-3.jpg)

## 用photoshop制作自发光纹理图片

* 将下面基础色纹理图片用Photoshop打开

![图片](../../design-guide/basic/assets/texture/Facades_05_basecolor.jpg)

* 将想要发亮的窗户填充成白色，其他部分填充成黑色，然后保存为jpg图片。或者只留下白色的部分，其他透明，保存为png格式。

![图片](../../design-guide/basic/assets/texture/texture-14.png)
![图片](./assets/windows/windows-17.png)


* 自发光纹理文件准备就绪，让我们进入下一步。

## 在渲染面板中添加自发光纹理图片

### （1）导入自发光纹理图片

* 回到IDE，选中建筑图层，在渲染面板最下面的“自发光纹理”面板中，单击纹理选项旁边的小图标，打开纹理管理面板。这2种方法都可以。

![图片](./assets/windows/windows-4.png)

* 纹理管理面板单击“导入”，导入1.jpg，然后关掉面板。

![图片](./assets/windows/windows-6.png)

* 回到“自发光纹理”面板中，单击纹理框，在弹出的下拉菜单中，选中1.jpg。

![图片](./assets/windows/windows-7.png)

* 此时建筑物窗户就出现白色了。

![图片](./assets/windows/windows-8.jpg)

### （2）调整泛光效果

* 将渲染面板中的后处理开关“泛光”按钮开启。此时图层面板上建筑图层右边会出现“光”图标，代表该图层泛光按钮是开启状态。

![图片](./assets/windows/windows-9.png)
![图片](./assets/windows/windows-10.png)

* 此时会发现亮度太高，我们跳转到后处理>泛光，将最小阈值从0改成0.95，强度因子从1改成0.1，泛光半径从1改成0.001。
![图片](./assets/windows/windows-11.png)
![图片](./assets/windows/windows-12.png)


* 经过上述步骤，现在我们可以看看最终效果了，是不是还不错？
![图片](./assets/windows/windows-13.jpg)



## 另存为材质球

我们可以将添加了自发光纹理的新材质球另存在材质库里，这样就可以反复使用了，下面是具体步骤。

* 渲染>预览,单击箭头所指的图标，打开另存为面板。

![图片](./assets/windows/windows-14.png)

* 在弹出的另存为面板里填写新材质球的名字和保存类目。

![图片](./assets/windows/windows-15.jpg)

* 确定后，在材质库建筑分类下，你就可以找到刚刚存好的材质球“窗户了。

![图片](./assets/windows/windows-16.png)

