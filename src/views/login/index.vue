<template>
  <div class="login">
    <div class="leftbox">
      <div class="title">
        <img class="titleimg" src="../../assets/title-log.png" alt />
        <span class="titlename">黑马面面</span>
        <span class="titleline"></span>
        <span class="titlelogin">用户登录</span>
      </div>
      <!-- 表单 -->
      <el-form :rules='rules' class="loginform" ref="form" :model="form" label-width="0px">
        <el-form-item>
          <el-input  placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input  placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item prop='logincode'>
          <!-- 使用栅格系统来添加内容 -->
          <el-row>
            <el-col :span="16">
              <el-input placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="form.logincode"></el-input>
            </el-col>
            <el-col :span="8">
              <img class="loginCode" src="../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item class="checkboxheight">
          <el-checkbox v-model="form.isCheck">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbnt" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbnt" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="rightimg" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
        logincode: "",
        isCheck: false
      },
    //   当前页面上form的验证规则
      rules:{
          password:[
               { required: true, message: '密码为必填项', trigger: 'blur' },
                    { min:5, max: 10, message: '密码长度为5~10', trigger: 'blur' }
          ],
          logincode:[
               { required: true, message: '验证码为必填项', trigger: 'blur' },
                    { min: 4, max: 4, message: '验证码长度为4', trigger: 'blur' }
          ]
      }
    };
  },
  methods: {
    onSubmit() {
        // 调用form的验证方法
      this.$refs.form.validate(valid=>{
            if(valid){
               this.$message({
                   message:'验证通过',
                   type:'success'
               })
          }else{
               this.$message.error('验证失败');
               
          }
      })
    }
  }
};
</script>

<style lang='less'>
.login {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  /* 使用flex布局 */
  display: flex;
  /* 让左右间隔相等 */
  justify-content: space-around;
  /* 设置上下居中 */
  align-items: center;

  .leftbox {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 42px 86px;
    /* padding不会计入宽高中 */
    box-sizing: border-box;

    .title {
      display: flex;
      align-items: center;
      .titleimg {
        width: 22px;
        height: 17px;
      }
      .titlename {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 16px;
        margin-right: 14px;
      }
      .titleline {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .titlelogin {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .loginform {
      margin-top: 29px;
      .loginCode {
        width: 100%;
        height: 40px;
      }
      .checkboxheight {
        .el-form-item__content {
          line-height: 0px;
        }
      }
      .loginbnt {
        width: 100%;
      }
    }
  }

  .rightimg {
    width: 633px;
    height: 435px;
  }
}
</style>