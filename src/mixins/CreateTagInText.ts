import Vue from "vue";
import Component from "vue-class-component";

const map:{[key:string]:string} ={
    'tag name duplicated':'标签名重复',
    'success':'创建成功'
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
                window.alert(map[this.$store.state.createTagError.message]|| '未知错误')
            }

            this.warn = "在这里输入标签名";
        } else {
            this.warn = "标签名不能为空";
        }
        this.newTagName = "";
    }
}
export default CreateTagInText