import ElementUI from "element-ui"
import { MessageType } from "element-ui/types/message"

function popMessage(text: string, type?: string, center?: boolean, showClose?: boolean) {
    return ElementUI.Message({ message: text, type: type as MessageType || 'success', center: center || true, showClose: showClose || true })
}
export default popMessage