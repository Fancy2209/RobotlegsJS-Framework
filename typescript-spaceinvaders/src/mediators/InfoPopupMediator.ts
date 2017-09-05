import { FlowService } from "./../services/FlowService";
import { InfoPopup } from "./../views/InfoPopup";

import { Mediator } from "@robotlegsjs/pixi";
import { inject, injectable } from "@robotlegsjs/core";

@injectable()
export class InfoPopupMediator extends Mediator<InfoPopup> {

    @inject(FlowService)
    public service: FlowService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.closeButton, "click", this.closeButton_onClick, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }
    private closeButton_onClick(e: any): void {
        this.service.closePopup();
        this.service.showStartingPopup();
    }
}
