<template>
    <div>
        <!-- 登录注册按钮 -->
        <a data-toggle="modal"  
            data-target="#login" href="javascript:;">
            <span style="color:#fff">登录</span> 
        </a>
        <a data-toggle="modal"          
            data-target="#register" href="javascript:;">
            <span style="color:#fff">注册</span> 
        </a>
        <!-- 登录窗口 -->
        <div id="login" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-title">
                        <h1 class="text-center" style="color:#676262">登录</h1>
                        <hr>
                    </div>
                    <div class="modal-body"
                    style="width:300px;margin:0 auto;">
                        <el-form
                            :model="ruleForm"
                            status-icon
                            :rules="rules"
                            ref="ruleForm"
                            label-width="0">
                            <el-form-item prop="uname">
                                <el-input 
                                    v-model="ruleForm.uname"
                                    placeholder="请输入用户名"
                                    prefix-icon="el-icon-user"
                                    clearable 
                                    style="width:300px;">
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="upwd">
                                <el-input 
                                    v-model="ruleForm.upwd"
                                    placeholder="请输入密码"
                                    prefix-icon="el-icon-lock"
                                    clearable 
                                    style="width:300px;">
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" round
                                @click="login">登录</el-button>
                                <el-button type="danger" round data-dismiss="modal">取消</el-button>
                            </el-form-item>
                            <div class="text-center">
                                <a href="" data-toggle="modal" data-dismiss="modal" data-target="#register">还没有账号？点我注册</a>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <!-- 注册窗口 -->
        <div id="register" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-title">
                        <h1 class="text-center" style="color:#676262">注册</h1>
                        <hr>
                    </div>
                    <div class="modal-body" style="width:300px;
                    margin:0 auto;">
                        <el-form
                            :model="ruleForm2"
                            status-icon
                            :rules="rules2"
                            ref="ruleForm2"
                            label-width="0"
                            class="demo-ruleForm"
                            >
                            <!-- 用户名 -->
                            <el-form-item prop="uname2">
                                <el-input
                                    v-model="ruleForm2.uname2"
                                    auto-complete="off"
                                    placeholder="6-12位字母或数字" 
                                    prefix-icon="el-icon-user" 
                                    clearable
                                    style="width:300px;">
                                </el-input>
                            </el-form-item>
                            <!-- 密码 -->
                            <el-form-item prop="upwd2">
                                <el-input
                                    v-model="ruleForm2.upwd2"
                                    auto-complete="off"
                                    placeholder="请输入密码,6-12位字母或数字" 
                                    show-password
                                    prefix-icon="el-icon-lock" 
                                    style="width:300px;">
                                </el-input>
                            </el-form-item>
                            <!-- 确认密码 -->
                            <el-form-item prop="confirms">
                                <el-input
                                    v-model="ruleForm2.confirms"
                                    show-password
                                    auto-complete="off" 
                                    placeholder="再次输入密码" 
                                    prefix-icon="el-icon-lock" 
                                    style="width:300px;">
                                </el-input>
                            </el-form-item>
                            <!-- 邮箱 -->
                            <el-form-item prop="email">
                                <el-input 
                                    v-model="ruleForm2.email"
                                    clearable
                                    auto-complete="off"
                                    placeholder="请输入邮箱，例如：123@163.com" 
                                    prefix-icon="el-icon-message" 
                                    style="width:300px;">
                                </el-input>
                            </el-form-item>
                            <!-- 手机 -->
                            <el-form-item prop="phone">
                                <el-input 
                                    v-model="ruleForm2.phone"
                                    auto-complete="off"
                                    placeholder="请输入11位手机号码" 
                                    prefix-icon="el-icon-phone-outline"
                                    clearable
                                    style="width:300px;">
                                </el-input>
                            </el-form-item>
                            <!-- 提交 -->
                            <el-form-item>
                                <el-button type="primary" round @click="submitForm('ruleForm2')">注册</el-button>
                                <el-button type="danger" round data-dismiss="modal">取消</el-button>
                            </el-form-item>
                            <div class="text-center">
                                <a href="" data-toggle="modal" data-dismiss="modal" data-target="#login">已有账号？点我登录</a>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Register",
    data() {
        // 1.登录验证callback
        // 验证用户名
        let checkUname=(rule,value,callback)=>{
            if(value===''){
                callback(new Error('请输入用户名'))
            }else if(!this.checkName(value)){
                callback(new Error('用户名不合法'))
            }else{
                callback()
            }
        };
        // 验证密码
        let checkUpwd=(rule,value,callback)=>{
            if(value===''){
                callback(new Error("请输入密码"))
            }else if(!this.checkPwd(value)){
                callback(new Error('密码不合法'))
            }
            else{
                callback()
            }
        };
        // 2.注册验证callback
        // 验证用户名
        let checkUname2=(rule,value,callback)=>{
            if(value===''){
                callback(new Error('请输入用户名'))
            }else if(!this.checkName2(value)){
                callback(new Error('用户名不合法'))
            }else{
                callback()
            }
        };
        // 验证密码
        let checkUpwd2=(rule,value,callback)=>{
            if(value===''){
                callback(new Error("请输入密码"))
            }
            else if(!this.checkPwd2(value)){
                callback(new Error('密码不合法'))
            }
            else{
                if (this.ruleForm2.confirms !== "") {
                this.$refs.ruleForm2.validateField("confirms");
            }
            callback();
            }
        };
        // 二次验证密码
        let checkConfirms=(rule,value,callback)=>{
            if(value===""){
                callback(new Error("请再次输入密码"))
            }else if(value!==this.ruleForm2.upwd2){
                callback(new Error("两次输入密码不一致!"))
            }else{
            callback();
            }
        };
        // 验证邮箱
        let checkEmail=(rule,value,callback)=>{
            if(value===''){
                callback(new Error('请输入邮箱'))
            }else if(!this.checkMail(value)){
                callback(new Error('邮箱格式不合法'))
            }else{
                callback()
            }
        };
        // 验证手机号
        let checkPhone=(rule,value,callback)=>{
            if(value===''){
                callback(new Error('请输入手机号码'))
            }else if(!this.checkMobile(value)){
                callback(new Error('手机号码不合法'))
            }else{
                callback()
            }
        };
        return {
            ruleForm:{
                uname:"",
                upwd:"",
            },
            ruleForm2:{
                uname2:"",
                upwd2:"",
                confirms:"",
                email:"",
                phone:""
            },
            rules:{
                uname:[{validator:checkUname,trigger:'change'}],
                upwd:[{validator:checkUpwd,trigger:'change'}],
            },
            rules2:{
                uname2:[{validator:checkUname2,trigger:'change'}],
                upwd2:[{validator:checkUpwd2,trigger:'change'}],
                confirms:[{validator:checkConfirms,trigger:'change'}],
                email:[{validator:checkEmail,trigger:'change'}],
                phone:[{validator:checkPhone,trigger:'change'}],
            }
        };
    },
    methods:{
        // 1.登录正则表达式
        // 验证用户名
        checkName(str){
            let reg=/^[a-zA-Z0-9]{3,12}$/i;
            if(reg.test(str)){
                return true;
            }else{
                return false;
            }
        }, 
        // 验证密码
        checkPwd(str){
            let reg=/^[a-zA-Z0-9]{3,12}$/i;
            if(reg.test(str)){
                return true;
            }else{
                return false;
            }
        },
        // 2.注册正则表达式
        // 验证用户名
        checkName2(str){
            let reg=/^[a-z0-9]{6,12}$/i;
            if(reg.test(str)){
                return true;
            }else{
                return false;
            }
        }, 
        // 验证密码
        checkPwd2(str){
            let reg=/^[a-zA-Z0-9]{6,12}$/i;
            if(reg.test(str)){
                return true;
            }else{
                return false;
            }
        }, 
        // 验证邮箱
        checkMail(str){
            let reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if(reg.test(str)){
                return true;
            }else{
                return false;
            }
        },
        // 验证手机号
        checkMobile(str){
            let reg=/^1[3-8]\d{9}$/i;
            if(reg.test(str)){
                return true;
            }else{
                return false;
            }
        },
        // 整个表单验证--再ajax请求注册
        submitForm(ruleForm2) {
            this.$refs[ruleForm2].validate((valid) => {
            if (valid) {
                var u=this.ruleForm2.uname2;
                var p=this.ruleForm2.upwd2;
                var e=this.ruleForm2.email;
                var t=this.ruleForm2.phone;
                var url="reg";
                var obj={uname:u,upwd:p,email:e,phone:t};
                this.axios.get(url,{params:obj}).then(res=>
                    {
                    console.log(res.data.code);
                    if(res.data.code==1){
                        alert("注册成功");
                        this.$refs[ruleForm2].resetFields();
                    }
                });
                // alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        // 重置表单功能
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 进入登录页
        // gotoLogin() {
        //     this.$router.push({
        //         path: "/login"
        //     });
        // }
        
        // 登录--ajax请求
        login(){
            var u=this.ruleForm.uname;
            var p=this.ruleForm.upwd;
            var url="login";
            var obj={uname:u,upwd:p};
            this.axios.get(url,{params:obj}).then(res=>
            {
                console.log(res.data.code);
                if(res.data.code<0){
                    alert("用户名或密码不正确")
                }else{
                    // this.$router.push("/Index")
                    alert("登录成功")
                    // window.parent.location.reload();
                    location.reload(true);
                }
            });
        },
    }
};
</script>
<style scoped>
</style>