/**
 * @author [Siwen]
 * @email [623746556@qq.com]
 * @create date 2019-02-19 17:48:28
 * @modify date 2019-02-19 17:48:28
 * @desc 记录页面脚本
 */
import { ui } from '../ui/layaMaxUI'
import api from '../js/api';

export default class Record extends ui.recordUI {
    constructor(){
        super()

        this.canyu.on(Laya.Event.CLICK,this,this.tabSwitch,[1])
        this.wangqi.on(Laya.Event.CLICK,this,this.tabSwitch,[2])
        this.on(Laya.Event.RESIZE,this,this.onResize)
    }

    onEnable():void{
        this.getMyOrders();
        this.getGoodsHistory();
    }

    /**获取参与记录 */
    private getMyOrders(page?:number){
        api.getMyOrders(page).then((res:any)=>{
            this.joinList.repeatY = res.length;
            this.joinList.array = res;
            this.joinList.visible = true;
        }).catch((err:any)=>{
            this.noData.visible = true;
            console.log(err.message);
        })
    }
    /**获取往期记录 */
    private getGoodsHistory(page?:number){
        api.getGoodsHistory(page).then((res:any)=>{
            this.previoousList.repeatY = res.length;
            this.previoousList.array = res;
        }).catch((err:any)=>{
            console.log(err.message);
        })
    }

    /**
     * 切换记录列表
     * @param type 1:参与记录  2：往期记录
     */
    private tabSwitch(type:number){
        if (type === 1) {
            this.canyu.skin = 'comp/guessing/img_tab_active.png';
            this.wangqi.skin = 'comp/guessing/img_tab.png';
            this.getMyOrders()
            if (this.joinList.array === null || this.joinList.array.length === 0) {
                this.noData.visible = true;
            }else {
                this.noData.visible = false;
                this.joinList.visible = true;
            }
            this.previoousList.scrollTo(0)
            this.previoousList.visible = false;
        }else{
            this.wangqi.skin = 'comp/guessing/img_tab_active.png';
            this.canyu.skin = 'comp/guessing/img_tab.png';
            this.getGoodsHistory();
            if (this.previoousList.array === null || this.previoousList.array.length === 0) {
                this.noData.visible = true;
            }else {
                this.noData.visible = false;
                this.previoousList.visible = true;
            }
            this.joinList.scrollTo(0);
            this.joinList.visible = false;
        }
    }

    /**监视屏幕大小变化 */
    onResize(){
        //列表高度适配 = 屏幕高度 - (banner + tabbar)
        this.joinList.height = this.height - 430;
        this.previoousList.height = this.height - 430;
    }
}