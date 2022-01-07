import { MessageType } from "element-ui/types/message";
import Vue from "vue";
import Component from "vue-class-component";

interface tagToast { 
    showClose: boolean,
    message: string,
    type: string
}
const map:{[key:string]:tagToast} ={
    'tag name duplicated': {
        showClose: true,
        message: '标签名重复',
        type: 'warning'
    },
    'success': {
        showClose: true,
        message: '创建成功',
        type: 'success'
    },
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
                const toastText = (map[this.$store.state.createTagError.message]|| { message: '未知错误',type: 'warning'} )
                this.$message({
                    showClose: toastText.showClose || true,
                    message : toastText.message,
                    type : toastText.type as MessageType
                });
                // window.alert(map[this.$store.state.createTagError.message]|| '未知错误')
            }

            this.warn = "在这里输入标签名";
        } else {
            this.warn = "标签名不能为空";
        }
        this.newTagName = "";
    }
}
export default CreateTagInText