import { CustomButton } from "./components/CustomButton";
import { NumericStepper } from "./components/NumericStepper";
import { AtlasKeys } from "../utils/AtlasKeys";
import { Texts } from "../utils/Texts";
import { PixiFactory } from "./../utils/PixiFactory";
import { ViewPortSize } from "./../utils/ViewPortSize";

import { TweenLite } from "gsap";
import { Container, Sprite } from "pixi.js";

export class LevelCustomOptionsView extends Container {

    private _titleText: any;
    private _maxColsText: any;
    private _maxRowsText: any;
    private _maxMinesText: any;

    private _backButton: CustomButton;
    public get backButton(): CustomButton {
        return this._backButton;
    }

    private _playButton: CustomButton;
    public get playButton(): CustomButton {
        return this._playButton;
    }

    private _maxColsNS: NumericStepper;
    public get maxColsNS(): NumericStepper {
        return this._maxColsNS;
    }

    private _maxRowsNS: NumericStepper;
    public get maxRowsNS(): NumericStepper {
        return this._maxRowsNS;
    }

    private _maxMinesNS: NumericStepper;
    public get maxMinesNS(): NumericStepper {
        return this._maxMinesNS;
    }

    constructor() {
        super();

        this.createBackground();
        this.createTexts();
        this.createButtons();
        this.createNumericSteppers();
    }

    public animationIn(): void {
        let posY = ViewPortSize.MAX_HEIGHT * .8;
        let tweenTitle = new TweenLite(this._titleText, .3, { alpha: 1 });
        let tweenText1 = new TweenLite(this._maxColsText, .3, { alpha: 1, delay: .1 });
        let tweenNS1 = new TweenLite(this._maxColsNS, .3, { alpha: 1, delay: .2 });
        let tweenText2 = new TweenLite(this._maxRowsText, .3, { alpha: 1, delay: .2 });
        let tweenNS2 = new TweenLite(this._maxRowsNS, .3, { alpha: 1, delay: .3 });
        let tweenText3 = new TweenLite(this._maxMinesText, .3, { alpha: 1, delay: .3 });
        let tweenNS3 = new TweenLite(this._maxMinesNS, .3, { alpha: 1, delay: .4 });
        let tweenButton3 = new TweenLite(this.backButton, .1, { y: posY, delay: .3 });
        let tweenButton4 = new TweenLite(this.playButton, .1, { y: posY, delay: .4 });
    }

    private createNumericSteppers(): void {
        this._maxColsNS = new NumericStepper(6, 13, 9);
        this._maxColsNS.x = 260;
        this._maxColsNS.y = 160;
        this._maxColsNS.alpha = 0;
        this.addChild(this._maxColsNS);

        this._maxRowsNS = new NumericStepper(6, 16, 9);
        this._maxRowsNS.x = 260;
        this._maxRowsNS.y = 230;
        this._maxRowsNS.alpha = 0;
        this.addChild(this._maxRowsNS);

        this._maxMinesNS = new NumericStepper(4, 20);
        this._maxMinesNS.x = 260;
        this._maxMinesNS.y = 300;
        this._maxMinesNS.alpha = 0;
        this.addChild(this._maxMinesNS);
    }

    private createTexts(): void {
        this._titleText = PixiFactory.getTitle(Texts.LEVEL_EDITOR_OPTIONS);
        this._titleText.alpha = 0;
        this.addChild(this._titleText);

        this._maxColsText = PixiFactory.getText(Texts.MAX_COLS);
        this._maxColsText.x = 20;
        this._maxColsText.y = 150;
        this._maxColsText.alpha = 0;
        this.addChild(this._maxColsText);

        this._maxRowsText = PixiFactory.getText(Texts.MAX_ROWS);
        this._maxRowsText.x = 20;
        this._maxRowsText.y = 220;
        this._maxRowsText.alpha = 0;
        this.addChild(this._maxRowsText);

        this._maxMinesText = PixiFactory.getText(Texts.MAX_MINES);
        this._maxMinesText.x = 20;
        this._maxMinesText.y = 290;
        this._maxMinesText.alpha = 0;
        this.addChild(this._maxMinesText);
    }

    private createBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
    }

    private createButtons(): void {
        this._backButton = PixiFactory.getTextButton(Texts.BACK);
        this._backButton.x = ViewPortSize.HALF_WIDTH - 40;
        this._backButton.y = ViewPortSize.MAX_HEIGHT + 100;
        this._backButton.anchor.set(.5);
        this.addChild(this._backButton);

        this._playButton = PixiFactory.getIconButton(AtlasKeys.ICON_RESUME);
        this._playButton.x = ViewPortSize.HALF_WIDTH + 40;
        this._playButton.y = ViewPortSize.MAX_HEIGHT + 100;
        this._playButton.anchor.set(.5);
        this.addChild(this._playButton);
    }
}
