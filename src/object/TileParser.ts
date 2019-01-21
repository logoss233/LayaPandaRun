/**
 * json地图解析器
 */
class TileParser{
    itemPlace:Sprite //生成物品放置的位置
    startX=0  //生成物品初始x
    //一次解析最多生成一个磁铁和一个盾牌
    hasMagnent=false
    hasShield=false

    start(itemPlace:Sprite){
        this.itemPlace=itemPlace
    }
    //解析地图数据，返回floorRight
    parse(jsonObj,startX){
        this.hasMagnent=false
        this.hasShield=false
        this.startX=startX

        for (let i=0;i<jsonObj.layers.length;i++){
            this.parseLayer(jsonObj.layers[i])    
        }
        var floorRight=startX+jsonObj.width*64
        return floorRight
    }

    parseLayer(layer){
        if(layer.type=="tilelayer"){
            this.parseTileLayer(layer)
        }else if(layer.type=="objectgroup"){
            this.parseObjectLayer(layer)
        }
    }
    parseTileLayer(layer){
        var data=layer.data
        var width=layer.width
        for(let i=0;i<data.length;i++){
            //拿出数据
            var d=data[i]
            //0是空的 不处理
            if(d==0){
                continue
            }
            var xx=Math.floor(i%Math.floor(width))
            var yy=Math.floor(i/width)
            var item=this.createItemById(d)
            if(item==null){
                continue
            }
            item.pos(this.startX+xx*64,yy*64)
            $game.itemManager.append(item)
        }
    }
    parseObjectLayer(layer){
        for(let i=0;i<layer.objects.length;i++){
            var obj=layer.objects[i]
            var item=this.createItemById(obj.gid)
            if(item==null){
                continue
            }
            $game.itemManager.append(item)
            var x=this.startX+obj.x
            var y=obj.y-obj.height
            item.pos(x,y)
        }
    }

    createItemById(id){
        //根据id来生成一个物体
        var item
        //生成砖块
        if (id<=8){
            //普通砖块有一定概率变成带叶子的砖块
            if (Math.floor(id)%2==1 && Math.random()<0.2){
                id+=1
            }
            item=Pool.getItemByClass("Floor",Floor)
            item.start(id)
        }else if (id==9){
            //生成金币 有小概率变成磁铁和金币
            var r=Math.random()
            if(r<0.005 && !this.hasMagnent){
                item=Pool.getItemByClass("Magnent",Magnent)
                this.hasMagnent=true
            }else if(r<0.01 && !this.hasShield){
                item=Pool.getItemByClass("Shield",Shield)
                this.hasShield=true
            }else{
                item=Pool.getItemByClass("Coin",Coin)
            }
        }else if(id==11){
            //生成刺
            item=Pool.getItemByClass("Stab",Stab)
        }else if(id==10){
            //生成球
            if (Math.random()<0.5){
                item=Pool.getItemByClass("Ball1",Ball1)
            }else{
                item=Pool.getItemByClass("Ball2",Ball2)
            }
        }
        return item
    }
}