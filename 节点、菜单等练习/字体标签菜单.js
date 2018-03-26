
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //开始按钮点击事件
        //设置全局字体尺寸
        var startMenuItem = new cc.MenuItemFont("开始",function(){
            cc.log("开始按钮点击了！");
        },this);

        //设置按钮点击事件
        var setMenuItem = new cc.MenuItemFont("设置",function(){
            cc.log("设置按钮点击了！");
        },this);

        //文字
        var ttfLabel = new cc.LabelTTF("其他","",30);
        ttfLabel.setFontFillColor(cc.color.RED);
        ttfLabel.enableStroke(cc.color.YELLOW,2);
        ttfLabel.enableShadow(cc.color.WHITE,15,15,15);

        //其他按钮点击事件
        var otherMenuItem = new cc.MenuItemLabel(ttfLabel,function(){
            cc.log("其他按钮点击了！");
        },this);

        var menu = new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        //设置菜单对齐方式  
        //menu.alignItemsHorizontally();
        //menu.alignItemsHorizontallyWithPadding(size.width*0.3);
        //menu.alignItemsVertically();
        //menu.alignItemsVerticallyWithPadding(50);
        this.addChild(menu);
        //menu.y = size.height*0.3;

        //menu.setPosition(cc.p(0,0));
        menu.x = 0;
        menu.y = 0;

        //设置按钮坐标
        startMenuItem.x = size.width*0.5;
        startMenuItem.y = size.height*0.5;

        setMenuItem.x = size.width*0.2;
        setMenuItem.y = size.height*0.3;

        otherMenuItem.x = size.width*0.8;
        otherMenuItem.y = size.height*0.7;
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

