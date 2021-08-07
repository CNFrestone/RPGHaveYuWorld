//
/*:
@plugindesc レベルアップの時に回復するプラグインです。
@author 霧島万
*/




(function(_global) {
	var CPOlevelUp = Game_Actor.prototype.levelUp;
		
	Game_Actor.prototype.levelUp = function() {
		//元の定義
		var defaultLevelUp = CPOlevelUp.call(this);
		//追記
		this._hp = this.mhp;
		this._mp = this.mmp;
						
	};

})();　