/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui {
    export class assistantUI extends Laya.Scene {
		public btn_trend:Laya.Image;
		public btn_prebuy:Laya.Image;
		public cateTabList:Laya.List;
		public listTitle:Laya.Sprite;
		public trendList:Laya.List;
		public prebuy:Laya.List;
		public noData:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("assistant");
        }
    }
    export class CardUI extends Laya.View {
		public ani1:Laya.FrameAnimation;
		public cardItem:Laya.Image;
		public sceneImg:Laya.Image;
		public goodsName:Laya.Label;
		public progress:Laya.ProgressBar;
		public soldNum_totalNum:Laya.Label;
		public award:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Card");
        }
    }
    export class grandPrixUI extends Laya.Scene {
		public CountDown:Laya.Label;
		public bonus:Laya.Label;
		public btn_history:Laya.Sprite;
		public rankPrizeHelp:Laya.Sprite;
		public box1:Laya.Sprite;
		public alone1:Laya.Label;
		public Proportion1:Laya.Label;
		public prixList1:Laya.List;
		public box2:Laya.Sprite;
		public alone2:Laya.Label;
		public Proportion2:Laya.Label;
		public prixList2:Laya.List;
		public box3:Laya.Sprite;
		public alone3:Laya.Label;
		public Proportion3:Laya.Label;
		public prixList3:Laya.List;
		public noData:Laya.Image;
		public myRankBox:Laya.Image;
		public myranking:Laya.Label;
		public avatar:Laya.Image;
		public nickName:Laya.Label;
		public uid:Laya.Label;
		public volumeTitle:Laya.Label;
		public volume:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("grandPrix");
        }
    }
    export class guessingUI extends Laya.Scene {
		public price:Laya.Label;
		public goodsValue:Laya.Label;
		public progressSpeed:Laya.ProgressBar;
		public soldNum_soldNum:Laya.Label;
		public period:Laya.Label;
		public numberList:Laya.List;
		public estimate:Laya.Sprite;
		public total:Laya.Label;
		public balanceBox:Laya.Sprite;
		public balance:Laya.Label;
		public btn_buy:Laya.Image;
		public btn_select:Laya.View;
		public random_one:Laya.Label;
		public random_before:Laya.Label;
		public random_after:Laya.Label;
		public random_all:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("guessing");
        }
    }
    export class homeUI extends Laya.Scene {
		public put_in:Laya.FrameAnimation;
		public rocket_show:Laya.FrameAnimation;
		public dom_show:Laya.FrameAnimation;
		public bg_ani:Laya.FrameAnimation;
		public bg_animation:Laya.Sprite;
		public tuichu:Laya.Image;
		public AccountBox:Laya.Image;
		public avatar:Laya.Image;
		public nickName:Laya.Label;
		public rechargeBox:Laya.Image;
		public btnRecharge:Laya.Image;
		public myAmount:Laya.Label;
		public buyHelp:Laya.Sprite;
		public rockerBox:Laya.Sprite;
		public rocketAmount:Laya.Label;
		public countDown:Laya.Sprite;
		public rocketCountDown:Laya.Label;
		public list:Laya.List;
		public putin:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("home");
        }
    }
    export class priHistorySceneUI extends Laya.Scene {
		public total:Laya.Label;
		public listBox:Laya.Panel;
		public box1:Laya.Sprite;
		public alone1:Laya.Label;
		public Proportion1:Laya.Label;
		public prixList1:Laya.List;
		public box2:Laya.Sprite;
		public alone2:Laya.Label;
		public Proportion2:Laya.Label;
		public prixList2:Laya.List;
		public box3:Laya.Sprite;
		public alone3:Laya.Label;
		public Proportion3:Laya.Label;
		public prixList3:Laya.List;
		public noData:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("priHistoryScene");
        }
    }
    export class prixList1UI extends Laya.Scene {
		public no1:Laya.Image;
		public rankNo:Laya.Label;
		public avatar:Laya.Image;
		public nickName:Laya.Label;
		public UID:Laya.Label;
		public todayVolumeTitle:Laya.Label;
		public todayVolume:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("prixList1");
        }
    }
    export class recordUI extends Laya.Scene {
		public canyu:Laya.Image;
		public wangqi:Laya.Image;
		public joinList:Laya.List;
		public previoousList:Laya.List;
		public noData:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("record");
        }
    }
    export class TabbarUI extends Laya.View {
		public tab:Laya.Tab;
		public notice:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Tabbar");
        }
    }
    export class xctjUI extends Laya.Scene {
		public xctj_shuoming:Laya.Sprite;
		public amount:Laya.Label;
		public unit:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("xctj");
        }
    }
}
export module ui.template {
    export class InputPwdDialogUI extends Laya.Dialog {
		public title:Laya.Label;
		public btnClose:Laya.Box;
		public IptPsw:Laya.TextInput;
		public forgetPassword:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/InputPwdDialog");
        }
    }
    export class joinRecordsUI extends Laya.View {
		public period:Laya.Label;
		public noPrize:Laya.Label;
		public prize:Laya.Image;
		public goodsValue:Laya.Label;
		public openTime:Laya.Label;
		public hitCode:Laya.Label;
		public codeList:Laya.Label;
		public award:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/joinRecords");
        }
    }
    export class numberListDOMUI extends Laya.View {
		public bgImg:Laya.Image;
		public code:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/numberListDOM");
        }
    }
    export class previousRecordsUI extends Laya.View {
		public period:Laya.Label;
		public requestType:Laya.Label;
		public goodsName:Laya.Label;
		public txHash:Laya.Label;
		public hitCode:Laya.Label;
		public openTime:Laya.Label;
		public joinedNum:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/previousRecords");
        }
    }
    export class priHistoryUI extends Laya.Scene {
		public rankNo:Laya.Label;
		public nickName:Laya.Label;
		public UID:Laya.Label;
		public Volume:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/priHistory");
        }
    }
    export class prixListUI extends Laya.Scene {
		public no1:Laya.Image;
		public rankNo:Laya.Label;
		public avatar:Laya.Image;
		public nickName:Laya.Label;
		public UID:Laya.Label;
		public todayVolumeTitle:Laya.Label;
		public todayVolume:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/prixList");
        }
    }
    export class TipsDialogUI extends Laya.Dialog {
		public title:Laya.Label;
		public btnViewRecord:Laya.Image;
		public btnContinue:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/TipsDialog");
        }
    }
    export class trendListUI extends Laya.Scene {
		public period:Laya.Label;
		public hitCode:Laya.Label;
		public btnBuy:Laya.Image;
		public odd_even:Laya.Label;
		public isBig:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("template/trendList");
        }
    }
}