import Singleton from "../decorators/Singleton";
import ObjectUtil from "../utils/ObjectUtil";

@Singleton
class BoardService {
    private readonly stateFunction: any;

    public constructor(fn: any) {
        this.stateFunction = fn;
    }

    public changeName(name: string) {
        this.stateFunction((state: any) => {
            const newState = ObjectUtil.deepCopy(state);

            newState.name = name;

            return newState;
        });
    }
}

export default BoardService;