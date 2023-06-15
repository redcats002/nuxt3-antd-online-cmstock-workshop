<template>
  <a-card hoverable type="inner">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <a-card-meta class="tw-mb-4">
      <template #title>
        <a-row align="center" justify="center">
          <span class="tw-font-bold tw-text-xl">Login</span>
        </a-row>
      </template>
    </a-card-meta>
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      class="tw-w-[420px]"
    >
      <a-form-item label="Username" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username" placeholder="Username">
          <template #prefix>
            <UserOutlined class="tw-opacity-50"></UserOutlined>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item label="Password" v-bind="validateInfos.password">
        <a-input-password
          v-model:value="modelRef.password"
          placeholder="Password"
        >
          <template #prefix>
            <LockOutlined class="tw-opacity-50"></LockOutlined>
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
        <a-button
          class="tw-w-full tw-mb-2"
          type="primary"
          html-type="submit"
          @click.prevent="onSubmit"
          :loading="authStore.isLoading()"
          >Login</a-button
        >
        <a-button
          type="primary"
          ghost
          class="tw-w-full tw-mb-2"
          @click="$router.push('/register')"
          >Register</a-button
        >
        <a-button class="tw-w-full" @click="resetFields">Reset</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Form } from 'ant-design-vue';
import { useAuth } from '~/stores/useAuth';

export default defineComponent({
  components: {
    LockOutlined,
    UserOutlined,
  },
  setup() {
    definePageMeta({
      layout: 'authen',
    });
    const useForm = Form.useForm;
    const authStore = useAuth();
    const modelRef = reactive({
      username: '',
      password: '',
    });
    const rulesRef = reactive({
      username: [
        {
          required: true,
          message: 'Please input username',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef,
      {
        onValidate: (...args) => console.log(...args),
      }
    );
    const onSubmit = () => {
      validate()
        .then(async () => {
          await authStore.login(toRaw(modelRef));
        })
        .catch((err) => {
          console.log('error', err);
        });
    };

    onMounted(() => {
      modelRef.username = 'admin';
      modelRef.password = '1234';
    });
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      authStore,
    };
  },
});
</script>
