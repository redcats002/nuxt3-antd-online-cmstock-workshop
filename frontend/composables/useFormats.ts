import { UploadChangeParam, message } from "ant-design-vue";

export const useFormats = () => {
  const toQuantity = (value: any) => {
    const num = parseFloat(value);
    return num.toFixed(2);
  };

  const toCurrency = (value: any) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    }).format(value);
  };

  const convertToFile = (info: UploadChangeParam) => {
    const file = info.file as any;
    const fileConvert = new File([file.originFileObj] as any, file.name, {
      type: file.type,
      lastModified: file.lastModified,
    });
    return fileConvert;
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  return {
    toCurrency,
    convertToFile,
    toQuantity,
    beforeUpload,
  };
};
