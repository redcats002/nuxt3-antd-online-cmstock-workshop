<template>
  <a-row class="tw-mb-4">
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
                      v-model="modelRef.image"
                      :max-count="1"
                      name="image"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="true"
                      :before-upload="formats.beforeUpload"
                      @change="handleUploadChange"
                      @preview="stockStore.handlePreview"
                    >
                      <div slot="trigger">
                        <loading-outlined v-if="loading"></loading-outlined>
                        <plus-outlined v-else></plus-outlined>
                        <div class="ant-upload-text">Upload</div>
                      </div>
                    </a-upload>
                    <a-modal
                      :visible="stockStore.preview.visible"
                      :title="stockStore.preview.title"
                      :footer="null"
                      @cancel="stockStore.handleCancel"
                    >
                      <img
                        alt="example"
                        style="width: 100%"
                        :src="previewImageUrl!"
                      />
                    </a-modal>
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
import { defineComponent, reactive, toRaw } from "vue";
import { Form, UploadChangeParam, UploadProps, message } from "ant-design-vue";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { useStockStore } from "~/store/stock";
import { useFormats } from "~/composables/useFormats";
// import api from '~/services/api';

export default defineComponent({
  components: {
    PlusOutlined,
    LoadingOutlined,
  },
  setup() {
    definePageMeta({
      layout: "default",
    });
    const useForm = Form.useForm;
    const formats = useFormats();
    const api = useApi();
    const stockStore = useStockStore();
    const loading = ref<boolean>(false);
    const previewImageUrl = ref<string | null>("");
    const modelRef = reactive({
      name: "",
      price: "",
      stock: "",
      image: null as any,
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "Please input name",
        },
        {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur",
        },
      ],
      price: [
        {
          required: true,
          message: "Please input price",
        },
      ],
      stock: [
        {
          required: true,
          message: "Please input amount of stock",
        },
      ],
      image: [
        {
          required: true,
          message: "Please select image",
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
          formData.append("name", name);
          formData.append("stock", stock.toString());
          formData.append("price", price.toString());
          if (modelRef.image) {
            formData.append("image", modelRef.image);
          }
          await api.addProduct(formData);
          router.back();
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    const handleUploadChange = (info: UploadChangeParam) => {
      // for preview
      const res = stockStore.handleChange(info) as any;
      const status = res?.status;
      if (status == "removed") {
        modelRef.image = null;
        previewImageUrl.value = null;
        return;
      }
      previewImageUrl.value = res;

      // for upload
      modelRef.image = formats.convertToFile(info);
    };

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      loading,
      handleUploadChange,
      stockStore,
      previewImageUrl,
      formats,
    };
  },
});
</script>
~/store/stock ~/store/stock
