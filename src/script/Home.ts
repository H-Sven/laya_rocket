/**
 * @author [Siwen]
 * @email [623746556@qq.com]
 * @create date 2019-02-19 17:48:16
 * @modify date 2019-02-19 17:48:16
 * @desc 首页脚本
 */
import { ui } from "../ui/layaMaxUI";
import { Toast } from "../view/Toast";
import { GameModel } from "../js/GameModel";
import utils from '../js/utils'
import api from "../js/api";

import { post } from '../js/http';
import { Socket } from "../js/socket";


export default class Home extends ui.homeUI {
    constructor(){
        super()
        this.btnRecharge.on(Laya.Event.CLICK,this,this.btnRechargeFunc);
        this.buyHelp.on(Laya.Event.CLICK,this,this.openBuyHelp)
        this.putin.on(Laya.Event.CLICK,this,this.putInFunc)
    }
    onEnable():void{
        this.getUserInfo()
        this.rankToday()
        this.getGoodsList()

        // 监视火箭数据变动
        GameModel.getInstance().on('getRocketData',this,(res:any) => {
            this.rocketAmount.text = `${utils.toDecimal(res.potMoney,2)}`
            utils.countDown(res.countDown,((time)=>{
                this.rocketCountDown.text = time
            }))
        })
        // 是否开奖了，开奖刷新商品列表
        GameModel.getInstance().on('isToggle',this,(res:any) => {
            this.getGoodsList()
        })
        
    }

    /**充值 */
    private btnRechargeFunc():void {
        Toast.show('点击充值')
    }
    /**空投 */
    private putInFunc(){
        Toast.show('暂未开放，敬请期待')
    }

    /**获取个人信息 */
    private getUserInfo() {
        return new Promise((resolve,reject) => {
            post('/user/login',{
                orgId:1,
                account:'18900000003'
            }).then((res:any)=>{
                api.getUserInfo().then((res:any)=>{
                    this.nickName.text = res.userInfo.nickName
                    this.myAmount.text =`${utils.toDecimal(res.userInfo.money,2)}`
                    this.avatar.skin = res.userInfo.avatar;
                    // 保存用户信息
                    GameModel.getInstance().setUserInfo(res.userInfo)
                    // 连接websocket
                    Socket.createSocket()
                }).catch((err:any)=>{
                    console.log(err.message);
                    // 获取信息失败更新信息
                    GameModel.getInstance().setUserInfo({
                        userInfo:{}
                    })
                    // 连接websocket
                    Socket.createSocket()
                })
            })
        })
    }

    /**今日大奖池 */
    private rankToday(){
        api.getRankToday().then((res:any)=>{
            this.rocketAmount.text = `${utils.toDecimal(res.potMoney,2)}`
            utils.countDown(res.countDown,((time)=>{
                this.rocketCountDown.text = time
            }))
        }).catch((err:any)=>{
            console.log(err.message);
        })
    }

    /**获取首页商品列表 */
    private getGoodsList(){
        api.getGoodsList().then((res:any)=>{
            this.list.repeatX = res.list.length;
            this.list.array = res.list;
        }).catch((err:any)=>{
            console.log(err.message);
        })
    }

    /**玩法介绍 */
    private openBuyHelp(){
        window.location.href = 'https://m.xyhj.io/buyHelp.html';
    }
}