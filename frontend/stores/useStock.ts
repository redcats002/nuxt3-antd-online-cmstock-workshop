import { UploadChangeParam, UploadProps, message } from "ant-design-vue";
import lodash from "lodash";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { FetchingStatus } from "~/models/FetchingStatus";
import { Product } from "~/models/product.model";

export const useStockStore = defineStore("stock", () => {
  // state
  const stocks = ref<Product[]>([]);
  const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init);
  const autoCompleteOptions = ref([]);
  const preview = reactive({
    visible: false,
    title: "",
  });
  const api = useApi();

  // getter
  const setLoading = (status: FetchingStatus) => {
    fetchingStatus.value = status;
  };
  const isLoading = () => {
    return fetchingStatus.value === FetchingStatus.fetching;
  };

  // actions
  const loadProducts = async () => {
    setLoading(FetchingStatus.fetching);
    try {
      const res = await api.getProducts();
      stocks.value = res;
    } catch (error) {
      stocks.value = [];
    } finally {
      setLoading(FetchingStatus.success);
    }
  };

  const onSelect = async (value: any) => {
    setLoading(FetchingStatus.fetching);
    try {
      if (value) {
        const result = await api.getProductByKeyword(value);
        stocks.value = result;
      } else {
        await loadProducts();
      }
    } finally {
      setTimeout(() => {
        setLoading(FetchingStatus.success);
      }, 500);
    }
  };

  const debouncedSearch = lodash.debounce(async (value: string) => {
    setLoading(FetchingStatus.fetching);
    try {
      if (value) {
        const result = await api.getProductByKeyword(value);
        stocks.value = result;
        autoCompleteOptions.value = result.map((product: any) => ({
          value: product.name,
        }));
      } else {
        await loadProducts();
      }
    } finally {
      setTimeout(() => {
        setLoading(FetchingStatus.success);
      }, 500);
    }
  }, 500); // Adjust the debounce delay as needed

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === "uploading") {
      setLoading(FetchingStatus.fetching);
      return "";
    }
    if (info.file.status === "done") {
      console.log("handleUpload");
      const target = info.file.originFileObj as any;
      const fileURL = URL.createObjectURL(target);
      const previewImageUrl = fileURL;
      setLoading(FetchingStatus.success);
      return previewImageUrl;
    }
    if (info.file.status === "removed") {
      setLoading(FetchingStatus.success);
      message.error("file was removed");
      return { status: info.file.status };
    }
    if (info.file.status === "error") {
      setLoading(FetchingStatus.failed);
      message.error("upload error");
      return { status: info.file.status };
    }
  };

  const handleCancel = () => {
    preview.visible = false;
    preview.title = "";
  };

  // @ts-ignore
  const handlePreview = async (file: UploadProps["fileList"][number]) => {
    preview.visible = true;
    preview.title =
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
  };

  watch(
    stocks,
    () => {
      // Update autocomplete options when stocks change
      autoCompleteOptions.value = stocks.value.map((product: Product) => ({
        value: product.name,
      })) as any;
    },
    { deep: true }
  );

  return {
    setLoading,
    fetchingStatus,
    isLoading,
    debouncedSearch,
    loadProducts,
    onSelect,
    stocks,
    autoCompleteOptions,

    handleChange,
    handlePreview,
    handleCancel,
    preview,
  };
});
