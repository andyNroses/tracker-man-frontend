import { Position, Toaster, Intent } from "@blueprintjs/core";

const AppToaster = Toaster.create({
    position: Position.TOP
});

const error = (message) => {
    AppToaster.show({ 
        message: message,
        icon: "warning-sign"
    });
}

export default {
    error
};