var HelloWorldLayer = cc.Layer.extend({
    label:null,
    second:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var labelTTF = new cc.LabelTTF("玩家1:",'',24);
        labelTTF.x=50;
        labelTTF.y=size.height-50;

        labelTTF.setAnchorPoint(0,1);
        labelTTF.setFontFillColor(cc.color.RED);
        labelTTF.setFontSize(55);
        labelTTF.enableStroke(cc.color.YELLOW,5);
        labelTTF.enableShadow(cc.color.WHITE,15,15,15);

        this.label = labelTTF;
        this.addChild(labelTTF);

        this.schedule(this.timer,1,this.REPEAT_FOREVER,0);

        var labelBMFont = new cc.LabelBMFont("中华人民共和国",res.bitmapFontChinese_fnt);
        //参数说明
        //var labelBMFont = new cc.LabelBMFont("中华人民共和国",res.LabelBitmap_fnt,200,cc.TEXT_ALIGNMENT_RIGHT,cc.p(0,0));
        labelBMFont.x = size.width*0.5;
        labelBMFont.y = size.height*0.3;
        this.addChild(labelBMFont);

        return true;
    },
    timer:function(dt){
        //console.log(dt);
        //if(this.second = 60){
        // this.pn =-1;
        // }
        this.second+=1;
        this.label.setString('玩家：'+this.second);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

