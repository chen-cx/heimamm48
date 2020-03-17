<template>
 
       <!-- visible：是用来按钮面板的显示和隐藏的 -->
        <el-dialog class="reg-dailog" title="用户注册" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="昵称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="图形码" :label-width="formLabelWidth">
                    <el-row>
                        <el-col :span='17'>
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-col>
                        <el-col :span='7' class="imgbox">
                            <img class="codeimg" src="../../../assets/login_captcha.png" alt="">
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="验证码" :label-width="formLabelWidth">
                    <el-col :span='17'>
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-col>
                        <el-col :span='7' class="imgbox">
                           <el-button class="reg-btn">获取用户验证码</el-button>
                        </el-col>
                </el-form-item>
               
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
  
</template>

<script>
export default {
    data() {
        return {
            // 控制面板的显示和隐藏
            dialogFormVisible: false,
            // 说明文本的宽度
            formLabelWidth:'67px',
            form: {
                name: '',
                region: ''
            },
        
            
        }
        
    },
    methods: {
            // 打开对话框
           
        }
        
}
</script>

<style lang='less'>
    .reg-dailog {
        .el-dialog__header{
            text-align: center;
            padding: 0px;
            height: 53px;
            line-height: 53px;
            // 背景渐变色
            background: linear-gradient(to right,#0dc1ef,#1394fc);
            .el-dialog__title {
                color: #fff;
            }
        }
        .imgbox{
            text-align: right;
            .codeimg {
            width: 143px;
            height: 41px
        }
        }
      .dialog-footer {
          text-align: center
      }
        
    }
</style>