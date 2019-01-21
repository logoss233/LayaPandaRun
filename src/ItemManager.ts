class ItemManager{
    game:Game
    itemPlace:Sprite
    itemList=[]
    floorList=[]
    eatItemList=[]
    enemyList=[]
    bgItemList=[]

    start(game){
        this.game=game
        this.itemPlace=game.itemPlace
    }

    append(item:Item){
        this.itemList.push(item)
        var list=this._getTypeList(item.itemType)
        if (list==null){
            console.log("添加物品，类型不合法")
            return
        }
        list.push(item)
        this.itemPlace.addChild(item)
    }
    remove(item:Item){
        var index=this.itemList.indexOf(item)
        if(index==-1){
            console.log("删除物品，没有找到")
            return
        }
        this.itemList.splice(index,1)
        var list=this._getTypeList(item.itemType)
        if (list==null){
            console.log("删除物品，类型不合法")
            return
        }
        index=list.indexOf(item)
        if (index==-1){
            console.log("删除物品，没有找到")
            return
        }
        list.splice(index,1)
        this.itemPlace.removeChild(item)
        return item
    }
    _getTypeList(type){
        var list=null
        if (type=="floor"){
            list=this.floorList 
        }else if(type=="eat"){
            list=this.eatItemList
        }else if(type=="enemy"){
            list=this.enemyList
        }else if(type=="bg"){
            list=this.bgItemList
        }
        return list
    }

    update(camX){
        //移除检测
        var tmpList=this.itemList.concat()
        for(let i=0;i<tmpList.length;i++){
            var item=tmpList[i]
            item.removeCheck(camX)
        }

        //更新物品
        for(let i=0;i<this.eatItemList.length;i++){
            var item=this.eatItemList[i]
            item.update()
        }
    }
}