<script lang="ts">
  import { mapMutations } from "vuex";
  import { TOGGLE_AUTH_MODAL } from "@/store/mutations";

  export default {
    methods: {
      ...mapMutations([TOGGLE_AUTH_MODAL]),
      closeModal(): void {
        this.TOGGLE_AUTH_MODAL(false);
      },
    },
  };
</script>

<template>
  <div class="modal-auth">
    <div class="modal-dialog modal-dialog-auth">
      <button @click="closeModal" class="close-auth">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text" />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password" />
          </label>
        </fieldset>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">
              Войти
            </button>
          </div>
        </div>
      </form>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<style></style>
