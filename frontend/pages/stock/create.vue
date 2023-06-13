<template>
  <a-row class="tw-my-4">
    <a-col :span="24">
      <a-card
        class="tw-drop-shadow-md hover:tw-drop-shadow-lg tw-transition-all tw-rounded-lg"
      >
        <a-form
          :label-col="{ span: 24 }"
          :wrapper-col="{ span: 24 }"
          class="tw-w-full"
        >
          <a-row align="center" justify="center">
            <a-col :span="16">
              <a-row
                align="center"
                justify="center"
                class="tw-w-full"
                :gutter="[10, 0]"
              >
                <a-col :span="24" class="tw-flex tw-justify-center">
                  <a-tag
                    color="success"
                    class="tw-font-medium tw-text-xl tw-rounded-lg tw-px-4 tw-mb-4"
                  >
                    NEW PRODUCT
                  </a-tag>
                </a-col>
                <a-col :span="24" class="tw-flex tw-justify-center tw-w-full">
                  <a-form-item
                    label="Name"
                    v-bind="validateInfos.name"
                    class="tw-font-medium tw-w-full"
                  >
                    <a-input
                      v-model:value="modelRef.name"
                      @blur="
                        validate('name', { trigger: 'blur' }).catch(() => {})
                      "
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="12" class="tw-flex tw-justify-center">
                  <a-form-item
                    label="Price"
                    v-bind="validateInfos.price"
                    class="tw-font-medium tw-w-full"
                  >
                    <a-input
                      type="number"
                      v-model:value="modelRef.price"
                      @blur="
                        validate('price', { trigger: 'blur' }).catch(() => {})
                      "
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="12" class="tw-flex tw-justify-center">
                  <a-form-item
                    label="Stock"
                    v-bind="validateInfos.stock"
                    class="tw-font-medium tw-w-full"
                  >
                    <a-input
                      type="number"
                      v-model:value="modelRef.stock"
                      @blur="
                        validate('stock', { trigger: 'blur' }).catch(() => {})
                      "
                    />
                  </a-form-item>
                </a-col>
                <a-col :span="24" class="tw-flex tw-justify-center">
                  <a-form-item
                    label="Image file"
                    v-bind="validateInfos.image"
                    class="tw-font-medium tw-w-full"
                  >
                    <a-upload
                      name="image"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      :before-upload="beforeUpload"
                      @change="handleChange"
                    >
                      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                      <div v-else>
                        <loading-outlined v-if="loading"></loading-outlined>
                        <plus-outlined v-else></plus-outlined>
                        <div class="ant-upload-text">Upload</div>
                      </div>
                    </a-upload>
                  </a-form-item>
                </a-col>

                <a-col :span="24" class="tw-flex tw-justify-center">
                  <a-form-item class="tw-w-full">
                    <a-row justify="end">
                      <a-button @click="$router.push('/stock')"
                        >Cancel</a-button
                      >
                      <a-button @click="resetFields" class="tw-ml-2"
                        >Reset</a-button
                      >
                      <a-button
                        type="primary"
                        class="tw-ml-2"
                        @click.prevent="onSubmit"
                        >Create</a-button
                      >
                    </a-row>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Form, UploadChangeParam, UploadProps, message } from 'ant-design-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
// import api from '~/services/api';
function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
const useForm = Form.useForm;
const api = useApi();
export default defineComponent({
  components: {
    PlusOutlined,
    LoadingOutlined,
  },
  setup() {
    const modelRef = reactive({
      name: '',
      price: '',
      stock: '',
      image: null as any,
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      price: [
        {
          required: true,
          message: 'Please input price',
        },
      ],
      stock: [
        {
          required: true,
          message: 'Please input amount of stock',
        },
      ],
      image: [
        {
          required: true,
          message: 'Please select image',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef
    );
    const router = useRouter();
    const onSubmit = async () => {
      await validate()
        .then(async () => {
          const formData = new FormData();
          const { name, price, stock } = modelRef;
          formData.append('name', name);
          formData.append('stock', stock.toString());
          formData.append('price', price.toString());
          if (modelRef.image) {
            formData.append('image', modelRef.image);
          }
          await api.addProduct(formData);
          router.back();
        })
        .catch((err) => {
          console.log('error', err);
        });
    };

    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }
      if (info.file.status === 'done') {
        modelRef.image = info.file.originFileObj;

        getBase64(info.file.originFileObj!, (base64Url: string) => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }
      if (info.file.status === 'error') {
        loading.value = false;
        message.error('upload error');
      }
    };
    const fileList = ref([]);
    const loading = ref<boolean>(false);
    const imageUrl = ref<string>('');

    const beforeUpload = (file: any) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    };

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      imageUrl,
      loading,
      handleChange,
      fileList,
      beforeUpload,
    };
  },
});
</script>
