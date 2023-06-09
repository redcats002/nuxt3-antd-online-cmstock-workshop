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
        <a-button type="primary" @click.prevent="onSubmit">Login</a-button>
        <a-button style="margin-left: 10px" @click="resetFields"
          >Reset</a-button
        >
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Form } from 'ant-design-vue';

definePageMeta({
  layout: 'authen',
});

export default defineComponent({
  components: {
    LockOutlined,
    UserOutlined,
  },
  setup() {
    const useForm = Form.useForm;
    const router = useRouter();
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
        .then(() => {
          console.log(toRaw(modelRef));
          router.push('/stock');
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
