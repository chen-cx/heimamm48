<template>
  <!-- visible：是用来按钮面板的显示和隐藏的 -->
  <el-dialog class="reg-dailog" title="用户注册" :visible.sync="dialogFormVisible">
    <el-form :model="form" ref="form" :rules='rules'>
      <el-form-item prop='nickname'  label="昵称" :label-width="formLabelWidth">
        <el-input v-model="form.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  prop='email' label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  prop='phone' label="手机" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  prop='password' label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  prop='code' label="图形码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="17">
            <el-input v-model="form.code" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="7" class="imgbox">
            <img class="codeimg" src="../../../assets/login_captcha.png" alt />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop='logincode'  label="验证码" :label-width="formLabelWidth">
        <el-col :span="17">
          <el-input v-model="form.logincode" autocomplete="off"></el-input>
        </el-col>
        <el-col :span="7" class="imgbox">
          <el-button class="reg-btn">获取用户验证码</el-button>
        </el-col>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
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
      formLabelWidth: "67px",
      form: {
        nickname: "",
        email: "",
        phone: "",
        password: "",
        code: "",
        logincode: ""
      },
      rules: {
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
          { min: 5, max: 10, message: "昵称长度为5~10", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          
        ],

          phone:[
               { required: true, message: '手机为必填项', trigger: 'blur' },
                    { min:11, max: 11, message: '长度11个字符', trigger: 'blur' }
          ],
          password:[
               { required: true, message: '密码为必填项', trigger: 'blur' },
          ]
      , 
          code:[
               { required: true, message: '图形码为必填项', trigger: 'blur' },
                    { min:4, max: 4, message: '长度为4', trigger: 'blur' }
          ],
          logincode:[
               { required: true, message: '验证码为必填项', trigger: 'blur' },
                    { min: 4, max: 4, message: '验证码长度为4', trigger: 'blur' }
          ]
      }
      
    };
  },
  methods: {
    onSubmit(){
        this.$refs.form.validate(valid=>{
            if(valid){
                this.$message({
                    message:'验证通过',
                    type:'success'
                })
            }else{
                    this.$message.error('验证不通过')
                }
        })
    }
  }
};
</script>

<style lang='less'>
.reg-dailog {
  .el-dialog__header {
    text-align: center;
    padding: 0px;
    height: 53px;
    line-height: 53px;
    // 背景渐变色
    background: linear-gradient(to right, #0dc1ef, #1394fc);
    .el-dialog__title {
      color: #fff;
    }
  }
  .imgbox {
    text-align: right;
    .codeimg {
      width: 143px;
      height: 41px;
    }
  }
  .dialog-footer {
    text-align: center;
  }
}
</style>