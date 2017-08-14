import { ExportLevelDataCommand } from "./../game/commands/ExportLevelDataCommand";
import { CustomLevelModel } from "../game/models/CustomLevelModel";
import { GameEvent } from "./../events/GameEvent";
import { CreateLevelCommand } from "./../game/commands/CreateLevelCommand";
import { GameOverCommand } from "./../game/commands/GameOverCommand";

import { RetryGameCommand } from "./../game/commands/RetryGameCommand";
import { GameManager } from "./../game/managers/GameManager";
import { GameStatus } from "./../game/models/GameStatus";
import { LevelModel } from "./../game/models/LevelModel";
import { GameService } from "./../services/GameService";

import { IConfig, injectable, inject, IEventCommandMap, IContext } from "@robotlegsjs/core";

@injectable()
export class GameConfig implements IConfig {

    @inject(IContext)
    public context: IContext;

    @inject(IEventCommandMap)
    public commandMap: IEventCommandMap;

    public configure(): void {

        this.mapCommands();
        this.mapServices();
        this.mapManager();
        this.mapModels();
    }

    private mapCommands(): void {
        this.commandMap.map(GameEvent.CREATE_LEVEL_COMMAND).toCommand(CreateLevelCommand);
        this.commandMap.map(GameEvent.GAME_OVER_COMMAND).toCommand(GameOverCommand);
        this.commandMap.map(GameEvent.RETRY_GAME_COMMAND).toCommand(RetryGameCommand);
        this.commandMap.map(GameEvent.EXPORT_LEVEL_DATA_COMMAND).toCommand(ExportLevelDataCommand);
    }

    private mapServices(): void {
        this.context.injector.bind(GameService).to(GameService).inSingletonScope();
    }

    private mapManager(): void {
        this.context.injector.bind(GameManager).to(GameManager).inSingletonScope();
    }

    private mapModels(): void {
        this.context.injector.bind(GameStatus).to(GameStatus).inSingletonScope();
        this.context.injector.bind(LevelModel).to(LevelModel).inSingletonScope();
        this.context.injector.bind(CustomLevelModel).to(CustomLevelModel).inSingletonScope();
    }
}
