import { FlowService } from "./../services/FlowService";
import { GameService } from "./../services/GameService";
import { PausePopup } from "./../views/PausePopup";

import { injectable, inject } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";

@injectable()
export class PausePopupMediator extends Mediator<PausePopup> {

    @inject(FlowService)
    public flowService: FlowService;

    @inject(GameService)
    public gameService: GameService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.homeButton, "click", this.homeButton_onClick, this);
        this.eventMap.mapListener(this.view.resumeButton, "click", this.resumeButton_onClick, this);
        this.eventMap.mapListener(this.view.retryButton, "click", this.retryButton_onClick, this);
        this.eventMap.mapListener(this.view.downloadButton, "click", this.downloadButton_onClick, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private downloadButton_onClick(e: any): void {
        this.gameService.exportLevelDataCommand();
    }

    private homeButton_onClick(e: any): void {
        this.flowService.setHomeView();
        this.flowService.closePopup();
    }

    private resumeButton_onClick(e: any): void {
        this.flowService.closePopup();
        this.flowService.showStartingPopup();
    }

    private retryButton_onClick(e: any): void {
        this.flowService.closePopup();
        this.gameService.retryCommand();
    }
}
