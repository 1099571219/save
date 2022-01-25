import popMessage from "@/components/lib/popMessage";
import Vue from "vue";
import Component from "vue-class-component";

interface togToast {
    showClose: boolean,
    message: string,
    type: string
}

const map: { [key: string]: togToast } = {
    'tag name duplicated': { showClose: true, message: '标签名重复', type: 'error' },
    'success': { showClose: true, message: '创建成功', type: 'success' }
}

@Component
export class CreateTagInText extends Vue {
    warn = "在这里输入标签名";
    newTagName = ''
    create() {
        const name = this.newTagName.trim();
        if (name) {
            this.$store.commit("createTag", name);
            if (this.$store.state.createTagError) {
                const toastText = (map[this.$store.state.createTagError.message] || { message: '未知错误', type: 'warning' })
                popMessage(
                    toastText.message,
                    toastText.type
                )
            }
            this.warn = "在这里输入标签名";
        } else {
            popMessage("标签名不能为空", 'warning');
        }
        this.newTagName = "";
    }
}
export default CreateTagInText