<template>
  <div id="login_box">
    <h2>LOGIN</h2>
    <form @submit.prevent="handleLogin">
      <div id="input_box">
        <input
            type="text"
            v-model="username"
            placeholder="请输入用户名"
            required
        />
      </div>
      <div class="input_box">
        <input
            type="password"
            v-model="password"
            placeholder="请输入密码"
            required
        />
      </div>
      <button type="submit">登录</button>
      <button type="button" class="custom-button" @click="openRegisterModal">
        注册
      </button>
      <br/>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>

  <!-- 用户注册弹窗 -->
  <el-dialog
      :title="isAddFrom ? '新增' : '编辑'"
      :visible.sync="showRegisterModal"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="30%"
      :destroy-on-close="true"
      @close="closeRegisterModal"
  >
  <div v-if="showRegisterModal" class="modal-overlay" @close="closeRegisterModal">
    <div class="modal-content" @click.stop>
      <h3>用户注册</h3>
      <form @submit.prevent="registerUser">
        <div>
          <label for="register-username">用户名</label>
          <input
              type="text"
              v-model="registerUsername"
              id="register-username"
              required
              placeholder="请输入用户名"
          />
        </div>
        <div>
          <label for="register-password">密码</label>
          <input
              type="password"
              v-model="registerPassword"
              id="register-password"
              required
              placeholder="请输入密码"
          />
        </div>
        <div>
          <button type="submit">提交注册</button>
          <button type="button" @click="closeRegisterModal">取消</button>
        </div>
      </form>
    </div>

  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      showRegisterModal: false,
      registerUsername: '',
      registerPassword: ''
    };
  },
  methods: {
    handleLogin() {
      // 登录逻辑
      if (this.username === "" || this.password === "") {
        this.errorMessage = "用户名和密码不能为空";
      } else {
        this.errorMessage = "";
        // 处理登录请求的代码
      }
    },
    openRegisterModal() {
      this.showRegisterModal = true;
    },
    closeRegisterModal() {
      this.showRegisterModal = false;
    },
    registerUser() {
      // 处理注册逻辑
      console.log('注册用户:', this.registerUsername, this.registerPassword);
      // 注册成功后关闭弹窗
      this.closeRegisterModal();
    }
  },
};
</script>

<style scoped>
#login_box {
  width: 20%;
  height: 300px;
  background-color: #00000060;
  margin: auto;
  margin-top: 10%;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
}

h2 {
  color: #ffffff90;
  margin-top: 5%;
}

#input_box {
  margin-top: 5%;
}

span {
  color: #fff;
}

input {
  border: 0;
  width: 60%;
  font-size: 15px;
  color: #fff;
  background: transparent;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}

button {
  margin-top: 50px;
  width: 35%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to left, #30cfd0, #330867);
}

.custom-button {
  margin-top: 50px;
  width: 35%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}

#errorMessage {
  color: red;
  font-size: 0.9em;
  text-align: center;
  margin-top: 10px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: black;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}
</style>
